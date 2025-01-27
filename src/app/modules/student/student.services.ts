import { startSession } from "mongoose";
import { Student } from "./student.model";
import AppError from "../../errors/AppErrors";
import httpStatus from "http-status";
import { User } from "../user/user.model";
import { TStudent } from "./student.interface";
import QueryBuilder from "../../builder/QueryBuilder";
import { studerntSearchAbleField } from "./student.constant";

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  // const queryObj = { ...query };
  // const studerntSearchAbleField = ["email", "name.firstName", "presentAddress"];
  // let searchTerm = "";
  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }

  // const searchQuery = Student.find({
  //   $or: studerntSearchAbleField.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: "i" },
  //   })),
  // });

  // const excludeFields = ["searchTerm", "sort", "limit", "page", "fields"];

  // excludeFields.forEach((el) => delete queryObj[el]);
  // const filterQuery = searchQuery
  //   .find(queryObj)
  //   .populate("admissionSemester")
  //   .populate({
  //     path: "academicDepartment",
  //     populate: {
  //       path: "academicFaculty",
  //     },
  //   });

  // let sort = "-createdAt";
  // if (query.sort) {
  //   sort = query.sort as string;
  // }
  // const sortQuery = filterQuery.sort(sort);

  // let page = 1;
  // let limit = 1;
  // let skip = 0;
  // if (query.limit) {
  //   limit = Number(query.limit);
  // }

  // if (query.page) {
  //   page = Number(query.page);
  //   skip = (page - 1) * limit;
  // }
  // const paginateQuery = sortQuery.skip(skip);

  // const limitQuery = paginateQuery.limit(limit);

  // // fields: 'name,email'; // WE ARE ACCEPTING FROM REQUEST
  // fields: 'name email'; // HOW IT SHOULD BE

  // let fields = "-__v"; // SET DEFAULT VALUE

  // if (query.fields) {
  //   fields = (query.fields as string).split(",").join(" ");
  // }

  // const fieldQuery = await limitQuery.select(fields);

  // return fieldQuery;

  const studentQuery = new QueryBuilder(
    Student.find()
      .populate("admissionSemester")
      .populate({
        path: "academicDepartment",
        populate: {
          path: "academicFaculty",
        },
      }),
    query
  )
    .search(studerntSearchAbleField)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await studentQuery.modelQuery;
  return result;
};

const getSingalStudentFromDB = async (id: string) => {
  //   const result = await Student.findOne({ id });
  const result = await Student.findById(id)
    .populate("admissionSemester")
    .populate({
      path: "academicDepartment",
      populate: {
        path: "academicFaculty",
      },
    });
  return result;
};
const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  //   const result = await Student.findOne({ id });

  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);
  const result = await Student.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const session = await startSession();
  try {
    session.startTransaction();

    const deleteStudent = await Student.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session }
    );
    if (!deleteStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to deleted Student");
    }

    const userId = deleteStudent.user;

    const deleteUser = await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true, session }
    );
    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to deleted Student");
    }

    await session.commitTransaction();
    await session.endSession();

    return deleteStudent;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const studentServices = {
  getAllStudentFromDB,
  getSingalStudentFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB,
};
