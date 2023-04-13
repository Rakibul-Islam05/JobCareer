import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Legend, Label } from 'recharts';

const assignments = [
  { number: 1, name: "Assignment-1", mark: 57},
  { number: 2, name: "Assignment-2", mark: 59 },
  { number: 3, name: "Assignment-3", mark: 60 },
  { number: 4, name: "Assignment-4", mark: 60 },
  { number: 5, name: "Assignment-5", mark: 59 },
  { number: 6, name: "Assignment-6", mark: 60 },
  { number: 7, name: "Assignment-7", mark: 60 },
];


const Statistics = ({children}) => {
    return (
      <div>
        <div className='text-center md:pt-20 md:pb-24 pt-8 pb-8 bg-hero'>
      <h2 className='text-3xl md:text-5xl font-bold'>
        {children}
      </h2>
    </div>
        <div className=' mx-2 md:mx-12 mt-5 md:my-10'>
            <ResponsiveContainer  width="95%" height={500}>
          <AreaChart data={assignments}>
            <CartesianGrid strokeDasharray="3 3" stroke="#000000"/>
            <XAxis dataKey="name" axisLine={{ strokeWidth: 2 }}/>
            <YAxis axisLine={{ strokeWidth: 2 }}/>
            <Tooltip />
            <Area type="monotone" dataKey="mark" strokeWidth={3} stroke="#FF6262" fill="#150f2d" />
            <Legend verticalAlign="top" height={96}/>
            {
              assignments.map((entry, index) => (
                <ReferenceDot key={`dot-${index}`} x={entry.name} y={entry.mark} r={5} fill="#FF6262" stroke="#fff" shape="dot">
                  <Label value={entry.mark} position="top" />
                </ReferenceDot>
              ))
            }
          </AreaChart>
          
        </ResponsiveContainer>
        </div>
      </div>
      );
};

export default Statistics;