import React, { useEffect, useState } from 'react';
import instance from '../store/axios';
 
const Projects = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        instance.get(`project/`)
            .then(res => {
                setProject(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
  return (
    <div>
        <div id='Projects' className="flex flex-col mt-20">
            <h1 className="flex mb-8 uppercase text-xl tracking-wide items-start">
                Recent Projects
            </h1>
            <ol className="relative border-s border-neutral-700"> 
                {project && project.map((item, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-neutral-500">{item.createdat}</time>
                        <h3 className="text-lg text-white">{item.title}</h3>
                        <p className="mb-4 text-base font-normal text-neutral-400">{item.description}</p>
                        <div className="flex gap-4">
                            {item.url && (
                            <a href={item.url} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                                URL 
                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                            )}
                            {item.github_url && (
                            <a href={item.github_url} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                                Github
                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    </div>
    
  )
}

export default Projects
