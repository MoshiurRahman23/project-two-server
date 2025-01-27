import express from "express";
import { studentControllers } from "./student.controller";
import validationRequest from "../../middlewares/validateRequest";
import { studentValidations } from "./student.validation";

const router = express.Router();

router.get("/", studentControllers.getAllStudent);

router.patch(
  "/:id",
  validationRequest(studentValidations.updateStudentValidationSchema),
  studentControllers.updateStudent
);

router.delete("/:id", studentControllers.getDeletedStudent);

router.get("/:id", studentControllers.getSingalStudent);

export const StudentRoutes = router;
