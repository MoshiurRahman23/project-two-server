import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CourseServices } from "./course.services";

const createCourseIntoDB = catchAsync(async (req, res) => {
  const result = await CourseServices.createCourseIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Course Create SuccessFull",
    data: result,
  });
});
const getAllCourseFromDB = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourseFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Course reteieve SuccessFull",
    data: result,
  });
});
const getSingleCourseFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Course is reteieve SuccessFull",
    data: result,
  });
});
const deleteCourseFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourseFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete Course  SuccessFull",
    data: result,
  });
});
const updateCourseIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CourseServices.updateCourseIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update Course is SuccessFull",
    data: result,
  });
});
const assignCourseIntoDB = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseServices.assignFacultiesWithCourseIntoDB(
    courseId,
    faculties
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Assign Course  SuccessFull",
    data: result,
  });
});

const removeCoursefromDB = catchAsync(async (req, res) => {
  const { courseId } = req.params;
  const { faculties } = req.body;
  const result = await CourseServices.removeFacultiesWithCourseFromDB(
    courseId,
    faculties
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Remove Course SuccessFull",
    data: result,
  });
});
export const CourseControllers = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
  assignCourseIntoDB,
  updateCourseIntoDB,
  removeCoursefromDB,
};
