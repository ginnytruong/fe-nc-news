import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSingleArticle, fetchArticleComments } from "../../utils/api";
import CommentCard from './CommentCard';
import ArticleVotes from './ArticleVotes';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchSingleArticle(article_id)
        .then((data) => {
            setSelectedArticle(data);
            setIsLoading(false);
        })
        fetchArticleComments(article_id)
        .then((data) => {
            setComments(data)
        })
    }, [article_id]);

    const updateVotes= (newVotes) => {
        setSelectedArticle((article) => {
            return {...article, votes: newVotes};
        });
    };

    const SingleArticleCard = () => {
        return (
            <div>
                <h1 className="single-article-title">{selectedArticle.title}</h1>
                <p className="single-article-author">Author: {selectedArticle.author}</p>
                <img className="single-article-img" src={selectedArticle.article_img_url}/>
                <p className="single-article-body">{selectedArticle.body}</p>
                <ArticleVotes article_id={article_id} votes={selectedArticle.votes} updateVotes={updateVotes}/>
                <CommentCard comments={comments} article_id={article_id}/>
            </div>
        )
        }

    return(
        <div className="single-article">
            {isLoading ? (
                <p>Loading article...</p>
            ) : (
                <div className="single-article-card">
                    <SingleArticleCard />
                </div>
            )}
        </div>
    )
};

export default SingleArticle;
