import myimg from '../../assets/profile.png';

const Header = () => {
    return (
        <div className='flex flex-row items-center justify-between p-4 text-black w-full'>
            <h1 className='text-4xl font-extrabold'>Knowledge Cafe</h1>
            <img src={myimg} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
        </div>
    );
};

export default Header;