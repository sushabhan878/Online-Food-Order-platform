import { z } from "zod"

export const userSignupSchema = z.object({
    fullname: z.string().min(1, "Full name is Required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    contact: z.string().min(10, "Contact must be 10 characters")
})

export type signupInputState = z.infer<typeof userSignupSchema>


export const userLoginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
})

export type loginInputState = z.infer<typeof userLoginSchema>