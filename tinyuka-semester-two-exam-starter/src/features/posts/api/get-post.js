import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api-client'

export function getPostQueryOptions(id) {
  return queryOptions({
    queryKey: ['posts', id],
    queryFn: () => apiClient.get(`/posts/${id}`),
  })
}

export function usePost(id) {
  return useSuspenseQuery(getPostQueryOptions(id))
}