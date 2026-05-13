import { useActionState } from 'react'
import { apiClient } from '@/lib/api-client'
import { SubmitButton } from './submit-button'

export function CreateComment({ postId }) {
  const [state, formAction] = useActionState(
    async (prevState, formData) => {
      const body = formData.get('body')

      try {
        await apiClient.post(`/posts/${postId}/comments`, {
          body,
        })

        return { error: null }
      } catch (error) {
        return { error: error.message }
      }
    },
    { error: null },
  )

  return (
    <form action={formAction} role="form">
      <textarea name="body" />

      <SubmitButton
        label="Add Comment"
        pendingLabel="Adding..."
      />

      {state.error && (
        <p role="alert">{state.error}</p>
      )}
    </form>
  )
}