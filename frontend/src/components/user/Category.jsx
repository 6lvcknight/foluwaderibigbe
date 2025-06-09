import React, { use, useEffect, useState } from 'react'
import api from '../../store/api'

const Category = ({category}) => {
    const [title, setTitle] = useState('')
    const [metaTitle, setMetaTitle] = useState('')
    const [context, setContext] = useState('')
    const [del, setDel] = useState(false)
    
    useEffect(() => {
        setMetaTitle(
            title.toLowerCase().trim().replace(/\s+/g, '-')
        );
    }, [title]);

    if (category) {
        useEffect(() => {
            const fetchCategory = async () => {
                try {
                    const response = await api.get(`blog/category/update/${category}/`)
                    setTitle(response.data.title)
                    setMetaTitle(response.data.metaTitle)
                    setContext(response.data.context)
                } catch (error) {
                    console.log(error.response.data.error)
                }
            }
            fetchCategory()
        }, [category])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!category){
            try {
            const response = await api.post('blog/category-create/', { title, metaTitle, context })
            setTitle('')
            setMetaTitle('')
            setContext('')
            
            } catch (error) {
            console.log(error.response.data.error)
            
            // Display error message from backend
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error)
            } else {
                alert('An error occurred while creating the blog post.')
            }
            }
        }
        else {
            try {
                const response = await api.put(`blog/category/update/${category}/`, { title, metaTitle, context })
                setTitle('')
                setMetaTitle('')
                setContext('')
                
            } catch (error) {
                console.log(error)
                
                // Display error message from backend
                if (error.response && error.response.data && error.response.data.error) {
                    alert(error.response.data.error)
                } else {
                    alert('An error occurred while updating the blog post.')
                }
            }
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        setDel(true)
    }

    const confirmDelete = async (e) => {
        e.preventDefault()
        try {
            await api.delete(`blog/category/delete/${category}/`)
            setTitle('')
            setMetaTitle('')
            setContext('')
            setDel(false)
            
            // Add notification of success
            alert('Category deleted successfully!')
        } catch (error) {
            console.log(error)
            
            // Display error message from backend
            if (error.response && error.response.data && error.response.data.error) {
                alert(error.response.data.error)
            } else {
                alert('An error occurred while deleting the category.')
            }
        }
    }

  return (
    <form className="max-w-sm mx-auto">
        <p className="flex text-6xl justify-center text-gray-900 dark:text-white mb-5">Categories</p>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-white">Content</label>
            <textarea value={context} onChange={(e) => setContext(e.target.value)} className="block p-2.5 w-full text-sm rounded-sm border focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
            </textarea>
        </div>
        <div className='flex flex-row justify-between'>
            <button onClick={handleDelete} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm text-neutral-400 border-neutral-600 hover:text-white hover:bg-red-700 focus:ring-neutral-700">Delete
            </button>
            <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">Submit 
            </button>
        </div>
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
                        <button onClick={confirmDelete} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-sm hover:bg-red-700">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )}
    </form>
  )
}

export default Category