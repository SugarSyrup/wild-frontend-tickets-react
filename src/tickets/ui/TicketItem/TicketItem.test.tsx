import { beforeEach, describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import { Ticket } from "../../model/types";
import TicketItem from "./TicketItem";

const context = describe;

describe("TicketItem describe", () => {
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

  function renderTicketItem() {
    render(<TicketItem ticket={ticket} dispatch={dispatch} />);
  }

  it("renders title and description", () => {
    renderTicketItem();

    screen.getByText(/TITLE/);
    screen.getByText(/DESCRIPTION/);
  });

  context("when user clicks toggle button", () => {
    it("calls dispatch function", () => {
      renderTicketItem();

      fireEvent.click(screen.getByRole("button", { name: /Open/ }));

      expect(dispatch).toBeCalled();

      const firstArguments = dispatch.mock.calls[0];

      const action = firstArguments[0];

      expect(action.type).toBe("toggleTicketStatus");
      expect(action.id).toBe(ticket.id);

      expect(action).toEqual({
        type: "toggleTicketStatus",
        id: ticket.id,
      });
    });
  });

  it("renders comments", () => {
    renderTicketItem();

    screen.getByText(/COMMENT/);
  });
});
