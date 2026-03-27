import { z } from 'zod';

// POST /auth/login (request body)

export const LoginRequest = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Password is required'),
});

export type LoginBody = z.infer<typeof LoginRequest>;

// Responser (for når man kobler mot ekte API) 

/** Placeholder-brukerform for senere justering mot PublicUserSchema */
export const LoginUserPreview = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
});

export const LoginResponse = z.object({
  ok: z.literal(true),
  user: LoginUserPreview,
  accessToken: z.string(),
});

export type LoginReply = z.infer<typeof LoginResponse>;
