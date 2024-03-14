import CommentForm from "./CommentForm";
import  { UserContext } from '../components/UserContext';
import { useContext } from "react";

const CommentCard = ({ comments, article_id }) => {
    const { selectedUser } = useContext(UserContext)

    return (
        <>
        <CommentForm article_id={article_id} />
        <div className="comments-card">
            <h2 className="comments-title">Comments</h2>
            <ul className="comment-list">
                {comments.map(comment => (
                    <li className="comment" key={comment.comment_id}>
                        <p className="comment-body">{comment.body}</p>
                        <p className="comment-author">By: {comment.author}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default CommentCard;