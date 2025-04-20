import { beforeEach, describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import { Ticket } from "../../model/types";
import CommentList from "./CommentList";

const context = describe;

describe("TicketItem describe", () => {
  const dispatch = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  context("when user clicks comment delete button", () => {
    it("calls dispatch function", () => {
      const ticket: Ticket = {
        id: 1,
        title: "TITLE",
        description: "DESCRIPTION",
        status: "open",
        comments: [
          { id: 1, content: "COMMENT" },
          { id: 2, content: "COMMENT2" },
        ],
      };

      render(
        <CommentList
          comments={ticket.comments}
          ticketId={ticket.id}
          dispatch={dispatch}
        />
      );

      const commentElement = screen.getByText("COMMENT2");

      fireEvent.click(
        commentElement.querySelector("button") as HTMLButtonElement
      );

      expect(dispatch).toBeCalled();
      const firstArguments = dispatch.mock.calls[0];

      const action = firstArguments[0];

      expect(action.type).toBe("deleteComment");
      expect(action.ticketId).toBe(ticket.id);
      expect(action.commentId).toBe(2);

      expect(action).toEqual({
        type: "deleteComment",
        ticketId: ticket.id,
        commentId: 2,
      });
    });
  });
});
