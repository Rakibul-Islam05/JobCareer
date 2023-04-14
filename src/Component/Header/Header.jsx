import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className='md:flex items-center justify-between'>
            <div>
            <h1 className='font-bold text-5xl'>JobLagbe</h1>
            </div>
            <div className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/statistics">statistics</Link>
            <Link to="/appliedJobs">appliedJobs</Link>
            <Link to="/blogs">blogs</Link>
            </div>
            <div>
            <button className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-3 rounded font-semibold'>Start Applying</button>
            </div>
        </div>

        </div>
    );
};

export default Header;