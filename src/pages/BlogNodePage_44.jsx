/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Blog_44 from '../components/Blog_44';

const api_url = 'http://localhost:3000/api/blog_44';

const BlogNodePage_44 = () => {
  const [name, setName] = useState('zihyinhsu');
  const [id, setId] = useState(913410044);
  const [blogs_44, setBlogs_44] = useState([]);

  const fetchBlogFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setBlogs_44(data);
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
          {blogs_44.map((item) => {
            return <Blog_44 key={item.id} item={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default BlogNodePage_44;
