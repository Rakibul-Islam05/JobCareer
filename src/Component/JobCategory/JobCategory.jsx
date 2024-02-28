import React from 'react';
import data from '../../../public/jobs.json';

const JobCtegory = () => {
  return (
    <div className='mt-10'>
      <div>
        <h3 className='font-bold text-5xl'>Job Category List</h3>
        <p className='mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='md:flex mt-5 justify-between'>
        {data.map((job) => (
          <div key={job.id} className='p-6 rounded bg-gray-100 '>
            <img src={job.image} alt={job.jobCategory} className='mx-auto mb-4' />
            <h3>{job.jobCategory}</h3>
            <p>{job.availableJob} jobs available</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCtegory;
