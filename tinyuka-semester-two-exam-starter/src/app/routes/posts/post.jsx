import { useParams } from "react-router"
import { useHead } from "@unhead/react"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"

import { usePost } from "@/features/posts/api/get-post"
import { useComments } from "@/features/comments/api/get-comments"

import { PostView } from "@/features/posts/components/post-view"
import { PostViewSkeleton } from "@/features/posts/components/post-view-skeleton"

import { CommentsList } from "@/features/comments/components/comments-list"
import { CommentsListSkeleton } from "@/features/comments/components/comments-list-skeleton"
import { CreateComment } from "@/features/comments/components/create-comment"

import { ErrorFallback } from "@/components/ui/error-boundary/error-fallback"

export default function PostRoute() {
  const { id } = useParams()

  const { data: post } = usePost(id)
  const { data: comments } = useComments(id)

  useHead({
    title: post?.title,
  })

  return (
    <div>
      <Suspense fallback={<PostViewSkeleton />}>
        <PostView post={post} />
      </Suspense>

      <h2>Comments</h2>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<CommentsListSkeleton />}>
          <CommentsList comments={comments} />
        </Suspense>
      </ErrorBoundary>

      <CreateComment postId={id} />
    </div>
  )
}