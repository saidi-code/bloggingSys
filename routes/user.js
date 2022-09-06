const userController = require("../controllers/user");
const router = require("express").Router();

router.get("/", userController.getAll);
router.post("/", userController.createUser);
router.get("/:id", userController.findUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
