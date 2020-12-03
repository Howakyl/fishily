const router = require("express").Router();
const ctrl = require("../controllers");

// /api/fishily/posts
router.get("/", ctrl.posts.index);
router.get("/:id", ctrl.posts.show);
router.post("/:id", ctrl.posts.create);
router.put("/:id", ctrl.posts.update);
router.delete("/:id", ctrl.posts.destroy);

module.exports = router;