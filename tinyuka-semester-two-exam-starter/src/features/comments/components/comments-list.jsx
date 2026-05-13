import { CommentCard } from './comment-card'
import { useComments } from '@/features/comments/api/get-comments'

export function CommentsList({ comments, postId }) {
  // ALWAYS call hook at top level (React rule)
  const { data } = useComments(postId)

  const commentsData = comments ?? data ?? []
  const safeComments = Array.isArray(commentsData) ? commentsData : []

  if (safeComments.length === 0) {
    return <p>No comments</p>
  }

  return (
    <div>
      {safeComments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  )
}