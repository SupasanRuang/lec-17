import { z } from "zod";
export const bodyChecker = z.object({
  email: z.string().email({ message: "พิมพ์ email ให้ถูกหน่อยค้าบ" }),
  pwd: z
    .string()
    .min(6, { message: "Password must has at least 6 char" })
    .max(12, { message: "Password must not exceed 12 char" }),
  address: z.string().min(1, { message: "Please provide address" }),
  gender: z.enum(["male", "female"], {
    errorMap: () => {
      return { message: "Please select gender" };
    },
  }),
  plan: z.enum(["full", "half", "mini"], {
    errorMap: () => {
      return { message: "Please select plan" };
    },
  }),
});
