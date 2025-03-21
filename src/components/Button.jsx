import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  rounded = 'full',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) => {
  // Define styles based on variant
  const variantStyles = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white shadow-md hover:shadow-lg hover:shadow-blue-500/20',
    secondary: 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700',
    outline: 'bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500/10',
    ghost: 'bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white',
  };

  // Define sizes
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };

  // Define rounded corners
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };

  // Combine all styles
  const buttonClasses = `
    inline-block font-medium transition-all duration-300
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.medium}
    ${roundedStyles[rounded] || roundedStyles.full}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `;

  // If href is provided, render an anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise render a button
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 