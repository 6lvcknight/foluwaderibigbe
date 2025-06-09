import React, { useEffect, useState } from 'react'
import api from '../../store/api'
import { format } from 'date-fns'

const BlogPost = () => {
  const [category, setCategory] = useState('')
  const [categoryDropdown, setCategoryDropdown] = useState(false)
  const [title, setTitle] = useState('')
  const [metaTitle, setMetaTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [date, setDate] = useState(new Date())
  const [content, setContent] = useState('')
  const [product, setProduct] = useState({})
  const formattedDate = format(date, 'yyyy-MM-dd')

  const toggleCategoryDropdown = (e) => {
    setCategoryDropdown(!categoryDropdown)
  }
  const handleCategoryClick = (category) => {
    setCategory(category)
    setCategoryDropdown(false)
  }

  useEffect(() => {
    api.get('blog/category/')
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err.response.data.error)
      })
  }, [])

  useEffect(() => {
    setMetaTitle(
      title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
    );
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post('blog/post-create/', { category, title, metaTitle, summary, date: formattedDate, content })
      setCategory('')
      setTitle('')
      setMetaTitle('')
      setSummary('')
      setDate(new Date())
      setContent('')
    
    } catch (error) {
      // Display error message from backend
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error)
      } else {
        alert('An error occurred while creating the blog post.')
      }
    }
  }

  return (
    <form className="max-w-sm mx-auto">
            <p className="text-6xl text-gray-900 dark:text-white mb-5">New Blog</p>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">User</label>
                <input type="text" value="foluwaderibigbe@gmail.com" readOnly className="border cursor-default pointer-events-none text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Category</label>
                <button onClick={toggleCategoryDropdown} type='button' className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700 flex justify-between items-center">
                  <span>{category ? category : 'Select Category'}</span>
                  <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>

                <div className={`absolute z-10 mt-1 bg-neutral-800 border border-neutral-600 rounded-sm shadow-lg transition-all duration-300 ease-in-out transform ${
                categoryDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
                <ul className="py-1 text-sm text-neutral-200 max-h-60 overflow-y-auto">
                  {product && product.length > 0 ? product.map((item, index) => (
                    <li key={index} onClick={() => handleCategoryClick(item.title)} className="cursor-pointer hover:bg-neutral-700 px-4 py-2">
                      {item.title}
                    </li>
                  )) : (
                    <li className="px-4 py-2 text-neutral-400">No categories available</li>
                  )}
                </ul>
              </div>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Summary</label>
                <textarea value={summary} onChange={(e) => setSummary(e.target.value)} className="block p-2.5 w-full text-sm rounded-sm border focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                </textarea>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Content</label>
                <textarea value={content} onChange={(e) => setContent(e.target.value)} className="block p-2.5 w-full text-sm rounded-sm border focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                </textarea>
            </div>
            <div className='w-full flex justify-end'>
                <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">Submit 
                </button>
            </div>
    </form>
  )
}
export default BlogPost;