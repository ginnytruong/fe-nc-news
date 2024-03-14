import CommentForm from "./CommentForm";
import { deleteComment } from "../../utils/api";
import { UserContext } from "./UserContext";
import { useState, useContext} from 'react'

const CommentCard = ({ comments, article_id }) => {
    const { selectedUser } = useContext(UserContext);
    const [deletedCommentId, setDeletedCommentId] = useState(null);


    const handleDelete = (comment_id) => {
        deleteComment(comment_id)
            .then(() => {
                setDeletedCommentId(comment_id);
            });
    };

    const updatedComments = comments.map(comment => {
        if (comment.comment_id === deletedCommentId) {
            return { ...comment, body: 'This comment has been deleted.' };
        }
        return comment;
    });

    return (
        <>
            <CommentForm article_id={article_id} />
            <div className="comments-card">
                <h2 className="comments-title">Comments</h2>
                <ul className="comment-list">
                    {updatedComments.map(comment => (
                        <li className="comment" key={comment.comment_id}>
                            <p className="comment-body">{comment.body}</p>
                            <p className="comment-author">By: {comment.author}</p>
                            {comment.author === selectedUser && (
                                <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default CommentCard;

