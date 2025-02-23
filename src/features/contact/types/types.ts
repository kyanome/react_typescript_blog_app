import { UseFormReturn } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormReturn = {
  form: UseFormReturn<FormData>;
  submitForm: (data: FormData) => Promise<void>;
  handleClear: () => void;
};
