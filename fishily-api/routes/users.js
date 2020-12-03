const router = require("express").Router();
const ctrl = require("../controllers");

// /api/fishily/users
router.get("/", ctrl.users.index);
router.get("/:id", ctrl.users.show);
router.post("/", ctrl.users.create);
router.put("/:id", ctrl.users.update);
router.delete("/:id", ctrl.users.destroy);
router.post("/login", ctrl.users.logIn);
router.delete("/login", ctrl.users.logOut);

module.exports = router;