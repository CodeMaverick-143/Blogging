import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, AlertCircle } from 'lucide-react';
import type { BlogPost } from '../types';
import { postService } from '../services/postService';

// Reusable Post Card Component (can be moved to components/ later)
const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link
    to={`/post/${post.id}`}
    className="group block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
  >
    <div className="relative overflow-hidden h-48">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4">
         {post.tags.slice(0, 1).map((tag) => (
           <span
            key={tag}
            className="inline-block bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-medium shadow"
           >
            {tag}
           </span>
         ))}
      </div>
    </div>
    <div className="p-5">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
        {post.title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span className="font-medium text-gray-700 dark:text-gray-300">{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  </Link>
);

export function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(9);
  const postsToShow = posts.slice(0, visiblePosts);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchedPosts = postService.getAllPosts();
      setPosts(fetchedPosts);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      setError("Failed to load posts. Please try again later.");
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + 6);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <span className="ml-2 text-gray-600 dark:text-gray-400">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
        <AlertCircle className="h-10 w-10 text-red-500 mb-3" />
        <p className="text-red-700 dark:text-red-300 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {/* Optional: Featured Post Section */}
      {/* You could add a larger featured post card here */} 
      
      {/* Blog Post Grid */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Posts</h1>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No posts available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsToShow.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* Load More Button */}
      {visiblePosts < posts.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMorePosts}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 font-medium"
          >
            Load More Posts
          </button>
        </div>
      )}
    </div>
  );
}