import { model, Schema } from "mongoose";
import {
  TCourse,
  TCourseFaculties,
  TPreRequisiteCourse,
} from "./course.interface";

const preRequisiteCoursesSchema = new Schema<TPreRequisiteCourse>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const courseSchema = new Schema<TCourse>({
  title: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  prefix: {
    type: String,
    trim: true,
    required: true,
  },
  code: {
    type: Number,
    required: true,
    trim: true,
  },
  credits: {
    type: Number,
    trim: true,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  preRequisiteCourses: [preRequisiteCoursesSchema],
});

export const Course = model<TCourse>("Course", courseSchema);

const courseFacultySchema = new Schema<TCourseFaculties>({
  course: {
    type: Schema.Types.ObjectId,
    unique: true,
    trim: true,
    required: true,
    ref: "Course",
  },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Faculty",
    },
  ],
});

export const courseFaculty = model<TCourseFaculties>(
  "CourseFaculty",
  courseFacultySchema
);
