import { ActionFunctionArgs, redirect } from "react-router-dom";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export async function contactPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const contact = {
    name: formData.get("name"),
    email: formData.get("email"),
    reason: formData.get("reason"),
    notes: formData.get("notes"),
  } as Contact;

  console.log("Submited detail", contact);

  return redirect(`/thank-you/${formData.get("name")}`);
}
