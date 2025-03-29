import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { BlogPost } from './pages/BlogPost';
import { Search } from './pages/Search';
import { Login } from './pages/Login';
import { NewPost } from './pages/NewPost';
import { PostForm } from './components/PostForm';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { postService } from './services/postService';

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/search" element={<Search posts={postService.getAllPosts()} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/edit/:id" element={<PostForm mode="edit" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;