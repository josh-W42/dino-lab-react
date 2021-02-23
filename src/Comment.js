const Comment = (props) => {
  return (
    <div className="comment">
      <p>
        <span>{props.poster}:  </span> 
        <span>{props.content}</span>
      </p>
    </div>
  );
}
export default Comment;