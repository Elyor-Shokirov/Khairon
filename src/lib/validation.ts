import z from 'zod'

export const contactFormSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email(),
	textarea: z.string().min(10),
	phone_number: z.string().min(5).max(20),
	service: z.string().min(2).max(100),
})
