import React, { useEffect, useState } from 'react'
import api from '../../store/api'
import { ProjectSkeleton } from '../skeleton/ProjectSkeleton'


export const ProjectDisplay = ({onEditProject}) => {
    const [project, setProject] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [del, setDel] = useState(false)
    const [item, setItem] = useState(null)

    useEffect(() => {
        api.get(`project/`)
            .then(res => {
                setProject(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }, [])
    
    const deleteProject = (item) => {
        api.delete(`project/delete/${item}/`)
            .then(res => {
                setProject(project.filter(i => i.pid !== item))
                window.location.reload();
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
        setItem(null)
        setDel(false)
    }

    const handleDelete = (pid) => {
        setDel(true)
        setItem(pid)
    }

    if (isLoading) {
        return <ProjectSkeleton />
    }
    return (
        <>
            <ol className="relative border-s border-neutral-700"> 
                {project && project.map((item, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
                        <h3 className="text-lg text-white">{item.title}</h3>
                        <p className="mb-4 text-base font-normal text-neutral-400">{item.description}</p>
                        <div className="flex gap-4">
                            <button onClick={() => onEditProject(item.pid)} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-red-800 focus:ring-red-800">
                                Edit
                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                            <button onClick={() => handleDelete(item.pid)} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-red-800 focus:ring-red-800">
                                Delete
                                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
            { del && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-neutral-800 p-6 rounded-sm shadow-md max-w-sm w-full border border-neutral-700">
                        <h2 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">Confirm Deletion</h2>
                        <p className="text-sm text-neutral-300 mb-6">
                            Are you sure you want to delete this category? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-2">
                            <button
                            onClick={() => setDel(false)}
                            className="px-4 py-2 text-sm font-medium rounded-sm bg-neutral-700 text-white hover:bg-neutral-600"
                            >
                            Cancel
                            </button>
                            <button onClick={() => deleteProject(item)} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-sm hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
