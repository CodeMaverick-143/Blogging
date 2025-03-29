import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Clock, User, Edit, Trash2, ArrowLeft } from "lucide-react";
import type { BlogPost } from "../types";
import { postService } from "../services/postService";
import { NotFound } from './NotFound';

export function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? postService.getPostById(id) : undefined;

  if (!post) {
    return <NotFound message="Blog post not found." />;
  }

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      if (id) {
        postService.deletePost(id);
        navigate('/', { replace: true, state: { message: 'Post deleted successfully.' } });
      }
    }
  };

  const formattedContent = post.content
    .split('\n\n')
    .map((paragraph, index) => (
      <p key={index} className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {paragraph}
      </p>
    ));

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          to="/"
          className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to all posts
        </Link>
      </div>
      
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1.5">
            <User className="h-4 w-4" />
            <span>By {post.author}</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center space-x-1.5">
            <Clock className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </header>

      <div className="mb-10 aspect-video overflow-hidden rounded-xl shadow-lg">
        <img
          src={post.imageUrl}
          alt={`Featured image for ${post.title}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none prose-lg lg:prose-xl prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline">
        {formattedContent}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-3">
        <Link
          to={`/edit/${post.id}`}
          className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-900 transition-colors"
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </button>
      </div>
    </article>
  );
}
