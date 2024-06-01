// src/News.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const News = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=af656df13de44246b3806fb385c79c8f');
        setNews(response.data.articles.slice(0, 5));
      } catch (error) {
        setError('Failed to fetch news');
      }
    };

    News();
  }, []);

  return (
    <div className="bg-gray-100  min-h-screen p-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold  mb-6 text-blue-800">Latest Headlines</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 border rounded-lg shadow-lg transform transition-transform  duration-300   hover:scale-105"
            >
              <h3 className="text-xl font-semibold  mb-2 text-blue-800">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
              <p className="text-gray-700">{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
