import { Dispatch } from "./types";
import { FormEvent } from "react";
import TextField from "../common/TextField";
import SubmitButton from "../common/SubmitButton";

export default function CommentForm({
  ticketId,
  dispatch,
}: {
  ticketId: number;
  dispatch: Dispatch;
}) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const content = formData.get("content") as string;

    dispatch({ type: "addComment", ticketId, content });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Comment" name="content" placeholder="Comment" />
      <SubmitButton label="Add Comment" />
    </form>
  );
}
