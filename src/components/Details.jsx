import React from 'react';

const Details = ({ jobDetails }) => {

  console.log(jobDetails());

  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Job Details</h1>
      </header>
    </div>
  );
};

export default Details;
