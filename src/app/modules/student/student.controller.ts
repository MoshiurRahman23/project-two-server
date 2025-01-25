import { studentServices } from "./student.services";
import sendSendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentFromDB(req.query);
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student Retrieve Successfull",
    data: result,
  });
});

const getSingalStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingalStudentFromDB(studentId);
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Student Retrieve Successfull",
    data: result,
  });
});
const getDeletedStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDB(studentId);
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student Deleted Successfull",
    data: result,
  });
});
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateStudentIntoDB(studentId, student);

  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated succesfully",
    data: result,
  });
});
export const studentControllers = {
  getAllStudent,
  getSingalStudent,
  getDeletedStudent,
  updateStudent,
};
