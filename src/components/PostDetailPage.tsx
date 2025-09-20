import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Tag, Edit2, Trash2 } from 'lucide-react';
import { Post } from '../types';

interface PostDetailPageProps {
  post: Post;
  onBack: () => void;
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

const PostDetailPage: React.FC<PostDetailPageProps> = ({ post, onBack, onEdit, onDelete }) => {
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
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/70 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {post.title}
              </h1>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => onEdit(post)}
                className="p-3 text-white/60 hover:text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all duration-200"
                title="Edit Post"
              >
                <Edit2 size={20} />
              </button>
              <button
                onClick={() => onDelete(post.id)}
                className="p-3 text-white/60 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
                title="Delete Post"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
            <div className="flex items-center space-x-2">
              <User size={18} />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{getReadingTime(post.content)} min read</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex items-center space-x-2 mb-8">
              <Tag size={18} className="text-white/40" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-white/90 leading-relaxed text-lg whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-white/20">
          <div className="flex justify-between items-center">
            <div className="text-white/60">
              <p>Published on {formatDate(post.createdAt)}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => onEdit(post)}
                className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-all duration-200"
              >
                Edit Article
              </button>
              <button
                onClick={onBack}
                className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-all duration-200"
              >
                Back to Home
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PostDetailPage;