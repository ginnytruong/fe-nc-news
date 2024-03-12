import { useState, useEffect } from "react";
import { fetchData } from "../../utils/api";
import { Link } from 'react-router-dom';

const ArticlesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchData('/articles')
            .then((data) => {
                setArticles(data.articles);
                setIsLoading(false);
            })
    }, [setArticles]);

    const articlesMap = articles.map((article) => 
        <li className="article" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
                <img src={article.article_img_url} alt={article.title} className="article-img"/>
                <h1 className="article-title">{article.title}</h1>
            </Link>
            <p className="article-author">Author: {article.author}</p>
        </li>
        )

    return (
        <div className="articles-page">
            {isLoading ? (
                <p>Loading articles...</p>
            ) : (
                <ul className="article-list">
                    {articlesMap}
                </ul>
            )}
        </div>
    );
};

export default ArticlesList;