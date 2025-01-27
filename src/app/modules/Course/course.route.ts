import { Router } from "express";
import validationRequest from "../../middlewares/validateRequest";
import { CourseValidation } from "./course.validation";
import { CourseControllers } from "./course.controller";
const router = Router();

router.post(
  "/create-course",
  validationRequest(CourseValidation.courseValidationSchema),
  CourseControllers.createCourseIntoDB
);

router.patch(
  "/:id",
  validationRequest(CourseValidation.updateCourseValidationSchema),
  CourseControllers.updateCourseIntoDB
);

router.put(
  "/:courseId/assign-faculties",
  validationRequest(CourseValidation.facultiesCoursesValidationSchema),
  CourseControllers.assignCourseIntoDB
);

router.delete(
  "/:courseId/remove-faculties",
  validationRequest(CourseValidation.facultiesCoursesValidationSchema),
  CourseControllers.removeCoursefromDB
);

router.get("/", CourseControllers.getAllCourseFromDB);

router.get("/:id", CourseControllers.getSingleCourseFromDB);

router.delete("/:id", CourseControllers.deleteCourseFromDB);

export const CourseRoutes = router;
