import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-white p-2 mb-2 rounded shadow-2xl'>
            <h1>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;