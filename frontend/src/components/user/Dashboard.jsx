import React, { useState } from 'react'
import { ExperiencePost } from './ExperiencePost'
import { ProjectDisplay } from './ProjectDisplay'
import { EditPost } from './EditPost'

export const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('projects')
    const [editPid, setEditPid] = useState(null)

    const handleEditProject = (pid) => {
        setEditPid(pid)
        setActiveSection('edit_project')
    }

    const renderSection = () => {
        switch (activeSection) {
            case 'projects':
                return <ProjectDisplay onEditProject={handleEditProject}/>
            case 'blogs':
                return <p className="text-white">Blogs Section</p>;
            case 'new_blog':
                return <p className="text-white">New Blog Form Here</p>;
            case 'new_project':
                return <ExperiencePost />;
            case 'edit_project':
                return <EditPost pid={editPid} />;
            default:
                return <p className="text-white">Select a section</p>;
        }
    };
    return (
        <>
            <div className='max-w-sm mx-auto'>
                <div className="inline-flex rounded-md shadow-xs" role="group">
                    <button onClick={() => setActiveSection('projects')} className="px-4 py-2 text-sm font-medium border-l border-t border-b rounded-s-md focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                        Projects
                    </button>
                    <button onClick={() => setActiveSection('blogs')} className="px-4 py-2 text-sm font-medium border focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                        Blogs
                    </button>
                    <button onClick={() => setActiveSection('new_blog')} className="px-4 py-2 text-sm font-medium border-t border-b focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                        New Blog
                    </button>
                    <button onClick={() => setActiveSection('new_project')} className="px-4 py-2 text-sm font-medium border rounded-e-md focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                        New Project
                    </button>
                </div>
            </div>
            <div className='mt-8'>
                {renderSection()}
            </div>
        </>
    )
}
