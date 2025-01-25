import express from "express";
import { studentControllers } from "./student.controller";
import validationRequest from "../../middlewares/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

router.get("/", studentControllers.getAllStudent);

router.patch(
  "/:studentId",
  validationRequest(studentValidations.updateStudentValidationSchema),
  studentControllers.updateStudent
);

router.delete("/:studentId", studentControllers.getDeletedStudent);

router.get("/:studentId", studentControllers.getSingalStudent);

export const StudentRoutes = router;
