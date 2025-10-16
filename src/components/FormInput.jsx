import React from 'react';

const FormInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
  className = ''
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-200 mb-2"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`
          w-full px-3 py-2 bg-white/10 backdrop-blur-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-gray-400
          ${error ? 'border-red-500/50' : 'border-white/20'}
        `}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
