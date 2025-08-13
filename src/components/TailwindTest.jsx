// Test component to verify Tailwind CSS is working
const TailwindTest = () => {
    return (
        <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white">
            <h2 className="text-2xl font-bold mb-4">Tailwind Test</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-500 p-4 rounded shadow">Red Box</div>
                <div className="bg-green-500 p-4 rounded shadow">Green Box</div>
                <div className="bg-blue-500 p-4 rounded shadow">Blue Box</div>
            </div>
            <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-semibold text-black transition-colors">
                Test Button
            </button>
        </div>
    );
};

export default TailwindTest;
