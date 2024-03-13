import { useEffect, useState } from 'react';
import { fetchUsers, postComment } from '../../utils/api';

const CommentForm = ({ article_id }) => {
    const [comment, setComment] = useState({ username: '', body: '' });
    const [existingUser, setExistingUser] = useState([]);
    const [submitMessage, setSubmitMessage] = useState('');
    const [isPosting, setIsPosting] = useState(false);

    useEffect(() => {
        fetchUsers()
            .then((user) => {
                setExistingUser(user);
            })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const userExists = existingUser.find(user => user.username === comment.username);

        setSubmitMessage('');
        setIsPosting(userExists);

        if (userExists) {
            postComment(article_id, comment)
                .then(() => {
                    setComment({ username: '', body: '' });
                    setSubmitMessage('Comment posted successfully!')
                })
                .finally(()=>{
                    setIsPosting(false)
                })
        } else {
            setSubmitMessage('Please sign up to leave a comment!');
        }
    };

    return (
                <div className="comment-form">
                    <form id="user-comments-form" onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            required
                            value={comment.username}
                            onChange={(event) => setComment({ ...comment, username: event.target.value })}
                        />
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
                        <button type="post-comment-button" disabled={isPosting}>{isPosting ? 'Posting...' : 'Post Comment'}</button>
                        {submitMessage ? <p>{submitMessage}</p> : null}
                    </form>
                </div>
    )
};

export default CommentForm;