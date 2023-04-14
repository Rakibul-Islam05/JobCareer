import React, { useState } from 'react';
import data from '../../../public/Feature.json';
import { Link } from 'react-router-dom';

const Feature = () => {
    const [showAll, setShowAll] = useState(false);

    const handleClick = () => {
        setShowAll(true);
    }

    const jobData = showAll ? data : data.slice(0, 4);

    return (
        <div>
            <div className='mt-20'>
                <h1 className='font-bold text-5xl'>Featured Jobs</h1>
                <p className='mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-6'>
                {jobData.map(job => (
                    <div key={job.id} className='border p-6 rounded text-left'>
                        <img src={`/src/assets/All Images/job${job.id}.png`} alt={job.jobCategory} className='mx-auto mb-4' />
                        <h2 className='font-semibold text-lg'>{job.jobPosition}</h2>
                        <p>{job.companyName}</p>
                        <p className='mt-4 text-blue-500'><span className='border p-2'>{job.jobTime[0]}</span><span className='border p-2 ms-4'>{job.jobTime[1]}</span></p>
                        <p className='flex mt-3 mb-4'> <img src={`/src/assets/Icons/Location Icon.png`} alt="" />{job.location} <img src={`/src/assets/Icons/Frame.png`} alt="" className='' /> Salary:{job.salary}</p>

                        <Link to={`/job/${job.id}`} className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                            View Details
                        </Link>

                    </div>
                ))}
            </div>
            {!showAll && <button onClick={handleClick} className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center mt-5 '>Show More</button>}
        </div>
    );
};

export default Feature;
