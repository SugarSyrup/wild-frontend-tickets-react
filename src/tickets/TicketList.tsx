import { memo } from "react";
import TicketItem from "./TicketItem";
import { Ticket, Dispatch } from "./types";

const TicketItemMemo = memo(TicketItem);

export default function TicketList({
  tickets,
  dispatch,
}: {
  tickets: Ticket[];
  dispatch: Dispatch;
}) {
  return (
    <ul id="ticket-list">
      {tickets.map((ticket) => (
        <TicketItemMemo key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </ul>
  );
}
