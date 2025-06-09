import React, { useEffect, useState } from 'react'
import api from '../../store/api';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, set } from 'date-fns';
import { useNavigate } from 'react-router-dom'

export const EditPost = ({pid}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())
    const [github_url, setGithub] = useState('')
    const [url, setUrl] = useState('')
    const createdat = format(date, 'yyyy-MM-dd')
    const navigate = useNavigate()

    // fetch project by pid
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await api.get(`project/update/${pid}/`)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setText(response.data.text)
                const date = response.data.createdat
                const year = date.split('-')[0]
                const month = date.split('-')[1].replace(/^0+/, '')
                const day = date.split('-')[2].replace(/^0+/, '')
                setDate(new Date(year, month - 1, day))
                setGithub(response.data.github_url)
                setUrl(response.data.url)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProject()
    }, [pid])

    // submit new values
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.put(`project/update/${pid}/`, { title, description, text, pid, createdat, github_url, url })
            setTitle('');
            setDescription('');
            setText('');
            setDate(new Date());
            setGithub('');
            setUrl('');
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className="max-w-sm mx-auto">
            <p className="text-6xl text-gray-900 dark:text-white mb-5">Edit Project</p>
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
                <input type="url" value={github_url} onChange={(e) => setGithub(e.target.value)} className="border text-sm rounded-sm block w-full p-2.5 focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700"/>
            </div>
            <div className='w-full flex justify-end'>
                <button onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">Submit 
                </button>
            </div>
        </form>
    )
}
