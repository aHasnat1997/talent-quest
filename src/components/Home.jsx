import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import job from "../assets/interview.json";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('job-category-list.json')
      .then(res => res.json()).then(data => setCategories(data))
  }, [])


  return (
    <div>
      {/* header */}
      <header className='py-28 banner flex items-center'>
        <div className='max-w md:flex flex-row-reverse justify-between items-center'>
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
      </header>
      {/* header */}
      {/* Job Category List */}
      <section className='max-w my-16'>
        <h2 className='text-center text-2xl md:text-5xl font-semibold'>Job Category List</h2>
        <p className='text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-16'>
          {
            categories.map(category =>
            (<div key={category.id}>
              <img className='w-20' src={category.icon} alt="icon" />
              <h3 className='text-2xl font-semibold'>{category.title}</h3>
              <p className='text-gray'>{category.available} Jobs Available</p>
            </div>)
            )
          }
        </div>
      </section>
      {/* Job Category List */}
    </div>
  );
};

export default Home;
