import React, { useContext, useEffect, useState } from 'react';
import { getAppliedJobs } from '../utilities/fakedb';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Applied = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/featured-jobs.json')
      .then(res => res.json())
      .then(data => {
        const localJobs = getAppliedJobs();
        if (localJobs) {
          const matchedJobs = data.filter(job => localJobs[job.id]);
          setData(matchedJobs);
        }
      })
  }, [])


  const [filterData, setFilterData] = useState(null);
  const handleFilterChange = (e) => {
    setFilterData(e.target.value);
  }
  const filtered = filterData ? data.filter(job => job.job_place === filterData) : data;

  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Applied Jobs</h1>
      </header>
      <div className='max-w mt-8 flex justify-end'>
        {
          filtered.length > 0 && (<select
            className='bg-light p-4 rounded-lg'
            defaultValue="Filter By"
            onChange={handleFilterChange}
          >
            <option value={null} disabled>Filter By</option>
            <option value="Onsite">Onsite</option>
            <option value="Remote">Remote</option>
          </select>)
        }
      </div>

      <section className='max-w mt-6 flex flex-col gap-16'>
        {
          filtered.length === 0 ? <h1 className='text-5xl font-bold'>You are not apply for any jobs</h1> :
            filtered.map(data =>
            (<div key={data.id} className='p-8 border border-primary rounded-xl flex flex-col lg:flex-row items-center gap-8'>
              <img className='w-40' src={data.company_logo} alt="company-logo" />
              <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                <div className='flex flex-col gap-2'>
                  <h3 className='text-2xl font-bold'>{data.job_title}</h3>
                  <h4 className='text-xl text-gray'>{data.company_name}</h4>
                  <div className='flex items-center gap-2'>
                    <p className='text-secondary border px-4 py-1 rounded-md'>{data.job_place}</p>
                    <p className='text-secondary border px-4 py-1 rounded-md'>{data.job_time}</p>
                  </div>
                  <p className='flex items-center gap-1 text-xl text-gray'>
                    <HiOutlineCurrencyDollar /> {data.salary}
                  </p>
                </div>
                <Link to={`/details/${data.id}`} className='btn-primary'>View Details</Link>
              </div>
            </div>))
        }
      </section>
    </div>
  );
};

export default Applied;
