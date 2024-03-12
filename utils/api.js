import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://ginny-nc-news.onrender.com/api'
})

export const fetchSingleArticle = async (article_id) => {
    const { data } = await ncNewsApi.get(`/articles/${article_id}`);
    return data;
};

export const fetchArticleComments = async (article_id) => {
    const { data } = await ncNewsApi.get(`/articles/${article_id}/comments`);
    return data.comments;
};

export const fetchArticlesByTopic = async (topic) => {
    const { data } = await ncNewsApi.get(`/articles?topic=${topic}`);
    return data.articles;
};

export const fetchAllArticles = async () => {
    const { data } = await ncNewsApi.get('/articles');
    return data.articles;
};