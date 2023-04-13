import React from 'react';
//import JobCtegory from '../../JobCategory/JobCategory';
//import Feature from '../../Feature/Feature';

const Banner = () => {
    return (
        <div >
            <div className='md:flex'>
                <div>
                    <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>

                <div className='text-left'>
                    <h1 className="md:text-[60px] text-[45px] text-center md:text-left font-bold">One Step Closer To Your <span className="text-[#818DFE]">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-3 ">Get Started</button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;