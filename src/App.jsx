import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold underline text-gray-800 mb-4 text-center">
          Hello world!
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Tailwind CSS is now working! 🎉
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
            Test Button
          </button>
          <div className="flex space-x-2">
            <div className="flex-1 h-4 bg-red-500 rounded"></div>
            <div className="flex-1 h-4 bg-green-500 rounded"></div>
            <div className="flex-1 h-4 bg-yellow-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
