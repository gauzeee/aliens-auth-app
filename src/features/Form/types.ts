import { RadioOption } from "@/components/Radio/Radio";

export type AvailableFields = "input" | "password" | "radio";

export type FormField = {
  label: string;
  required?: boolean;
  type: AvailableFields;
  disabled?: boolean;
  options?: RadioOption[];
};

export type ActionLink = {
  to: string;
  text: string;
};

export type FormFields = Record<string, FormField>;
