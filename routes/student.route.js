const { Router } = require("express");
const { studentController } = require("../controllers/student.controller");

const router = Router();

router.post("/Students", studentController.postStudent);
router.delete("/Students/:id", studentController.deleteStudent);
router.patch("/Students/:id", studentController.patchStudent);
router.get("/Students/:id", studentController.findStudent);
router.get("/Students", studentController.findAllStudents);

module.exports = router;
