import React from 'react';

const BlogCard = ({ post }) => {
  const { title, excerpt, date, category, author, image, slug } = post;
  
  return (
    <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-800 hover:border-blue-500/20 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Date and author */}
        <div className="flex items-center text-gray-400 text-sm mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>By {author}</span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-400 mb-5 flex-grow">
          {excerpt}
        </p>
        
        {/* Read more button */}
        <div>
          <a 
            href={`/blog/${slug}`} 
            className="inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300 animated-underline"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

// Example usage with dummy data
export const BlogCardExample = () => {
  const dummyPost = {
    title: "10 Emerging Web Development Trends in 2023",
    excerpt: "Discover the latest web development trends that are shaping the digital landscape in 2023, from AI-powered interfaces to WebAssembly.",
    date: "June 15, 2023",
    category: "Web Development",
    author: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    slug: "emerging-web-development-trends-2023"
  };
  
  return <BlogCard post={dummyPost} />;
};

export default BlogCard; 