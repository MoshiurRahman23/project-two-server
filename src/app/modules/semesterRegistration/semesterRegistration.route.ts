import { Router } from "express";
import validationRequest from "../../middlewares/validateRequest";
import { SemesterRegistrationValidation } from "./semesterRegistration.validation";
import { SemesterRegistrationController } from "./semesterRegistration.collection";

const router = Router();

router.post(
  "/create-semester-registration",
  validationRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidationSchema
  ),
  SemesterRegistrationController.createSemesterRegistration
);

router.get("/", SemesterRegistrationController.getAllSemesterRegistrations);

router.get(
  "/:id",
  SemesterRegistrationController.getSingleSemesterRegistration
);

router.patch(
  "/:id",
  validationRequest(
    SemesterRegistrationValidation.updateSemesterRegistrationValidationSchema
  ),
  SemesterRegistrationController.updateSemesterRegistration
);

export const semesterRegistrationRoutes = router;
