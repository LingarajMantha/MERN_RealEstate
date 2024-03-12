import {FaSearch} from 'react-icons/fa' //importing recact icons
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='bg-slate-200 shadow-sm'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to = '/'>
        <h1 className='font-bold text-sm sm:text-xl flex-wrap'>
          <span className='text-slate-500'>Mantha</span>
          <span className='text-slate-700'>Estates</span>
        </h1>
        </Link>
        <form className=" bg-slate-100 p-3  rounded-lg items-center flex"> 
          <input type='text' placeholder='Search...' className='bg-transprent focus:outline-none w-24 sm:w=64 ' />
          <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/About'>
          <li className='hidden sm:inline text-slate-700 hover:underlin'>About</li>
          </Link>
          <Link to ='/Signin'>
          <li className=' text-slate-700 hover:underlin'> {' '}Sign in</li>
          </Link>
        </ul>

      </div>
    </header>
  );
}


export default Header;

