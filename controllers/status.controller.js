const Status = require("../models/status.model");

module.exports.statusController = {
  postStatus: async (req, res) => {
    try {
      const statusPatch = await Status.create({
        status: req.body.status,
      });
      res.json(statusPatch);
    } catch (error) {
      res.json(error);
    }
  },

  deleteStatus: async (req, res) => {
    try {
      const statusDelete = await Status.findByIdAndRemove(req.params.id);
      res.json(statusDelete);
    } catch (error) {
      res.json(error);
    }
  },

  patchStatus: async (req, res) => {
    try {
      const statusPatch = await Status.findByIdAndUpdate({
        status: req.body.status,
      });
    } catch (error) {
      res.json(error);
    }
  },

  findAll: async (req, res) => {
    try {
      const allStatuses = await Status.find();
      res.json(allStatuses);
    } catch (error) {
      res.json(error);
    }
  },

  findByid: async (req, res) => {
    try {
      const findId = await Status.findById(req.params.id);
      res.json(findId);
    } catch (error) {
      res.json(error);
    }
  },
};
