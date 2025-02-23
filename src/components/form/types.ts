import { ComponentPropsWithRef } from "react";
import { FieldError } from "react-hook-form";

export interface FieldBaseProps {
  label: string;
  error?: FieldError;
}

export type InputFieldProps = ComponentPropsWithRef<"input"> & FieldBaseProps;
export type TextAreaFieldProps = ComponentPropsWithRef<"textarea"> &
  FieldBaseProps;
