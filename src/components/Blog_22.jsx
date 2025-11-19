import React from 'react';
import { FaGlobe, FaMugSaucer } from 'react-icons/fa6';

const Blog_22 = ({ item }) => {
  return (
    <article key={item.id} className='blog'>
      <img src={item.img} alt={item.title} className='img blog-img' />
      <div className='blog-content'>
        <span>
          {item.category}
          {item.category === 'travel' ? <FaGlobe /> : <FaMugSaucer />}
        </span>
        <h3>{item.title}</h3>
        <p>{item.descrip}</p>
        <a href='#'>read more</a>
      </div>
    </article>
  );
};

export default Blog_22;
