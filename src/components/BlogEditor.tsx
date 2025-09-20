import React, { useState, useEffect } from 'react';
import { Save, X } from 'lucide-react';
import { Post } from '../types';

interface BlogEditorProps {
  post?: Post;
  onSave: (post: Omit<Post, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [category, setCategory] = useState(post?.category || 'general');
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setAuthor(post.author);
      setCategory(post.category);
      setTags(post.tags.join(', '));
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author.trim() || !category.trim()) return;

    const tagArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    
    onSave({
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      category: category.trim(),
      tags: tagArray,
      excerpt: content.trim().substring(0, 200) + (content.length > 200 ? '...' : ''),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {post ? 'Edit Post' : 'Create New Post'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 text-white/60 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white/80 font-medium mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              placeholder="Enter your blog post title..."
              required
            />
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-2">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              placeholder="Your name..."
              required
            />
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              required
            >
              <option value="general">General</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
              <option value="food">Food</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
            </select>
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
              placeholder="web development, react, javascript"
            />
          </div>

          <div>
            <label className="block text-white/80 font-medium mb-2">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 resize-none"
              placeholder="Write your blog post content here..."
              rows={12}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Save size={20} />
              <span>{post ? 'Update Post' : 'Create Post'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;