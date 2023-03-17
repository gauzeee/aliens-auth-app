export type AvailableFields = "input" | "password";

export type FormField = {
  label: string;
  required?: boolean;
  type: AvailableFields;
  disabled?: boolean;
};

export type ActionLink = {
  to: string;
  text: string;
};

export type FormFields = Record<string, FormField>;
