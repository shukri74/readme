import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ title, key, publishers, authors, publish_date }) => {
    // let url = https://covers.openlibrary.org/b/olid/${key}.jpg;
    // console.log(url);
    return (
        <div className="card-image">
            <figure className="image is-1by1">
                <img src="https://covers.openlibrary.org/b/olid/OL46528354M.jpg" alt="Placeholder image"/>;
            </figure>
            <div class="card-content">
            <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                <img src="https://covers.openlibrary.org/a/olid/OL34184A.jpg" alt="Placeholder image"/>
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{title}</p>
                <p class="subtitle is-6">{publishers}</p>
            </div>
            </div>
        
            <div class="content">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a> */}
            {/* <br> */}
            <time><strong>Published in </strong>{publish_date}</time>
            </div>
        </div>
      </div>
    );
};

Book.propTypes = {
    title: PropTypes.string,
    key: PropTypes.string,
    publishers: PropTypes.string,
    publish_date: PropTypes.string,
    authors: PropTypes.string,

}

export default Book;
