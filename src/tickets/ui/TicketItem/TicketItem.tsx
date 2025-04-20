import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import { Ticket, Dispatch } from "../../model/types";

export default function TicketItem({
  ticket,
  dispatch,
}: {
  ticket: Ticket;
  dispatch: Dispatch;
}) {
  const handleClick = () => {
    dispatch({ type: "toggleTicketStatus", id: ticket.id });
  };

  return (
    <li key={ticket.id}>
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <button className="status" onClick={handleClick}>
        {ticket.status === "open" ? "Open" : "Closed"}
      </button>

      <CommentForm ticketId={ticket.id} dispatch={dispatch} />
      <li>
        <CommentList
          comments={ticket.comments}
          ticketId={ticket.id}
          dispatch={dispatch}
        />
      </li>
    </li>
  );
}
