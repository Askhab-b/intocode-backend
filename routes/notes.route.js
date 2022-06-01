const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.post("/notes", notesController.createNotes);
router.delete("/notes/:id", notesController.deleteNotes);
router.patch("/notes/:id", notesController.patchNotes);
router.get("/notes", notesController.findAllNotes);
router.get("/notes/:id", notesController.findById);

module.exports = router;
