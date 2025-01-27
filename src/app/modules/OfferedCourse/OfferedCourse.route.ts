import { Router } from "express";
import validationRequest from "../../middlewares/validateRequest";
import { OfferedCourseValidations } from "./OfferedCourse.validation";
import { OfferedCourseControllers } from "./OfferedCourse.controller";

const router = Router();

router.post(
  "/create-offered-course",
  validationRequest(
    OfferedCourseValidations.createOfferedCourseValidationSchema
  ),
  OfferedCourseControllers.createOfferedCourse
);
router.get("/", OfferedCourseControllers.getAllOfferedCourses);

router.get("/:id", OfferedCourseControllers.getSingleOfferedCourses);

router.patch(
  "/:id",
  validationRequest(
    OfferedCourseValidations.updateOfferedCourseValidationSchema
  ),
  OfferedCourseControllers.createOfferedCourse
);
router.delete("/:id", OfferedCourseControllers.deleteOfferedCourseFromDB);

export const offeredCourseRoutes = router;
