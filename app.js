const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const url = process.env.URL;
const port = process.env.PORT;
const middlewareLog = require('./middlewares/middleware');

const BlogRoute = require('./routes/blogRoutes')
const LoginRoute = require('./routes/loginRoutes')
const UserRoute = require('./routes/userRoutes')
const statisticRouter = require("./routes/statisticRouter");


const app = express();
app.use(cors());

mongoose.connect(url)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log("Error: ", error));

app.use(express.json());

app.use(middlewareLog);

app.use("/statistics", statisticRouter);
app.use("/blogs",BlogRoute);
app.use("/login",LoginRoute);
app.use("/users",UserRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
