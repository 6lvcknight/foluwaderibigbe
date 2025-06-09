import React from 'react'

export const ProjectSkeleton = () => {
    return (
        <div role="status" className="space-y-2.5 animate-pulse">
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-32"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full]">
                <div className="h-2.5 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-neutral-200 rounded-full dark:bg-neutral-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 ms-2 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full"></div>
                        <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-32"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-neutral-200 rounded-full dark:bg-neutral-700 w-full"></div>
            </div>
            <div className="flex items-center w-full">
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-neutral-200 rounded-full dark:bg-neutral-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-neutral-300 rounded-full dark:bg-neutral-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
