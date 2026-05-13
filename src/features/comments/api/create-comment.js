import {useMutation, useQueryClient } from "@tanstack/react-query"
import { apiClient } from "@/lib/api-client"

export function useCreateComment({ postId }){
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data) => apiClient.post(`/posts/${postId}/comments`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['comments', postId],
      })
  },
})
}
