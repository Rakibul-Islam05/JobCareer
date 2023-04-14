import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../public/Feature.json';

const JobDetails = () => {
    const { jobId } = useParams();
    const job = data.find(job => job.id === parseInt(jobId, 10));

    return (
        <div className='mt-20 grid md:grid-cols-2 gap-4 '>
            <div className='text-left text-xl'>
                <p><b className='text-black'>Job Description:</b> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>

                <p className='mt-10'><b className='text-black'>Job Responsibility:</b>: Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>

                <h5 className='font-semibold mt-10'>Educational Requirements:</h5>
                <p>Bachelor degree to complete any reputational university.</p>

                <h5 className='font-semibold mt-10'>Experiences:</h5>
                <p>2-3 Years in this field.</p>
            </div>
            <div>
            <div className='p-10 bg-slate-200 rounded-lg h-auto'>
                <h4 className='font-semibold text-3xl border-b-2 border-slate-300'>Job Details</h4>
                <p className='mt-5 flex item-center'><img src="/src/assets/Icons/Frame.png" alt="" /><b>Salary:</b>{job.salary}</p>
                <p className='mt-5 flex item-center'><img src="/src/assets/Icons/Frame-1.png" alt="" /><b>Salary:</b>{job.jobPosition}</p><br />
                <h3 className='text-xl font-semibold text-start mb-5 border-b-2 border-slate-300'>Contact Information</h3>
                <p className='flex item-center'><img src="/src/assets/Icons/Frame-2.png" alt="" /><b>Phone:</b>{job.phone}</p><br/>
                <p className='flex item-center'><img src="/src/assets/Icons/Frame-3.png" alt="" /><b>Email:</b>{job.email}</p><br/>
                <p className='flex item-center'><img src="/src/assets/Icons/Frame-4.png" alt="" /><b>Address:</b>{job.location}</p>    
            </div>
            <button className='btn text-white bg-gradient-to-br from-[#7E90FE] to-[#9873FF] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4'>Apply Now</button>
            </div>

        </div>
    );
};

export default JobDetails;
