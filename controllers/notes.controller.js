const Note = require("../models/notes.model");

module.exports.notesController = {
  createNotes: async (req, res) => {
    try {
      const notesCreate = await Note.create({
        text: req.body.text,
        student: req.body.student,
      });
      res.json(notesCreate);
    } catch (error) {
      res.json(error);
    }
  },

  deleteNotes: async (req, res) => {
    try {
      const noteDelete = await Note.findByIdAndRemove(req.params.id);
      res.json(noteDelete);
    } catch (error) {
      res.json(error);
    }
  },

  patchNotes: async (req, res) => {
    try {
      const patchNote = await Note.findByIdAndUpdate({
        text: req.body.text,
        student: req.body.student,
      });
      res.json(patchNote);
    } catch (error) {
      res.json(error);
    }
  },

  findAllNotes: async (req, res) => {
    try {
      const AllNotes = await Note.find();
      res.json(AllNotes);
    } catch (error) {
      res.json(error);
    }
  },

  findById: async (req, res) => {
    try {
      const findId = await Note.findById(req.params.id);
      res.json(findId);
    } catch (error) {
      res.json(error);
    }
  },

  findAllNotesStudentGET: async (req, res) => {
    try {
      const AllNotesStudent = await Note.find({
        student: req.params.id,
      });
      res.json(AllNotesStudent);
    } catch (error) {
      res.json(error);
    }
  },
};
