import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendSendResponse from "../../utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.Service";

const createAcdemicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcdemicFacultyIntoDB(
    req.body
  );
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty Create SuccessFull",
    data: result,
  });
});
const getAllAcdemicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Faculty reteieve SuccessFull",
    data: result,
  });
});
const getSingleAcdemicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacultyServices.getSingleAcadamicFacultyFromDB(facultyId);
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Single Academic Faculty is reteieve SuccessFull",
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacultyServices.updateAcadamicFacultyIntoDB(
    facultyId,
    req.body
  );
  sendSendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "update Academic Faculty is SuccessFull",
    data: result,
  });
});
export const AcademicFacultyControllers = {
  createAcdemicFaculty,
  getAllAcdemicFaculty,
  getSingleAcdemicFaculty,
  updateAcademicFaculty,
};
