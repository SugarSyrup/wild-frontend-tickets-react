import { Comment, Dispatch } from "../../model/types";

export default function CommentList({
  comments,
  ticketId,
  dispatch,
}: {
  comments: Comment[];
  ticketId: number;
  dispatch: Dispatch;
}) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.content}
          <button
            onClick={() =>
              dispatch({
                type: "deleteComment",
                ticketId: ticketId,
                commentId: comment.id,
              })
            }
          >
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
}
