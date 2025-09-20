import React, { useState } from 'react';
import { Calendar, User, Tag, Clock, Search } from 'lucide-react';
import { Post } from '../types';

interface HomePageProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
  onEditPost: (post: Post) => void;
  onDeletePost: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ posts, onPostClick, onEditPost, onDeletePost }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [postsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginate posts
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Welcome to the Cosmos
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore thoughts, ideas, and stories that travel through the infinite expanse of creativity
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts List */}
            <div className="space-y-8">
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-white/60 text-xl">
                    {searchTerm || selectedCategory !== 'all' 
                      ? 'No posts found matching your criteria.' 
                      : 'No posts yet. Create your first cosmic story!'
                    }
                  </p>
                </div>
              ) : (
                paginatedPosts.map(post => (
                  <article 
                    key={post.id}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
                    onClick={() => onPostClick(post)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200">
                        {post.title}
                      </h2>
                      <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 mb-4 text-white/60 text-sm">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{getReadingTime(post.content)} min read</span>
                      </div>
                    </div>

                    <p className="text-white/80 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="flex items-center space-x-2">
                        <Tag size={16} className="text-white/40" />
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 bg-white/10 text-white/60 rounded text-xs"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4 mt-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-200"
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                        currentPage === page
                          ? 'bg-purple-600 text-white'
                          : 'bg-white/10 text-white/70 hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all duration-200"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Author Profile */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">About the Author</h3>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="text-white" size={32} />
                  </div>
                  <h4 className="text-white font-medium mb-2">Cosmic Explorer</h4>
                  <p className="text-white/70 text-sm">
                    Passionate writer exploring the infinite possibilities of creativity and technology.
                  </p>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Recent Posts</h3>
                <div className="space-y-3">
                  {posts.slice(0, 3).map(post => (
                    <div 
                      key={post.id}
                      className="cursor-pointer hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
                      onClick={() => onPostClick(post)}
                    >
                      <h4 className="text-white/90 font-medium text-sm mb-1 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-white/60 text-xs">
                        {formatDate(post.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.filter(cat => cat !== 'all').map(category => {
                    const count = posts.filter(post => post.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="flex justify-between items-center w-full text-left p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-white/80 capitalize">{category}</span>
                        <span className="text-white/60 text-sm">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;