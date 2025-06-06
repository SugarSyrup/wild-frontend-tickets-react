import { FormEvent } from "react";
import { Dispatch } from "../../model/types";
import TextField from "../../../common/TextField";
import TextArea from "../../../common/TextArea";
import SubmitButton from "../../../common/SubmitButton";

export default function TicketForm({ dispatch }: { dispatch: Dispatch }) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    dispatch({ type: "addTicket", title, description });

    form.reset();
  };

  return (
    <form id="add-ticket-form" onSubmit={handleSubmit}>
      <TextField label="Title" name="title" placeholder="Title" />
      <TextArea
        label="Description"
        name="description"
        placeholder="Description"
      />
      <SubmitButton label="Add Ticket" />
    </form>
  );
}
