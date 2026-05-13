export function PostView({ post }) {
  return (
    <article>
      <h1>{post.title}</h1>

      <p>{post.body}</p>

      <time dateTime={post.createdAt}>
        {new Date(post.createdAt).toLocaleDateString()}
      </time>
    </article>
  )
}