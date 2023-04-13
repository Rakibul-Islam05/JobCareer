import React from 'react';
//import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div>
        <div className='md:flex items-center justify-between'>
            <div>
            <h1 className='font-bold text-5xl'>JobLagbe</h1>
            </div>
            <div className='flex gap-4'>
            <a href="/">Home</a>
            <a href="/statistics">statistics</a>
            <a href="/appliedJobs">appliedJobs</a>
            <a href="/blogs">blogs</a>
            </div>
            <div>
            <button className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-3 rounded font-semibold'>Start Applying</button>
            </div>
        </div>
        </div>
    );
};

export default Header;