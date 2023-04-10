import React from 'react';
import Lottie from "lottie-react";
import job from "../assets/interview.json";

const Home = () => {
  return (
    <div>
      <div className='py-28 banner flex items-center'>
        <div className='max-w lg:flex flex-row-reverse justify-between items-center'>
          <div>
            <Lottie animationData={job} loop={true} />
          </div>
          <div>
            <h1 className='text-6xl font-bold'>One Step <br /> Closer To Your <br />
              <span className='animate-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-trans font-black'>Dream Job</span></h1>
            <p className='my-6 text-gray'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
            <button className='btn-primary text-2xl'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
