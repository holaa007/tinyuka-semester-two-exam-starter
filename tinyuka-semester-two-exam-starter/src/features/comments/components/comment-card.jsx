export function CommentCard({ comment }) {
  return (
    <article>
      <p>{comment.body}</p>
      <small>{comment.userId}</small>
    </article>
  )
}