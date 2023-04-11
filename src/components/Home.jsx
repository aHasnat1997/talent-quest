import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import job from "../assets/interview.json";
import { Link, useLoaderData } from 'react-router-dom';
import { HiLocationMarker } from "react-icons/hi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const [jobs, setJobs] = useState([]);

  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/aHasnat1997/job-api/main/featured-jobs.json')
  //     // fetch('featured-jobs.json')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }, [])


  // console.log(jobs);

  // console.log(data);

  useEffect(() => {
    fetch('job-category-list.json')
      .then(res => res.json()).then(data => setCategories(data))
  }, []);


  useEffect(() => {
    if (!loadData) {
      setJobs(data.slice(0, 4));
    } else {
      setJobs(data);
    }
  }, [loadData]);




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
      {/* Featured Jobs */}
      <section className='max-w my-16'>
        <h2 className='text-center text-2xl md:text-5xl font-semibold'>Featured Jobs</h2>
        <p className='text-center my-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className='grid md:grid-cols-2 gap-8 mt-16 justify-items-center'>
          {
            jobs?.map(job => <div key={job.id} className='w-full border border-secondary rounded-lg p-8 flex flex-col items-start'>
              <img className='w-[5rem] lg:w-[10rem] mb-8' src={job.company_logo} alt="company logo" />
              <h2 className='text-4xl font-bold'>{job.job_title}</h2>
              <p className='text-2xl text-gray my-4'>{job.company_name}</p>
              <div className="flex gap-4">
                <p className='border-primary border rounded px-4 py-2 text-secondary'>{job.job_place}</p>
                <p className='border-primary border rounded px-4 py-2 text-secondary'>{job.job_time}</p>
              </div>
              <div className='flex gap-8 text-gray md:text-xl my-4'>
                <p className='flex items-center'><HiLocationMarker className='text-4xl' /> {job.location}</p>
                <p className='flex items-center'><FaRegMoneyBillAlt className='text-4xl' /> {job.salary}</p>
              </div>
              <Link to={`/details/${job.id}`} className='btn-primary mt-auto'>View Details</Link>
            </div>)
          }
        </div>
        <div className='flex justify-center mt-10'>
          <button onClick={() => setLoadData(!loadData)} className='btn-primary text-2xl'>
            {
              loadData ? 'Less Jobs' : 'See All Jobs'
            }
          </button>
        </div>
      </section>
      {/* Featured Jobs */}
    </div>
  );
};

export default Home;
