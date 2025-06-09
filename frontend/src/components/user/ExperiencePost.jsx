import React, { useEffect, useRef, useState } from 'react'
import api from '../../store/api';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

export const ExperiencePost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())
    const [github, setGithub] = useState('')
    const [url, setUrl] = useState('')
    const formattedDate = format(date, 'yyyy-MM-dd');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post('project/new/', { title, description, text, formattedDate, github, url })
            setTitle('');
            setDescription('');
            setText('');
            setDate(new Date());
            setGithub('');
            setUrl('');
        } catch (error) {
            console.log(error.response.data.error)
        }
    }
    return (
        <form className="max-w-sm mx-auto">
            <p className="text-6xl text-gray-900 dark:text-white mb-5">New Project</p>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="block p-2.5 w-full text-sm rounded-sm border focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                </textarea>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Text</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} className="block p-2.5 w-full text-sm rounded-sm border focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                </textarea>
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">Date</label>
                <DatePicker className="border text-sm rounded-sm block w-full ps-10 p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700" todayButton="Today" selected={date} onChange={(date) => setDate(date)} dateFormat='yyyy-MM-dd' />
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">URL</label>
                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
            </div>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-white">Github URL</label>
                <input type="url" value={github} onChange={(e) => setGithub(e.target.value)} className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
            </div>
            <div className='w-full flex justify-end'>
                <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">Submit 
                </button>
            </div>
        </form>
    )
}
