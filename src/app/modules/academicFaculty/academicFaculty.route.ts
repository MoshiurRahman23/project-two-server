import { Router } from "express";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import { academicFacultyValidation } from "./academicFaculty.validation";
import validationRequest from "../../middlewares/validateRequest";

const router = Router();

router.post(
  "/create-academic-faculty",
  validationRequest(academicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyControllers.createAcdemicFaculty
);

router.get("/", AcademicFacultyControllers.getAllAcdemicFaculty);

router.get("/:facultyId", AcademicFacultyControllers.getSingleAcdemicFaculty);

router.patch(
  "/:facultyId",
  validationRequest(
    academicFacultyValidation.updateAcademicFacultyValidationSchema
  ),
  AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
