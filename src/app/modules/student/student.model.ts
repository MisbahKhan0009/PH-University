import validator from 'validator';
import { Schema, model, connect } from 'mongoose';
import {
  Guardian,
  localGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required.'],
    message: '{VALUE} is not a valid first name.',
  },
  middleName: {
    type: String,
    trim: true,
    required: false,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required.'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required."],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required."],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required."],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required."],
  },
});

const LocalGaurdianSchema = new Schema<LocalGaurdian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required."],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required."],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required."],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required."],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student id is required.'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "{VALUE} is not supported. Use 'male' or 'female'.",
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'Email address is required.'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
    },
  },
  contactNo: {
    type: String,
    required: [true, 'Contact number is required.'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required.'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        "{VALUE} is not supported. Use 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'.",
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required.'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required.'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: LocalGaurdianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
