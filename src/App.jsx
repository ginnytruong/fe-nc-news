import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import ArticlesByTopic from './components/ArticlesByTopic';
import SingleArticle from './components/SingleArticle';
import { Routes, Route } from 'react-router-dom';



function App() {

    return (
    <div className="App">
        <Header />
        <Nav />
        <Routes>
        <Route path="/" element={<ArticlesList/>} />
        <Route path="/articles" element={<ArticlesList/>} />
        <Route path="/topics" element={<ArticlesList/>} />
        <Route path="/topics/:topic" element={<ArticlesByTopic/>} />
        <Route path="/articles/:article_id" element={<SingleArticle/>} /> {/* Ensure SingleArticle component is rendered when the route matches */}
                {/* Placeholder text */}
                <Route path="/articles/:article_id" element={<div>Single Article Placeholder</div>} />
        </Routes>
        </div>
    )
}

export default App;