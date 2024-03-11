import { useContext, useState, useEffect } from "react";
import ArticleContext from '../context/ArticleContext'
import { fetchData } from "../../utils/api";

const Articles = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { articles, setArticles } = useContext(ArticleContext);

    useEffect(() => {
        setIsLoading(true);
        fetchData('/articles')
            .then(data => {
                setArticles(data.articles);
                setIsLoading(false);
            })
    }, [setArticles]);


    const articlesMap = articles.map((article) => (
        <li className="article" key={article.article_id}>
            <img src={article.article_img_url} alt={article.title} className="article-img"/>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-author">Author: {article.author}</p>
        </li>
    ));

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

export default Articles;