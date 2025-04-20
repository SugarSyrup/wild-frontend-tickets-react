import TicketForm from "./tickets/TicketForm";
import TicketList from "./tickets/TicketList";
import { useReducer } from "react";
import { reducer } from "./tickets/reducer";

export default function Main() {
  const [tickets, dispatch] = useReducer(reducer, []);

  return (
    <main>
      <TicketList tickets={tickets} dispatch={dispatch} />
      <TicketForm dispatch={dispatch} />
    </main>
  );
}
