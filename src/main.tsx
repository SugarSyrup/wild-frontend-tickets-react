import TicketForm from "./tickets/ui/TicketForm/TicketForm";
import TicketList from "./tickets/ui/TicketList/TicketList";
import { useReducer } from "react";
import { reducer } from "./tickets/libs/reducer";

export default function Main() {
  const [tickets, dispatch] = useReducer(reducer, []);

  return (
    <main>
      <TicketList tickets={tickets} dispatch={dispatch} />
      <TicketForm dispatch={dispatch} />
    </main>
  );
}
