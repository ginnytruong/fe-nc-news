import CommentForm from "./CommentForm";
import { deleteComment, fetchArticleComments, postComment } from "../../utils/api";
import { UserContext } from "./UserContext";
import { useState, useContext, useEffect} from 'react'

const CommentCard = ({ article_id }) => {
    const { selectedUser } = useContext(UserContext);
    const [comments, setComments] = useState([]);
    const [deletedCommentId, setDeletedCommentId] = useState(null);
    
    useEffect(() => {
        fetchArticleComments(article_id).then(setComments);
    }, [article_id]);

    const handleDelete = (comment_id) => {
        deleteComment(comment_id)
            .then(() => {
                setDeletedCommentId(comment_id);
            });
    };
    
    const handleNewComment = (comment) => {
        postComment(article_id, comment)
            .then((newComment) => {
                setComments(prevComments => [newComment, ...prevComments]);
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
            <CommentForm article_id={article_id} onNewComment={handleNewComment}/>
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

