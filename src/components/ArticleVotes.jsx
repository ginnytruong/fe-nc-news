import { patchArticleVotes } from '../../utils/api';
import { useState } from 'react'

const ArticleVotes = ({article_id, votes}) => {
    const [newVotes, setNewVotes] = useState(0);

    const increaseVotes = () => {
        setNewVotes(newVotes + 1);
        patchArticleVotes(article_id, {inc_votes:1});
    }

    const decreaseVotes = () => {
        setNewVotes(newVotes - 1);
        patchArticleVotes(article_id, {inc_votes: -1})
    }

    const totalVotes = votes + newVotes;

    return (
            <div className='vote-buttons'>
            <button className='vote-button upvote' onClick={increaseVotes}>⬆️</button>
            <span className='vote-count'> votes: {totalVotes}</span>
            <button className='vote-button downvote' onClick={decreaseVotes}>⬇️</button>
        </div>
    )
}
export default ArticleVotes;