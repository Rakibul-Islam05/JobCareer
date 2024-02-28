import React from 'react';
import './Statistics.css'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot, Legend, Label } from 'recharts';

const assignments = [
  { number: 1, name: "Year-2000", progress: 50 },
  { number: 2, name: "Year-2005", progress: 60 },
  { number: 3, name: "Year-2010", progress: 35 },
  { number: 4, name: "Year-2015", progress: 90 },
  { number: 5, name: "Year-2020", progress: 50 },
  { number: 6, name: "Year-2025", progress: 70 },
  { number: 7, name: "Year-2030", progress: 80 },
];


const Statistics = () => {
  return (
      <div className='md:mx-12 mt-5 md:my-10 width'>
        <ResponsiveContainer width="80%" height={500}>
          <AreaChart data={assignments}>
            <CartesianGrid strokeDasharray="3 3" stroke="#000000" />
            <XAxis dataKey="name" axisLine={{ strokeWidth: 2 }} />
            <YAxis axisLine={{ strokeWidth: 2 }} />
            <Tooltip />
            <Area type="monotone" dataKey="progress" strokeWidth={3} stroke="#FF6262" fill="#150f2d" />
            <Legend verticalAlign="top" height={96} />
            {
              assignments.map((entry, index) => (
                <ReferenceDot key={`dot-${index}`} x={entry.name} y={entry.progress} r={5} fill="#FF6262" stroke="#fff" shape="dot">
                  <Label value={entry.progress} position="top" />
                </ReferenceDot>
              ))
            }
          </AreaChart>

        </ResponsiveContainer>
      </div>
  );
};

export default Statistics;