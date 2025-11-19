/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import blogData_22 from '../assets/data/blogData.json';
import Blog_22 from '../components/Blog_22';
const BlogLocalJsonPage_22 = () => {
  const [name, setName] = useState('zihyinhsu');
  const [id, setId] = useState(913410022);
  const [blogs_22, setBlogs_22] = useState(blogData_22);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Blogs From Local Json - {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_22.map((item) => {
            return <Blog_22 key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default BlogLocalJsonPage_22;
