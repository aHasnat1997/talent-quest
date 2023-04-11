import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HiLocationMarker, HiMail, HiOutlineCurrencyDollar, HiPhone } from "react-icons/hi";
import { HiCalendarDays } from "react-icons/hi2";
import { AllJobsData } from '../App';
import { addToDb } from '../utilities/fakedb';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Details = () => {
  const allData = useContext(AllJobsData);
  const singleId = useParams();

  const details = allData.filter(data => data.id === parseInt(singleId.id));
  // console.log(details[0]);

  const { id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, job_place, company_logo } = details[0];

  const apply = id => {
    addToDb(id);
    toast("Apply Compleat");
  }


  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Job Details</h1>
      </header>
      <div className='mt-16 w-1/4 mx-auto'>
        <img src={company_logo} alt="company logo" />
      </div>
      <section className='max-w mt-16 flex flex-col md:flex-row items-start gap-16'>
        <div className='flex flex-col gap-8 lg:w-3/5'>
          <div>
            <h2 className='text-2xl font-semibold'>Job Description</h2>
            <p>{job_description}</p>
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>Job Responsibility</h2>
            {job_responsibility.map((listItem, i) => <ul key={i} className='list-disc ml-8'>
              <li>{listItem}</li>
            </ul>)}
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>Educational Requirements</h2>
            {educational_requirements.map((listItem, i) => <ul key={i} className='list-disc ml-8'>
              <li>{listItem}</li>
            </ul>)}
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>Experiences</h2>
            {experiences.map((listItem, i) => <ul key={i} className='list-disc ml-8'>
              <li>{listItem}</li>
            </ul>)}
          </div>
        </div>

        <div className='bg-light p-8 lg:w-2/5 flex flex-col gap-12 rounded-lg'>
          <div>
            <h2 className='text-3xl font-semibold'>Job Details</h2>
            <hr className='border-primary my-4' />
            <p className='flex items-center gap-2 text-xl'><HiCalendarDays /> {job_title}</p>
            <p className='flex items-center gap-2 text-xl'><HiOutlineCurrencyDollar /> {salary}</p>
            <p className='flex items-center gap-2 text-xl'><HiLocationMarker /> {job_place}</p>
          </div>
          <div>
            <h2 className='text-3xl font-semibold'>Contact Information</h2>
            <hr className='border-primary my-4' />
            <p className='flex items-center gap-2 text-xl'><HiPhone /> {contact_information.phone}</p>
            <p className='flex items-center gap-2 text-xl'><HiMail /> {contact_information.email}</p>
          </div>
          <div className='w-full'>
            <button onClick={() => apply(id)} className='btn-primary w-full text-xl'>Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
