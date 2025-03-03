import { FormEvent, useState } from "react";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Submited detail", contact);
  }

  const fieldStyle = "flex flex-col mb-2";

  const [contact, setContact] = useState<Contact>({
    name: "",
    email: "",
    reason: "",
    notes: "",
  });

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-bold underline mb-3">Contact us</h2>
      <p className="mb-3">
        If you enter your details, We will get back you as soon as we can
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className={fieldStyle}>
          <label htmlFor="name"> Your name </label>
          <input
            type="text"
            value={contact.name}
            id="name"
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email"> Your email </label>
          <input
            type="text"
            id="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason"> Reason you need to contact us </label>
          <select
            id="reason"
            value={contact.reason}
            onChange={(e) => setContact({ ...contact, reason: e.target.value })}
          >
            <option value=""></option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes"> Additional notes </label>
          <textarea
            id="notes"
            value={contact.notes}
            onChange={(e) => setContact({ ...contact, notes: e.target.value })}
          />
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
