import { z } from "zod";

const UserValidationSchema = z.object({
  id: z
    .string({ required_error: "User ID is required." })
    .min(1, "User ID cannot be empty."),
  password: z
    .string({ required_error: "Password is required." })
    .min(1, "Password cannot be empty.")
    .optional(),
  needsPasswordChange: z.boolean().default(true).optional(), // Default values are handled outside the strict schema validation
  role: z.enum(["admin", "student", "faculty"], {
    required_error: "Role is required.",
    invalid_type_error: "Invalid role type.",
  }),
});

export const UserValidation = {
  UserValidationSchema,
};
