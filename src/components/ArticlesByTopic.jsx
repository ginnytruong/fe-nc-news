import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import Loading from "./Loading";

const ArticlesByTopic = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchArticlesByTopic(topic)
            .then(data => {
                setArticles(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(error => {
                setError(error)
                setIsLoading(false)
            })
    }, [topic, setArticles]);

    if (error && error.response && error.response.status === 404) {
        return <NotFound />;
    }

    const articlesByTopicMap = articles.map((article) => (
        <li className="article" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
            <img src={article.article_img_url} alt={article.title} className="article-img"/>
            <h2 className="article-title">{article.title}</h2>
            </Link>
            <p className="article-author">Author: {article.author}</p>
        </li>
    ));

    return (
        <>
            <div className="articles-page">
                <h1 className="topic-header">Articles on {topic}</h1>
                {isLoading ? (
                    <Loading />
                ) : (
                    <ul className="article-list">
                        {articlesByTopicMap}
                    </ul>
                )}
            </div>
        </>
    );
};

export default ArticlesByTopic;