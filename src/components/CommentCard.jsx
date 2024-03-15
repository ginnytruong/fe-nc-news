import CommentForm from "./CommentForm";
import { deleteComment, fetchArticleComments, postComment } from "../../utils/api";
import { UserContext } from "./UserContext";
import { useState, useContext, useEffect} from 'react'

const CommentCard = ({ article_id }) => {
    const { selectedUser } = useContext(UserContext);
    const [comments, setComments] = useState([]); 
    const [deletedCommentId, setDeletedCommentId] = useState(null);

    useEffect(() => {
        fetchArticleComments(article_id)
            .then(setComments);
    }, [article_id]);
    
    const handleDelete = (comment_id) => {
        deleteComment(comment_id)
            .then(() => {
                setDeletedCommentId(comment_id);
            });
    };
    
    useEffect(() => {
        fetchArticleComments(article_id)
        .then(() => {
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment.comment_id === deletedCommentId
              ? { ...comment, body: 'This comment has been deleted.' }
              : comment))
        });
    }, [comments]);

    const handleNewComment = async (comment) => {
        try {
            const newComment = await postComment(article_id, comment);
            setComments(prevComments => [newComment, ...prevComments]);
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    return (
        <>
            <CommentForm article_id={article_id} onNewComment={handleNewComment}/>
            <div className="comments-card">
                <h2 className="comments-title">Comments</h2>
                <ul className="comment-list">
                    {comments.map(comment => (
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

