import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../lib/constants";
import { ContactFormReturn, FormData } from "../types/types";

export const useContactForm = (): ContactFormReturn => {
  const form = useForm<FormData>();

  const submitForm = async (data: FormData) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("送信しました");
        form.reset();
      } else {
        alert("送信に失敗しました");
      }
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  const handleClear = () => {
    form.reset();
  };

  return {
    form,
    submitForm,
    handleClear,
  };
};
