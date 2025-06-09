import React, { useEffect, useState } from 'react'
import api from '../../store/api'
import { ProjectSkeleton } from '../skeleton/ProjectSkeleton'

const BlogView = ({blog}) => {
    const [blogData, setBlogData] = useState({
        title: '',
        content: '',
        createdat: '',
        category: ''
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await api.get(`blog/post/${blog}/`)
                setBlogData(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error.response.data.error)
            }
        }
        fetchProject()
    }, [blog])

    if (isLoading) {
            return <ProjectSkeleton />
        }
    return (
        <>
            <div className="flex justify-center mb-4">
                <button onClick={() => onEditProject(blogData.metatitle)} className="inline-flex items-center px-4 py-2 text-sm font-medium border-l border-t border-b rounded-s-md focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-blue-800 focus:ring-red-800">
                    Edit
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
                <button onClick={() => deleteProject(blogData.metatitle)} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-e-md focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-red-800 focus:ring-red-800">
                    Delete
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
            <div className='flex flex-col items-center'>
            <h1 href='/login' className="mb-12 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                {blogData.title}
            </h1>
            <p className="mb-3 text-neutral-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-neutral-100 first-letter:me-3 first-letter:float-start">
                {blogData.content}
            </p>
            </div>
        </>
    )
}

export default BlogView