import { useState, useContext } from 'react';
import { postComment } from '../../utils/api';
import { UserContext } from '../components/UserContext';

const CommentForm = ({ article_id }) => {
    const [comment, setComment] = useState({ body: '' });
    const [submitMessage, setSubmitMessage] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const { selectedUser } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedUser) {
            setSubmitMessage('Please sign in to leave a comment!');
            return;
        }

        setIsPosting(true);
        postComment(article_id, { ...comment, username: selectedUser })
            .then(() => {
                setComment({ body: '' });
                setSubmitMessage('Comment posted successfully!');
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
                <button type="post-comment-button">
                    {isPosting ? 'Posting...' : 'Post Comment'}
                </button>
                {submitMessage && <p>{submitMessage}</p>}
            </form>
        </div>
    );
};

export default CommentForm;
