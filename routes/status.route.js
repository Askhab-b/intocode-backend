const { Router } = require("express");
const { statusController } = require("../controllers/status.controller");

const router = Router();

router.post("/statuses", statusController.postStatus);
router.delete("/statuses/:id", statusController.deleteStatus);
router.patch("/statuses/:id", statusController.patchStatus);
router.get("/statuses", statusController.findAll);
router.get("/statuses/:id", statusController.findByid);

module.exports = router;
