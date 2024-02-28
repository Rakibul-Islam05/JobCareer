import React from 'react';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='md:flex items-center justify-between mb-10'>
                <div>
                    <h1 className='font-bold text-5xl'>JobLagbe</h1>
                </div>
                <div className='flex gap-5 items-center justify-center my-5 text-2xl'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">statistics</Link>
                    <Link to="/appliedJobs">appliedJobs</Link>
                    <Link to="/blogs">blogs</Link>
                </div>
                <div>
                    <Link to="/feature" className='btn border-none text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 p-4 rounded font-semibold'>Start Applying</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;