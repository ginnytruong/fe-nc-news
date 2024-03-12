import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSingleArticle, fetchArticleComments } from "../../utils/api";
import Comments from './Comments';

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


    const SingleArticleCard = () => {
        return (
            <div>
                <h1 className="single-article-title">{selectedArticle.title}</h1>
                <p className="single-article-author">Author: {selectedArticle.author}</p>
                <img className="single-article-img" src={selectedArticle.article_img_url}/>
                <p className="single-article-body">{selectedArticle.body}</p>
                <Comments comments ={comments}/>
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
