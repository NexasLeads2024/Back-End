const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogController");
const auth = require("../middlewares/auth");

router.get("/", controller.getAllBlogs);
router.get("/:id", controller.getOneBlog);
router.post("/", controller.createBlog);
router.put("/:id", controller.updateBlog);
router.delete("/:id", controller.deleteBlog);

module.exports = router;
