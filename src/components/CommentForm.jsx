import { useState, useContext } from 'react';
import { postComment } from '../../utils/api';
import { UserContext } from '../../context/UserContext';

const CommentForm = ({ article_id, onNewComment }) => {
    const [comment, setComment] = useState({ body: '' });
    const [submitMessage, setSubmitMessage] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const { selectedUser, isLoggedIn } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isLoggedIn) {
            setSubmitMessage('Please sign in to leave a comment!');
            return;
        }
        setIsPosting(true);
        postComment(article_id, { username: selectedUser, body: comment.body})
            .then((newComment) => {
                onNewComment(prevComments => [...prevComments, newComment])
                setComment({ username: selectedUser, body: '' });
                setSubmitMessage('Comment posted successfully.');
            })
            .finally(() => {
                setIsPosting(false);
            });
    };

    return (
        <div className="comment-form">
            <form id="user-comments-form" onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment.body}
                    onChange={(e) => setComment({ ...comment, body: e.target.value })}
                    placeholder="Enter your comment"
                    rows={4}
                    cols={50}
                    required
                />
                <button type="submit" disabled={isPosting}>
                    {isPosting ? 'Posting...' : 'Post Comment'}
                </button>
                {submitMessage ? <p>{submitMessage}</p> : null}
            </form>
        </div>
    );
};

export default CommentForm;
