import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import profile from '../assets/exported_image.jpg';
import video from '../assets/golf.mov';
import { socialLinks } from '../constants/index';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
        <div className="flex flex-col w-full md:items-center rounded-xs shadow md:flex-row ">
            <img className="object-cover w-full rounded-t-2xl h-96 md:h-auto md:w-48 md:rounded-lg" src={profile} alt=""/>
            <div className="flex flex-col items-start justify-between mt-4 pt-4 md:m-4 md:p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Hey, I'm Folu, </h5>
                <p className="mb-3 font-normal text-neutral-400">A software/machine learning engineer ---in the oven---.</p>
                <div className='flex flex-row space-x-4 '>
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                            <link.icon className='text-2xl'/>
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className='mt-8 flex flex-col items-center w-full'>
            <NavLink to='/aboutme'>
                <div className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                    More About Me <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Profile