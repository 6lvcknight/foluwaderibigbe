import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import profile from '../assets/exported_image.jpg';
import video from '../assets/golf.mov';
import { socialLinks } from '../constants/index';

const Profile = () => {
  return (
    <div>
        <div className="flex flex-col w-full md:items-center rounded-xs shadow md:flex-row ">
            <img className="object-cover w-full rounded-t-2xl h-96 md:h-auto md:w-48 md:rounded-lg" src={profile} alt=""/>
            <div className="flex flex-col items-start justify-between mt-4 pt-4 md:m-4 md:p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hey, I'm Folu, </h5>
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
    </div>
  )
}

export default Profile