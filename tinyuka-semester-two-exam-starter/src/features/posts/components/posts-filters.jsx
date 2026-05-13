import { useContext } from 'react'
import { PostsContext } from '@/context/posts-context'

export function PostsFilters() {
  const { search, filter, dispatch } = useContext(PostsContext)

  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={(e) =>
          dispatch({
            type: 'SET_SEARCH',
            payload: e.target.value,
          })
        }
      />

      <select
        value={filter}
        onChange={(e) =>
          dispatch({
            type: 'SET_FILTER',
            payload: e.target.value,
          })
        }
      >
        <option value="all">All</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>
    </div>
  )
}