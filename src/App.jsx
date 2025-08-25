import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>
      <div className='flex flex-col-reverse lg:flex-row md:flex-row gap-4 p-4 justify-between '>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      <Footer />
    </div>
  )
}

export default App
