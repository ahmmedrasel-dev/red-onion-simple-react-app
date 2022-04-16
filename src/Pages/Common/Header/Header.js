import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../../../Images/logo2.png';

const Header = () => {
  return (
    <nav className='md:container md:mx-auto'>
      <div className='flex justify-between items-center py-3'>
        <div className="nav-brand">
          <img className='w-40' src={logo} alt="" />
        </div>
        <div className='flex items-center'>
          <Link className='m-3' to='/cart'><FiShoppingCart className='text-2xl' /></Link>
          <Link className='m-3' to='/login'>Login</Link>
          <Link className='m-3 px-4 text-white py-2 bg-rose-500 rounded-full' to='register'>Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;