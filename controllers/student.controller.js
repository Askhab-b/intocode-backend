const Student = require("../models/student.model");

module.exports.studentController = {
  postStudent: async (req, res) => {
    try {
      const studentPost = await Student.create({
        name: req.body.name,
        group: req.body.group,
        note: req.body.note,
        payment: req.body.payment,
      });
      res.json(studentPost);
    } catch (error) {
      res.json(error);
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const studentDelete = await Student.findByIdAndRemove(req.params.id);
      res.json(studentDelete);
    } catch (error) {
      res.json(error);
    }
  },

  patchStudent: async (req, res) => {
    try {
      const studentPatch = await Student.findByIdAndUpdate({
        name: req.body.name,
        group: req.body.group,
        note: req.body.note,
        payment: req.body.payment,
      });
      res.json(studentPatch);
    } catch (error) {
      res.json(error);
    }
  },

  findStudent: async (req, res) => {
    try {
      const StudentFind = await Student.findById(req.params.id);
      res.json(StudentFind);
    } catch (error) {
      res.json(error);
    }
  },

  findAllStudents: async (req, res) => {
    try {
      const allStudents = await Student.find();
      res.json(allStudents);
    } catch (error) {
      res.json(error);
    }
  },

  findStudentsInGroupGET: async (req, res) => {
    try {
      const FindStudentInGroups = await Student.find({
        group: req.params.id,
      });
      res.json(FindStudentInGroups);
    } catch (error) {
      res.json(error);
    }
  },

  getStudentsByPaymentFull: async (req, res) => {
    try {
      const studentPayment = await Student.find({
        payment: 100,
      });
      res.json(studentPayment);
    } catch (error) {
      res.json(error);
    }
  },

  getStudentsByPaymentNull: async (req, res) => {
    try {
      const studentPaymentNull = await Student.find({
        payment: 0,
      });
      res.json(studentPaymentNull);
    } catch (error) {
      res.json(error);
    }
  },

  getStudentsByPaymentFifty: async (req, res) => {
    try {
      const studentPaymentFifty = await Student.find({
        payment: 50,
      });
      res.json(studentPaymentFifty);
    } catch (error) {
      res.json(error);
    }
  },
};
