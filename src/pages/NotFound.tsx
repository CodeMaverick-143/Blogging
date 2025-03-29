import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

interface NotFoundProps {
  message?: string;
  showBackButton?: boolean;
}

export function NotFound({ 
  message = "Oops! Page Not Found", 
  showBackButton = true 
}: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <AlertTriangle className="h-16 w-16 text-yellow-500 mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">{
        message.includes('Not Found') ? message.split(' ').slice(0, -2).join(' ') : 'Error'
      }</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        {message.includes('Not Found') ? `We couldn't find the ${message.split(' ').slice(-2).join(' ').toLowerCase()} you were looking for.` : message}
      </p>
      {showBackButton && (
        <Link 
          to="/"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 font-medium"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Return to Home
        </Link>
      )}
    </div>
  );
} 