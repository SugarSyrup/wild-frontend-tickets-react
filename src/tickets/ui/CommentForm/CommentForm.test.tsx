import { render, screen, fireEvent } from "@testing-library/react";
import { Ticket } from "../../model/types";
import { vi } from "vitest";
import CommentForm from "./CommentForm";

const context = describe;

describe("CommentForm describe", () => {
  const ticket: Ticket = {
    id: 1,
    title: "TITLE",
    description: "DESCRIPTION",
    status: "open",
    comments: [{ id: 1, content: "COMMENT" }],
  };

  const dispatch = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  context("when user submits comment", () => {
    it("calls dispatch function", () => {
      render(<CommentForm ticketId={ticket.id} dispatch={dispatch} />);

      fireEvent.change(screen.getByRole("textbox", { name: /Comment/ }), {
        target: { value: "New Comment" },
      });
      fireEvent.click(screen.getByRole("button", { name: /Add Comment/ }));

      expect(dispatch).toBeCalled();

      const firstArguments = dispatch.mock.calls[0];

      const action = firstArguments[0];

      expect(action.type).toBe("addComment");
      expect(action.ticketId).toBe(ticket.id);
      expect(action.content).toBe("New Comment");
    });
  });
});
