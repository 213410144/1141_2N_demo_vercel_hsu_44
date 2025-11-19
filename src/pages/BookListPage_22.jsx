import React from 'react';
import books_data from '../assets/data/booklist_data';
import Wrapper from '../assets/wrappers/BookList_22';

console.log(books_data);
const BookListPage_22 = () => {
  return (
    <Wrapper>
    <section className='booklist'>
      {books_data.map((book) => {
        const { img, title, author } = book;
        return (
          <article className='book'>
            <img src={img} alt={title} />
            <div className='bookinfo'>
              <h1>{title}</h1>
              <h4>{author}</h4>
            </div>
          </article>
        );
      })}
    </section>
    </Wrapper>
  );
};

export default BookListPage_22;
