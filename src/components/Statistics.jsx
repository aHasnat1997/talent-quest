import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';


const Statistics = () => {
  const data = [
    {
      subject: 'Assignment-1',
      mark: 60
    },
    {
      subject: 'Assignment-2',
      mark: 58
    },
    {
      subject: 'Assignment-3',
      mark: 60
    },
    {
      subject: 'Assignment-4',
      mark: 53
    },
    {
      subject: 'Assignment-5',
      mark: 60
    },
    {
      subject: 'Assignment-6',
      mark: 60
    },
    {
      subject: 'Assignment-7',
      mark: 60
    },
    {
      subject: 'Assignment-8',
      mark: 60
    },
  ];
  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Statistics</h1>
      </header>
      <div className='flex flex-col items-center mt-16'>
        <h1 className='text-4xl'>Assignment marks</h1>
        <RadarChart width={700} height={700} outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      </div>
    </div>
  );
};

export default Statistics;
