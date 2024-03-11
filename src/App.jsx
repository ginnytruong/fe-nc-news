import './App.css';
import Header from './components/Header'
import Nav from './components/Nav';
import Articles from './components/Articles'
import ArticlesByTopic from './components/ArticlesByTopic'
import { Routes, Route } from 'react-router-dom';

function App() {

    return (
    <div className="App">
        <Header />
        <Nav />
        <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/topics/:topic" element={<ArticlesByTopic/>} />
        </Routes>
        </div>
    )
}

export default App;