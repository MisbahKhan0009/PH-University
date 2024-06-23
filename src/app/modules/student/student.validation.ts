import { z } from 'zod';

// UserName schema
const userNameSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required.'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().min(1, 'Last name is required.'),
});

// Guardian schema
const guardianSchema = z.object({
  fatherName: z.string().min(1, "Father's name is required."),
  fatherContactNo: z.string().min(1, "Father's contact number is required."),
  fatherOccupation: z.string().min(1, "Father's occupation is required."),
  motherName: z.string().min(1, "Mother's name is required."),
  motherContactNo: z.string().min(1, "Mother's contact number is required."),
  motherOccupation: z.string().min(1, "Mother's occupation is required."),
});

// LocalGuardian schema
const localGuardianSchema = z.object({
  name: z.string().min(1, "Local guardian's name is required."),
  contactNo: z.string().min(1, "Local guardian's contact number is required."),
  occupation: z.string().min(1, "Local guardian's occupation is required."),
  address: z.string().min(1, "Local guardian's address is required."),
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, 'Student id is required.'),
  name: userNameSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: "Gender must be 'male' or 'female'." }),
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email('Invalid email address.'),
  contactNo: z.string().min(1, 'Contact number is required.'),
  emergencyContactNo: z
    .string()
    .min(1, 'Emergency contact number is required.'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, 'Present address is required.'),
  permanentAddress: z.string().min(1, 'Permanent address is required.'),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});

// Export the student schema for validation purposes
export { studentValidationSchema };
