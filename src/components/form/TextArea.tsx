import { TextAreaFieldProps } from "./types";
import React from "react";

const TextArea = ({ label, error, ...props }: TextAreaFieldProps) => {
  return (
    <div className="mb-6">
      <div className="flex">
        <label htmlFor={props.id} className="font-semibold w-40 p-2">
          {label}
        </label>
        <div className="flex-1">
          <textarea
            className="w-full h-60 p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
            {...props}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
