import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayoutPage_22,
  BlogStaticPage_22,
  HomePage_22,
  BlogLocalJsonPage_22,
  BlogNodePage_22,
  BookListPage_22
} from './src/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_22 />,
    children: [
      { index: true, element: <HomePage_22 /> },
      { path: 'static_22', element: <BlogStaticPage_22 /> },
      { path: 'localjson_22', element: <BlogLocalJsonPage_22 /> },
      { path: 'node_22', element: <BlogNodePage_22 /> },
      { path: 'bookList_22', element: <BookListPage_22 /> },
    ],
  },
]);

const App_22 = () => {
  return <RouterProvider router={router} />;
};

export default App_22;
