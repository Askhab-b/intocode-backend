const { Router } = require("express");
const { groupsController } = require("../controllers/groups.controller");

const router = Router();

router.post("/groups", groupsController.postGroups);
router.delete("/groups/:id", groupsController.groupDelete);
router.patch("/groups/:id", groupsController.patchGroups);
router.get("/groups", groupsController.findGroups);
router.get("/groups/:id", groupsController.findGroupsById);

router.get('/groups', groupsController.findGroupsInWeek)
router.get('/groups', groupsController.findGroupsInWeekFinishTeach)
router.get('/groups', groupsController.findPercentInGroupsOffer)

module.exports = router;
