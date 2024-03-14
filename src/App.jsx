import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav';
import ArticlesList from './components/ArticlesList';
import ArticlesByTopic from './components/ArticlesByTopic';
import SingleArticle from './components/SingleArticle';
import Users from './components/Users';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider >
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/topics" element={<ArticlesList />} />
          <Route path="/topics/:topic" element={<ArticlesByTopic />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </UserProvider>
    </div>
  );
};
  
  export default App;