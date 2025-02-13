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
                    </li>
                ))}
            </ol>
        </div>
    </div>
    
  )
}

export default Projects
