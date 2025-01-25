import { Router } from "express";
import { AcademicDepartmentController } from "./academicDepartment.controller";
import validationRequest from "../../middlewares/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";

const router = Router();

router.post(
  "/create-academic-department",
  // validationRequest(
  //   AcademicDepartmentValidation.academicDepartmentValidationSchema
  // ),
  AcademicDepartmentController.createAcademicDepartment
);
router.get("/", AcademicDepartmentController.getAllAcdemicDepartment);

router.get(
  "/:departmentId",
  AcademicDepartmentController.getSingleAcdemicDepartment
);

router.patch(
  "/:departmentId",
  validationRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
