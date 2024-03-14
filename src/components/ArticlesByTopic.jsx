import { useState, useEffect } from "react";
import { fetchArticlesByTopic } from "../../utils/api";
import { Link, useParams } from "react-router-dom";

const ArticlesByTopic = () => {
    const { topic } = useParams();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchArticlesByTopic(topic)
            .then(data => {
                setArticles(data);
                setIsLoading(false);
            })
    }, [topic, setArticles]);

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
        <div className="articles-page">
            {isLoading ? (
                <p>Loading articles...</p>
            ) : (
                <ul className="article-list">
                    {articlesByTopicMap}
                </ul>
            )}
        </div>
    );
};

export default ArticlesByTopic;