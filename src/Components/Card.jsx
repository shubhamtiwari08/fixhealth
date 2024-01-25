import React from 'react';

const Card = ({ image, title, content, stars }) => {
  return (
    <div className="max-w-md mx-auto bg-slate-600 rounded-xl overflow-hidden shadow-md">
     <div className="w-full h-56 object-cover object-center overflow-hidden" > <img src={image} alt={title} className='w-'/></div>
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-300 text-base">{content}</p>
        <div className="flex items-center mt-4">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className= 'text-yellow-500'
            >
              &#9733; {/* Unicode star character */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;