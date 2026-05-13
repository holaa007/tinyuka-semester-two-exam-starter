import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'

export function getCommentsQueryOptions(postId) {
  return queryOptions({
    queryKey: ['comments', postId],
    queryFn: () => apiClient.get(`/posts/${postId}/comments`),
  })
}

export function useComments(postId) {
  return useSuspenseQuery(getCommentsQueryOptions(postId))
}