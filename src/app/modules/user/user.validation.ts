import { z } from 'zod';

const createUserValidationSchema = z.object({
  userName: z.string({
    invalid_type_error: 'Password must be string',
  }),
  email: z.string({
    invalid_type_error: 'Password must be string',
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};
