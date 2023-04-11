import React, { useContext } from 'react';
import { getAppliedJobs } from '../utilities/fakedb';
import { AllJobsData } from '../App';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Applied = () => {
  let storeData = [];
  const allData = useContext(AllJobsData);
  const storeJobs = getAppliedJobs();

  for (const id in storeJobs) {
    const newData = allData.filter(data => data.id === parseInt(id));
    storeData.push(newData);
  }

  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Applied Jobs</h1>
      </header>
      <section className='max-w mt-16 flex flex-col gap-16'>
        {
          storeData.length===0?<h1 className='text-5xl font-bold'>You are not apply for any jobs</h1>:
          storeData.map(data =>
          (<div key={data[0].id} className='p-8 border border-primary rounded-xl flex flex-col lg:flex-row items-center gap-8'>
            <img className='w-40' src={data[0].company_logo} alt="company-logo" />
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-2xl font-bold'>{data[0].job_title}</h3>
                <h4 className='text-xl text-gray'>{data[0].company_name}</h4>
                <div className='flex items-center gap-2'>
                  <p className='text-secondary border px-4 py-1 rounded-md'>{data[0].job_place}</p>
                  <p className='text-secondary border px-4 py-1 rounded-md'>{data[0].job_time}</p>
                </div>
                <p className='flex items-center gap-1 text-xl text-gray'>
                  <HiOutlineCurrencyDollar /> {data[0].salary}
                </p>
              </div>
              <Link to={`/details/${data[0].id}`} className='btn-primary'>View Details</Link>
            </div>
          </div>))
        }
      </section>
    </div>
  );
};

export default Applied;
