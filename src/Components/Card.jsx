import React from 'react';

const Card = ({ image, title, content, stars,relief }) => {
  return (
    <div className="max-w-md mx-auto bg-teal-800 rounded-xl overflow-hidden shadow-md">
     <div className="w-full h-72 object-cover object-center overflow-hidden" > <img src={image} alt={title} className='w-'/></div>
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{title} </h2>
        <p className="text-gray-300 text-base">{content}</p>
        <div className="flex items-center mt-4">
         
          <span className='inline-block p-[4px] bg-yellow-600 rounded-lg font-normal text-white text-[12px] mr-2'>{relief}</span>
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