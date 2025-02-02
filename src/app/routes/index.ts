import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";
import { FacultyRoutes } from "../modules/faculty/faculty.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { CourseRoutes } from "../modules/Course/course.route";
import { semesterRegistrationRoutes } from "../modules/semesterRegistration/semesterRegistration.route";
import { offeredCourseRoutes } from "../modules/OfferedCourse/OfferedCourse.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/faculties",
    route: FacultyRoutes,
  },
  {
    path: "/admins",
    route: AdminRoutes,
  },

  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academic-semisters",
    route: AcademicSemesterRoutes,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRoutes,
  },
  {
    path: "/academic-department",
    route: AcademicDepartmentRoutes,
  },
  {
    path: "/courses",
    route: CourseRoutes,
  },
  {
    path: "/semesterRegistration",
    route: semesterRegistrationRoutes,
  },
  {
    path: "/offeredCourse",
    route: offeredCourseRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
