import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendSendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServices } from "./academicDepartment.services";

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department Create successful",
    data: result,
  });
});

const getAllAcdemicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentFromDB();
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Department retieved successful",
    data: result,
  });
});

const getSingleAcdemicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcdemicDepartment(departmentId);
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Academic Department reteiere Successfull",
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await AcademicDepartmentServices.updateAcademicDepartment(
    departmentId,
    req.body
  );
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update Academic Faculty is SuccessFull",
    data: result,
  });
});
export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcdemicDepartment,
  getSingleAcdemicDepartment,
  updateAcademicDepartment,
};
