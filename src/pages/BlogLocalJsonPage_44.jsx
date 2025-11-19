/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import blogData_44 from '../assets/data/blogData.json';
import Blog_44 from '../components/Blog_44';
const BlogLocalJsonPage_44 = () => {
  const [name, setName] = useState('hsu');
  const [id, setId] = useState(213410144);
  const [blogs_44, setBlogs_44] = useState(blogData_44);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Blogs From Local Json - {name}, {id}
          </h2>
        </div>
        <div className='blogs-center'>
          {blogs_44.map((item) => {
            return <Blog_44 key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default BlogLocalJsonPage_44;
