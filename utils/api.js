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

export const fetchAllArticles = async () => {
    const { data } = await ncNewsApi.get('/articles');
    return data.articles;
};

export const patchArticleVotes = async (article_id, patchBody) => {
    await ncNewsApi.patch(`/articles/${article_id}`, patchBody);
};

export const postComment = async (article_id, comment) => {
    const { data } = await ncNewsApi.post(`/articles/${article_id}/comments`, comment);
    return data.comments;
};

export const fetchUsers = async () => {
    const { data } = await ncNewsApi.get('/users');
    return data.users;
};

export const fetchArticlesByTopic = async (topic) => {
    const { data } = await ncNewsApi.get(`/articles?topic=${topic}`);
    return data.articles;
};

export const deleteComment = async (comment_id) => {
    const { data } = await ncNewsApi.delete(`/comments/${comment_id}`);
    return data.comments;
};