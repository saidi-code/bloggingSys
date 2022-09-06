const router = require("express").Router();
const blogController = require("../controllers/blogs");

router.post("/", blogController.create);
router.get("/", blogController.getAll);
router.get("/:id", blogController.findOne);
router.patch("/:id", blogController.updateOne);
router.delete("/:id", blogController.deleteOne);

module.exports = router;
