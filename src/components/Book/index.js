import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ title, key, publishers, publish_date }) => {
    // const url = "https://covers.openlibrary.org/b/olid/"+key+".jpg";
    // console.log(url);
    return (
        <div data-test='character-card' className="card-container">
            <img data-test='character-image' src="https://covers.openlibrary.org/b/olid/OL46528354M.jpg" alt={title} />
            <div data-test='character-body' className="card-body">
                <h1 data-test='character-content'>{title}</h1>
                <p>{publishers}</p>
                <p>{publish_date}</p>
            </div>
        </div>
    );
};

Book.propTypes = {
    title: PropTypes.string,
    key: PropTypes.string,
    publishers: PropTypes.string,
    publish_date: PropTypes.string,
}

export default Book;