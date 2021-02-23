import Comment from './Comment';

const Post = (props) => {
  return (
    <div className="post">
      <h1>{props.post.title}</h1>
      <h2>by {props.post.author}</h2>
      <p>{props.post.body}</p>
      <h3>Comments:</h3>
      {props.post.comments.map(comment => (<Comment key={`comment${comment.id}`} poster={comment.poster} content={comment.content} />))}
    </div>
  );
}

export default Post;