import React from 'react'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
}

function Wrapper({ children }) {
  const queryClient = createTestQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export function renderWithProviders(ui, options) {
  return render(ui, {
    wrapper: Wrapper,
    ...options,
  })
}