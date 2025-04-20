export interface Comment {
  id: number;
  content: string;
}

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: "open" | "closed";
  comments: Comment[];
}

export interface TicketActions {
  addTicket({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): void;

  toggleTicketStatus(id: number): void;

  addComment({
    ticketId,
    content,
  }: {
    ticketId: number;
    content: string;
  }): void;
}

export interface AddTicketAction {
  type: "addTicket";
  title: string;
  description: string;
}

export interface ToggleTicketStatusAction {
  type: "toggleTicketStatus";
  id: number;
}

interface AddCommentAction {
  type: "addComment";
  ticketId: number;
  content: string;
}

export type TicketAction =
  | AddTicketAction
  | ToggleTicketStatusAction
  | AddCommentAction;

export type Dispatch = (action: TicketAction) => void;
