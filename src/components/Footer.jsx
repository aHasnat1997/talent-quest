import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='bg-dark w-full mt-20 py-24'>
      <div className='max-w text-gray grid md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <div>
          <h1 className='text-3xl lg:text-4xl text-white'>
            <Link to='/'>
              <span className='font-bold text-primary'>T</span>alent
              <span className='font-bold text-secondary'>Q</span>uest
            </Link>
          </h1>
          <p className='my-4'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
          <div className='flex gap-4 text-4xl'>
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        <div>
          <h2 className='text-2xl text-white'>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl text-white'>Product</h2>
          <ul>
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl text-white'>Support</h2>
          <ul>
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl text-white'>Contact</h2>
          <ul>
            <li>524 Broadway , NYC</li>
            <li>+1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
      <div className='max-w mt-8 text-gray'>
        <hr className='border-gray' />
        <div className='mt-8 flex flex-col gap-8 lg:flex-row justify-between text-center'>
          <h2>@2023 CareerHub. All Rights Reserved</h2>
          <h2>Powered by TalentQuest</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
