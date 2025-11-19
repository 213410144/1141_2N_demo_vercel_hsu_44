import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayoutPage_44,
  BlogStaticPage_44,
  HomePage_44,
  BlogLocalJsonPage_44,
  BlogNodePage_44,
  BookListPage_44
} from './src/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_44 />,
    children: [
      { index: true, element: <HomePage_44 /> },
      { path: 'static_44', element: <BlogStaticPage_44 /> },
      { path: 'localjson_44', element: <BlogLocalJsonPage_44 /> },
      { path: 'node_44', element: <BlogNodePage_44 /> },
      { path: 'bookList_44', element: <BookListPage_44 /> },
    ],
  },
]);

const App_44 = () => {
  return <RouterProvider router={router} />;
};

export default App_44;
