import React, { useState, useCallback } from 'react';
import SpaceBackground from './components/SpaceBackground';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PostDetailPage from './components/PostDetailPage';
import AboutPage from './components/AboutPage';
import GamesPage from './components/GamesPage';
import BlogEditor from './components/BlogEditor';
import { Post, PageType } from './types';

function App() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Welcome to the Cosmic Blog Universe',
      content: `Welcome to this immersive blogging experience! This is your cosmic space where thoughts travel faster than light and ideas sparkle like distant stars.

This comprehensive blog platform offers everything you need for a complete blogging experience:

🏠 **Home Page**: Browse all your articles with advanced search and filtering capabilities
📖 **Article Details**: Read full articles with beautiful typography and smooth interactions  
👤 **About Page**: Learn about the author and connect through social media
🎮 **Games Section**: Take breaks with classic games like Pac-Man, Tetris, and Battle City
✍️ **Real-time Editor**: Create and edit posts with categories, tags, and rich formatting

The blog features a stunning 3D animated space background with moving meteorites, stars, and floating planets. Every interaction is smooth and delightful, from hover effects to page transitions.

Navigation is intuitive with a fixed header that provides easy access to all sections. The responsive design ensures a perfect experience on all devices, from mobile phones to desktop computers.

Click "Write" in the navigation to create your first post, or explore the different sections to see all the features this cosmic blog has to offer. The universe of creativity awaits your words!`,
      author: 'Cosmic Blog Team',
      createdAt: new Date(),
      category: 'general',
      tags: ['welcome', 'blog', 'cosmic', 'introduction'],
      excerpt: 'Welcome to this immersive blogging experience! This is your cosmic space where thoughts travel faster than light and ideas sparkle like distant stars...',
    },
  ]);

  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleNavigate = useCallback((page: PageType) => {
    setCurrentPage(page);
    setSelectedPost(null);
  }, []);

  const handlePostClick = useCallback((post: Post) => {
    setSelectedPost(post);
    setCurrentPage('post');
  }, []);

  const handleNewPost = useCallback(() => {
    setEditingPost(null);
    setShowEditor(true);
  }, []);

  const handleEditPost = useCallback((post: Post) => {
    setEditingPost(post);
    setShowEditor(true);
  }, []);

  const handleSavePost = useCallback((postData: Omit<Post, 'id' | 'createdAt'>) => {
    if (editingPost) {
      setPosts(prev => prev.map(post =>
        post.id === editingPost.id
          ? { ...editingPost, ...postData }
          : post
      ));
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        createdAt: new Date(),
        ...postData,
      };
      setPosts(prev => [newPost, ...prev]);
    }
    setShowEditor(false);
    setEditingPost(null);
    setCurrentPage('home');
  }, [editingPost]);

  const handleDeletePost = useCallback((id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setPosts(prev => prev.filter(post => post.id !== id));
      if (selectedPost?.id === id) {
        setCurrentPage('home');
        setSelectedPost(null);
      }
    }
  }, []);

  const handleCancel = useCallback(() => {
    setShowEditor(false);
    setEditingPost(null);
  }, []);

  const handleBackToHome = useCallback(() => {
    setCurrentPage('home');
    setSelectedPost(null);
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            posts={posts}
            onPostClick={handlePostClick}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
          />
        );
      case 'post':
        return selectedPost ? (
          <PostDetailPage
            post={selectedPost}
            onBack={handleBackToHome}
            onEdit={handleEditPost}
            onDelete={handleDeletePost}
          />
        ) : (
          <HomePage
            posts={posts}
            onPostClick={handlePostClick}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
          />
        );
      case 'about':
        return <AboutPage />;
      case 'games':
        return <GamesPage />;
      default:
        return (
          <HomePage
            posts={posts}
            onPostClick={handlePostClick}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SpaceBackground />
      
      <div className="relative z-10">
        <Navigation 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onNewPost={handleNewPost}
        />
        
        <main>
          {renderCurrentPage()}
        </main>
      </div>

      {showEditor && (
        <BlogEditor
          post={editingPost}
          onSave={handleSavePost}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default App;