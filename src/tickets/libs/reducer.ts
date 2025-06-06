import { Ticket, TicketAction } from "../model/types";

export function reducer(tickets: Ticket[], action: TicketAction): Ticket[] {
  switch (action.type) {
    case "addTicket": {
      const id = Math.max(...tickets.map((ticket) => ticket.id), 0) + 1;

      const ticket: Ticket = {
        id,
        title: action.title,
        description: action.description,
        status: "open",
        comments: [],
      };
      return [...tickets, ticket];
    }

    case "toggleTicketStatus": {
      return tickets.map((ticket) =>
        ticket.id === action.id
          ? { ...ticket, status: ticket.status === "open" ? "closed" : "open" }
          : ticket
      );
    }

    case "addComment": {
      const commentIds = tickets.reduce(
        (commentIds, ticket) => [
          ...commentIds,
          ...ticket.comments.map((comment) => comment.id),
        ],
        [] as number[]
      );

      const id = Math.max(...commentIds, 0) + 1;

      const results = tickets.map((ticket) =>
        ticket.id === action.ticketId
          ? {
              ...ticket,
              comments: [
                ...ticket.comments,
                {
                  id,
                  content: action.content,
                },
              ],
            }
          : ticket
      );

      console.log(results);

      return results;
    }

    case "deleteComment": {
      return tickets.map((ticket) =>
        ticket.id === action.ticketId
          ? {
              ...ticket,
              comments: ticket.comments.filter(
                (comment) => comment.id !== action.commentId
              ),
            }
          : ticket
      );
    }
  }
}
