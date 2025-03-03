import { useForm, FieldError } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ValidationError } from "../components/common/ValidationError";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactRHFPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const navigate = useNavigate();

  function onSubmit(contact: Contact) {
    console.log(contact);

    navigate(`/thank-you/${contact.name}&${contact.email}`);
  }

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError
      ? "border-red-500 flex flex-col mb-2"
      : "flex flex-col mb-2";
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact us</h2>
      <p className="mb-3">
        If you enter your details, We will get back you as soon as we can
      </p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={getEditorStyle(errors.name)}>
          <label htmlFor="name"> Your name </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "You must enter your name" })}
          />

          <ValidationError fieldError={errors.name} />
        </div>
        <div className={getEditorStyle(errors.email)}>
          <label htmlFor="email"> Your email </label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "You must register you email address",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />

          <ValidationError fieldError={errors.email} />
        </div>
        <div className={getEditorStyle(errors.reason)}>
          <label htmlFor="reason"> Reason you need to contact us </label>
          <select
            id="reason"
            {...register("reason", { required: "You must enter your reason" })}
          >
            <option value=""></option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <ValidationError fieldError={errors.reason} />
        </div>
        <div>
          <label htmlFor="notes"> Additional notes </label>
          <textarea id="notes" {...register("notes")} />
        </div>

        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
