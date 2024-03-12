const Comments = ({ comments }) => {
    return (
        <div className="comments-card">
            <h2 className="comments-title">Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.comment_id}>
                        <p>{comment.body}</p>
                        <p>By: {comment.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Comments;