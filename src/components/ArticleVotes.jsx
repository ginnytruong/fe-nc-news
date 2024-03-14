import { patchArticleVotes } from '../../utils/api';

const ArticleVotes = ({article_id, votes, updateVotes}) => {

    const increaseVotes = () => {
        updateVotes(votes + 1);
        patchArticleVotes(article_id, {inc_votes:1});
    }

    const decreaseVotes = () => {
        updateVotes(votes - 1);
        patchArticleVotes(article_id, {inc_votes: -1})
    }

    return (
            <div className='vote-buttons'>
            <button className='vote-button upvote' onClick={increaseVotes}>⬆️</button>
            <span className='vote-count'> votes: {votes}</span>
            <button className='vote-button downvote' onClick={decreaseVotes}>⬇️</button>
        </div>
    )
}
export default ArticleVotes;