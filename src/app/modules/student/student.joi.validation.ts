import Joi from 'Joi';

//creating a schema validation using joi
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Z][a-z]*$/)
    .messages({
      'string.pattern.base': '{#label} must start with an uppercase letter.',
      'any.required': 'First name is required.',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base':
        '{#label} must contain only alphabetic characters.',
      'any.required': 'Last name is required.',
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': "Father's name is required.",
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': "Father's contact number is required.",
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': "Father's occupation is required.",
  }),
  motherName: Joi.string().required().messages({
    'any.required': "Mother's name is required.",
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': "Mother's contact number is required.",
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': "Mother's occupation is required.",
  }),
});

const LocalGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': "Local guardian's name is required.",
  }),
  contactNo: Joi.string().required().messages({
    'any.required': "Local guardian's contact number is required.",
  }),
  occupation: Joi.string().required().messages({
    'any.required': "Local guardian's occupation is required.",
  }),
  address: Joi.string().required().messages({
    'any.required': "Local guardian's address is required.",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    'any.required': 'Student id is required.',
  }),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Student name is required.',
  }),
  gender: Joi.string().valid('male', 'female').required().messages({
    'any.only': "{#label} is not supported. Use 'male' or 'female'.",
    'any.required': 'Gender is required.',
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required().messages({
    'string.email': '{#label} must be a valid email address.',
    'any.required': 'Email address is required.',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact number is required.',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency contact number is required.',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .messages({
      'any.only':
        "{#label} is not supported. Use 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'.",
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present address is required.',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent address is required.',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required.',
  }),
  LocalGuardian: LocalGuardianValidationSchema.required().messages({
    'any.required': 'Local guardian information is required.',
  }),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

// end of creating a schema validation using joi

export default studentValidationSchema;
