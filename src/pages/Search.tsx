import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { postService } from '../services/postService';
import type { BlogPost } from '../types';
import { Loader2, AlertCircle, Search as SearchIcon } from 'lucide-react';

// Reusable Post Card Component (Consider moving to components/PostCard.tsx)
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

// Props are no longer needed as we get query from URL
// interface SearchProps {
//   posts: BlogPost[];
// }

export function Search() { // Removed posts prop
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || ''; // Get query from URL
  
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
        setResults(postService.getAllPosts()); // Show all if no query
        return;
    }

    setIsLoading(true);
    setError(null);
    try {
      // Simulate search delay (optional)
      // await new Promise(resolve => setTimeout(resolve, 300));
      const searchResults = postService.searchPosts(query);
      setResults(searchResults);
    } catch (err) {
      console.error("Search failed:", err);
      setError("Failed to perform search. Please try again.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, [query]); // Re-run search when query changes

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Search Results {query && `for "${query}"`}
      </h1>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">Searching...</span>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-64 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <AlertCircle className="h-10 w-10 text-red-500 mb-3" />
          <p className="text-red-700 dark:text-red-300 text-center">{error}</p>
        </div>
      ) : results.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <SearchIcon className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No posts found matching "{query}".
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Try searching for something else or 
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline ml-1">view all posts</Link>.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
} 