import express from "express";
import { UserControllers } from "./user.controller";
import validationRequest from "../../middlewares/validateRequest";
import { studentValidations } from "../student/student.validation";
import { FacultyValidations } from "../faculty/faculty.validation";
import { createAdminValidationSchema } from "../admin/admin.validation";

const router = express.Router();

router.post(
  "/create-student",
  validationRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent
);

router.post(
  "/create-faculty",
  validationRequest(FacultyValidations.createFacultyValidationSchema),
  UserControllers.createFaculty
);
router.post(
  "/create-admin",
  validationRequest(createAdminValidationSchema),
  UserControllers.createAdmin
);

export const UserRoutes = router;
