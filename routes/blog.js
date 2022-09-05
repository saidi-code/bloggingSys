const router = require("express").Router();
const blogController = require("../controllers/blogs");

router.post("/blog", blogController.create);
router.get("/blog", blogController.getAll);
router.get("/blog/:id", blogController.findOne);
router.patch("/blog/:id", blogController.updateOne);
router.delete("/blog/:id", blogController.deleteOne);

module.exports = router;
