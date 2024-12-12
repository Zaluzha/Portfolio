"use server";

import { z } from "zod";

const contactSchema = z.object({
  username: z.string().min(1, "Username is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    username: formData.get("username"),
    phoneNumber: formData.get("phoneNumber"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  // Here you would typically send an email or save to a database
  // For this example, we'll just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    success: `Thank you, ${validatedFields.data.username}! Your message has been sent successfully.`,
  };
}
