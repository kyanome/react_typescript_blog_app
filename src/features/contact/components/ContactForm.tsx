import { useContactForm } from "../hooks/useContactForm";
import Input from "../../../components/form/Input";
import { formValidations } from "../lib/validations";
import TextArea from "@/components/form/TextArea";

function ContactForm() {
  const { form, submitForm, handleClear } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="w-full max-w-2xl p-6">
      <form onSubmit={handleSubmit(submitForm)}>
        <div>
          <div className="mb-6">
            <Input
              label="お名前"
              type="text"
              id="name"
              placeholder="お名前を入力してください"
              {...register("name", formValidations["name"])}
              error={errors["name"]}
            />
          </div>

          <div className="mb-6">
            <Input
              label="メールアドレス"
              type="email"
              id="email"
              placeholder="メールアドレスを入力してください"
              {...register("email", formValidations["email"])}
              error={errors["email"]}
            />
          </div>

          <div className="mb-6">
            <TextArea
              label="本文"
              id="message"
              placeholder="本文を入力してください"
              {...register("message", formValidations["message"])}
              error={errors["message"]}
            />
          </div>
        </div>

        <div className="flex space-x-4 justify-center mt-5">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
          >
            {"送信"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="mt-4 px-4 py-2 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-600 hover:text-white"
          >
            {"クリア"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
