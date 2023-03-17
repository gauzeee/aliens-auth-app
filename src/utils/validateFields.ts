import { emailRegex } from "@/shared/constants";

export const validateFields = (fields: Record<string, FormDataEntryValue>) =>
  Object.entries(fields).reduce((acc, [field, value]) => {
    switch (field) {
      case "email":
        if (typeof value !== "string" || !value.match(emailRegex)) {
          acc.email = "That doesn't look like an email address";
        }
        break;
      case "password_confirmation":
        const password = fields["password"];
        if (typeof value !== "string" || value.length < 6) {
          acc.password_confirmation = "Password must be > 6 characters";
          break;
        }
        if (!!password && password !== value) {
          acc.password_confirmation = "Seems like passwords don't match";
          break;
        }
        break;
      case "password":
        if (typeof value !== "string" || value.length < 6) {
          acc.password = "Password must be > 6 characters";
        }
        break;
      default:
        break;
    }
    return acc;
  }, {} as Record<keyof typeof fields, string>);
