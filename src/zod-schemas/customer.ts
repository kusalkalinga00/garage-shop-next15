import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { customers } from "@/db/schema";

export const insertCustomerSchema = createInsertSchema(customers, {
  firstName: (schema) => schema.firstName.min(1, "First name is required"),
  lastName: (schema) => schema.lastName.min(1, "Last name is required"),
  address1: (schema) => schema.address1.min(1, "Address is required"),
  city: (schema) => schema.city.min(1, "City is required"),
  state: (schema) => schema.state.length(2, "State must be 2 characters"),
  email: (schema) => schema.email.email("Invalid email"),
  zip: (schema) => schema.zip.regex(/^\d{5}$/, "Invalid zip code"),
  phone: (schema) => schema.phone.regex(/^\d{10}$/, "Invalid phone number"),
});

export const selectCustomerSchema = createSelectSchema(customers);
export type insertCustomerSchemaType = typeof insertCustomerSchema._type;
export type selectCustomerSchemaType = typeof selectCustomerSchema._type;
