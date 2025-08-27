import PropTypes from 'prop-types';
import React from 'react';
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {


    return (
        <div className='flex flex-col lg:mt-6 lg:mb-6 md:mt-6 md:mb-6 lg:w-1/3 md:w-1/4'>
            <div className='rounded pt-1 pb-1 pl-3 border border-purple-500 mb-3 bg-purple-100'>
                <h4 className='text-purple-500 bold'>Spent time on read: {readingTime} min</h4>
            </div>
            <div className='bg-gray-50 p-4 rounded-xl shadow h-full'>
                <h4 className=' pb-2 font-bold'>Bookmarks: {bookmarks.length}</h4>
                {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
            </div>
        </div>

    );
};

Bookmarks.propsTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number,
}

export default Bookmarks;