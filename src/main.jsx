import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import { App } from './app/provider'
import './index.css'

const queryClient = new QueryClient()
const root = createRoot(document.getElementById('root'))

if (root) {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
      <App />
      </QueryClientProvider>
    </StrictMode>,
  )
}
