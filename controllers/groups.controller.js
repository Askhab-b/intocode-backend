const Group = require("../models/groups.model");
const Student = require("../models/student.model");

module.exports.groupsController = {
  postGroups: async (req, res) => {
    try {
      const groupsPost = await Group.create({
        name: req.body.name,
        week: req.body.week,
        finish: req.body.finish,
      });
      res.json(groupsPost);
    } catch (error) {
      res.json(error);
    }
  },

  groupDelete: async (req, res) => {
    try {
      const deleteGroup = await Group.findByIdAndRemove(req.params.id);
      res.json(deleteGroup);
    } catch (error) {
      res.json(error);
    }
  },

  patchGroups: async (req, res) => {
    try {
      const groupsPatch = await Group.findByIdAndUpdate({
        name: req.body.name,
        week: req.body.week,
        finish: req.body.finish,
      });
      res.json(groupsPatch);
    } catch (error) {
      res.json(error);
    }
  },

  findGroups: async (req, res) => {
    try {
      const groupsFind = await Group.find();
      res.json(groupsFind);
    } catch (error) {
      res.json(error);
    }
  },

  findGroupsById: async (req, res) => {
    try {
      const findByIdgroup = await Group.findById(req.params.id);
      res.json(findByIdgroup);
    } catch (error) {
      res.json(error);
    }
  },

  findGroupsInWeek: async (req, res) => {
    try {
      const WeekGroups = await Group.find({ week: req.params.id });
      res.json(WeekGroups);
    } catch (error) {
      res.json(error);
    }
  },

  findGroupsInWeekFinishTeach: async (req, res) => {
    try {
      const TeachFinish = await Group.find({ finish: req.params.id });
      res.json(TeachFinish);
    } catch (error) {
      res.json(error);
    }
  },

  findPercentInGroupsOffer: async (req, res) => {
    try {
      const students = await Student.find({ name: req.params.id });
      const offer = students.filter((i) => i.offer);
      const percent = Math.floor((offer.length * 100) / students.length);
      res.json(`процент людей получили оффер: ${percent}%`);
    } catch (error) {
      res.json(error);
    }
  },
};
