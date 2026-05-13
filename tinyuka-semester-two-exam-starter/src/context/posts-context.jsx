import { createContext, useReducer } from 'react'

const initialState = {
  search: '',
  filter: 'all',
}

function postsReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload }

    case 'SET_FILTER':
      return { ...state, filter: action.payload }

    default:
      return state
  }
}

export const PostsContext = createContext(null)

export function PostsProvider({ children }) {
  const [state, dispatch] = useReducer(postsReducer, initialState)

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  )
}