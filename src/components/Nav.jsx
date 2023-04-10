import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Nav = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className='max-w py-2 flex justify-between items-center absolute top-0 right-0 left-0'>
      <div onClick={() => setOpen(!open)} className='text-4xl text-center lg:hidden'>
        {
          open ? <HiX /> : <HiMenuAlt1 />
        }
      </div>
      <h1 className='text-3xl lg:text-4xl text-dark'>
        <Link to='/'>
          <span className='font-bold text-primary'>T</span>alent
          <span className='font-bold text-secondary'>Q</span>uest
        </Link>
      </h1>
      <ul className={`duration-300 text-4xl lg:text-xl bg-accent w-full lg:w-1/3 lg:bg-trans p-4 lg:flex lg:justify-between lg:items-center absolute top-16 lg:static ${open? '-left-1':'-left-96'}`}>
        <li className='my-4 lg:my-0'>
          <NavLink className={({ isActive }) => isActive ? 'text-primary' : ''} to='/'>
            Home
          </NavLink>
        </li>
        <li className='my-4 lg:my-0'>
          <NavLink className={({ isActive }) => isActive ? 'text-primary' : ''} to='/statistics'>
            Statistics
          </NavLink>
        </li>
        <li className='my-4 lg:my-0'>
          <NavLink className={({ isActive }) => isActive ? 'text-primary' : ''} to='/applied'>
            Applied Jobs
          </NavLink>
        </li>
        <li className='my-4 lg:my-0'>
          <NavLink className={({ isActive }) => isActive ? 'text-primary' : ''} to='/blog'>
            Blog
          </NavLink>
        </li>
      </ul>
      <button className='btn-primary text-sm lg:text-2xl'>Star Applying</button>
    </nav>
  );
};

export default Nav;
