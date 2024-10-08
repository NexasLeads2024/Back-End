const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getOneUser);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
