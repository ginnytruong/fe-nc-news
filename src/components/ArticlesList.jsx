import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { fetchAllArticles } from "../../utils/api";
import Loading from "./Loading";

const ArticlesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetchAllArticles()
            .then((data) => {
                setArticles(data);
                setIsLoading(false);
            })
    }, [setArticles]);

    return (
        <div className="articles-page">
            {isLoading ? (
                <Loading />
            ) : (
                <ul className="article-list">
                    {articles.map((article) => (
                        <li className="article" key={article.article_id}>
                            <Link to={`/articles/${article.article_id}`}>
                                <img src={article.article_img_url} alt={article.title} className="article-img"/>
                                <h1 className="article-title">{article.title}</h1>
                            </Link>
                            <p className="article-author">Author: {article.author}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ArticlesList;
