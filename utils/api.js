import axios from 'axios'

const ncNewsApi = axios.create({
    baseURL: 'https://ginny-nc-news.onrender.com/api'
})

export const fetchData = async (endpoint, articles) => {
    const { data } = await ncNewsApi.get(endpoint, { params: { articles } })
    return data
}
