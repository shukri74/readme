import React from 'react'
import bookData from '../../bookData.json'
import Book from '../Book'

const BookGallery = () => {
    const bookList = bookData.map(book => <Book {...book} key={book.id} />)
    return (
        <div
            className='gallery-container' data-test='char-gallery'>
            {bookList}
        </div>
    );
};

export default BookGallery;