import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import profile from '../assets/exported_image.jpg';
import video from '../assets/golf.mov';
import { socialLinks } from '../constants/index';

const Profile = () => {
  return (
    <div>
        <h2 className='text-2xl sm:text-xl lg:text-2xl text-right mt-8 mb-10 tracking-wide'>
        Hello, I'm
        <br />
        <span className='text-5xl sm:text-6xl lg:text-8xl bg-gradient-to-r from-red-800 to-purple-800 text-transparent bg-clip-text '>Folu Aderibigbe</span>
        </h2>
        <div className="flex flex-wrap justify-center mt-4">
            <div className="p-2 w-1/2">
                <img className='rounded-lg' src={profile} alt="profile" />
            </div>
            <div className="p-2 w-1/2">
                <video autoPlay loop muted className='rounded-lg'>
                    <source src={video} type='video/mp4' />
                    your browser does not support the video tag
                </video>
            </div>
        </div>
        <div className="text-center p-10 py-4">
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-5xl mx-auto md:text-xl ">
                Computer Science undergraduate at Ontario Tech University, specializing in software development and machine learning.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                {socialLinks.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                        <link.icon />
                    </a>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Profile