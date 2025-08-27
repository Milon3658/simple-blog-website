import React, { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { ToastContainer, toast } from 'react-toastify';


function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    const exists = bookmarks.find(b => b.id === blog.id);
    if (!exists) {
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
      toast("Blog bookmarked successfully!");
    } else {
      toast("You have already bookmarked this blog!");
    }
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <Header />
      <div className='flex flex-col-reverse lg:flex-row md:flex-row gap-4 p-4 justify-between '>
        <Blogs handleAddBookmark={handleAddBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
