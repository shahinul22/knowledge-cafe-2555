
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-5  border-b-2 border-gray-400 max-w-7xl mx-auto'>
            <h1 className='text-2xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;