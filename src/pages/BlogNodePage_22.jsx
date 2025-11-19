/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Blog_22 from '../components/Blog_22';

const api_url = 'http://localhost:3000/api/blog_22';

const BlogNodePage_22 = () => {
  const [name, setName] = useState('zihyinhsu');
  const [id, setId] = useState(913410022);
  const [blogs_22, setBlogs_22] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setBlogs_22(data);
      console.log(data)
    } catch (error) {
      console.error( error);
    }
  }
  useEffect(() => {
    fetchBlogFromNodeServer();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Blogs Form Node - {name}, {id}
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

export default BlogNodePage_22;
