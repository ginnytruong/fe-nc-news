import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Articles from './components/Articles';
import ArticlesByTopic from './components/ArticlesByTopic';
import ArticleContext from './context/ArticleContext';
import { Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

function App() {

    const [articles, setArticles] = useState([]);

    return (
    <div className="App">
        <Header />
        <Nav />
        <ArticleContext.Provider value={{ articles, setArticles }}>
        <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/topics/:topic" element={<ArticlesByTopic/>} />
        </Routes>
        </ArticleContext.Provider>
        </div>
    )
}

export default App;