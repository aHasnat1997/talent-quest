import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
  const data = [
    {
      subject: 'A-1',
      mark: 60
    },
    {
      subject: 'A-2',
      mark: 58
    },
    {
      subject: 'A-3',
      mark: 60
    },
    {
      subject: 'A-4',
      mark: 53
    },
    {
      subject: 'A-5',
      mark: 60
    },
    {
      subject: 'A-6',
      mark: 60
    },
    {
      subject: 'A-7',
      mark: 60
    },
    {
      subject: 'A-8',
      mark: 60
    },
  ];
  return (
    <div>
      <header className='py-32 banner'>
        <h1 className='text-center text-6xl font-bold'>Statistics</h1>
      </header>
      <div style={{ maxWidth: '1250px', height: "400px", width: '100%', margin: 'auto' }}>
        <h1 className='text-5xl text-center mt-8 font-bold'>Assignment marks</h1>
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart width={800} height={800} outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="mark" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
