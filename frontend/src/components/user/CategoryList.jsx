import React, { useEffect, useState } from 'react'
import api from '../../store/api'
import { ProjectSkeleton } from '../skeleton/ProjectSkeleton'

const CategoryList = ({onCategory}) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=> {
        const fetchCategories = async () => {
            try {
                const response = await api.get('blog/category/')
                setCategories(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error.response.data.error)
            }
        }
        fetchCategories()
    }, [])

    if (isLoading) {
        <ProjectSkeleton />
    }
    return (
        <>
            <div className="flex justify-center mb-4">
            <button onClick={() => onCategory()} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md focus:outline-none text-neutral-400 border-neutral-600 hover:text-white">
                New Category
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
            <div className="max-w-sm mx-auto text-sm font-medium rounded-sm border-neutral-600 text-white">
                { categories && categories.length > 0 ? (
                    categories.map((category, idx) => (
        
                <button key={idx} onClick={() => onCategory(category.metatitle)} aria-current="true" type="button" className="w-full px-4 py-2 font-medium text-left rtl:text-right border-b rounded-t-sm cursor-pointer focus:outline-none border-neutral-600 hover:bg-neutral-600 hover:text-white text-white">
                    {category.title}
                </button>
                    ))
                ) : (
                    <div className="text-center p-4">
                        <p className="text-gray-400">No categories available</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default CategoryList