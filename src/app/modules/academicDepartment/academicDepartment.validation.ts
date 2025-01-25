import { z } from "zod";

const academicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Academic Department must be string",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic Department Must be required",
      required_error: "Faculty is required",
    }),
  }),
});
const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Academic Department must be string",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic Department Must be required",
        required_error: "Faculty is required",
      })
      .optional(),
  }),
});
export const AcademicDepartmentValidation = {
  academicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
