import PropTypes from 'prop-types';
import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks }) => {


    return (
        <div className='lg:w-1/3 background-gray-100 p-4 rounded shadow lg:mt-6 lg:mb-6 md:mt-6 md:mb-6'>
            <h4 className=' pb-2'>Bookmarks: {bookmarks.length}</h4>
            {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
        </div>
    );
};

Bookmarks.propsTypes = {
    bookmarks: PropTypes.object,
}

export default Bookmarks;