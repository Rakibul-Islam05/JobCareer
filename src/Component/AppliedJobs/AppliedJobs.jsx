import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
  // Retrieve the job data from local storage
  const job = JSON.parse(localStorage.getItem('job'));

  if (!job) {
    // Display a message if no job data is found in local storage
    return <p>No job applications yet.</p>;
  }

  return (
    <div>
      <div className='flex justify-end mt-5 gap-3'>
      <button className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>show remote jobs</button>
      <button className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>show on-site jobs</button>
      </div>
      <div className='mt-16 flex items-center gap-5 p-5 border'>
        <div>
          <img src={job.image} alt="" />
        </div>
        <div className='text-start'>
          <h2 className='text-semibold text-xl'>{job.jobPosition}</h2>
          <p className='mb-2'>{job.companyName}</p>
          <span className='border p-1 rounded-lg text-indigo-500'>{job.jobTime}</span>
          <div className='flex items-center mt-4'>
            <img src="/src/assets/Icons/Location Icon.png" alt="" /> <p>{job.location}</p>
            <img src="/src/assets/Icons/Frame.png" alt="" /><p>Salary:{job.salary}</p>
          </div>
        </div>
        <div>
          <Link to={`/job/${job.id}`} className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            View Details
          </Link>
        </div>
      </div>
    </div>

  );
};

export default AppliedJobs;
