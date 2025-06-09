import React, { useEffect, useState } from 'react';
import api from '../../store/api';
import { ProjectSkeleton } from '../skeleton/ProjectSkeleton';

const BlogDisplay = ({onViewBlog}) => {
    const [blog, setBlog] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.get(`blog/post`)
            .then(res => {
                setBlog(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }, [])

    // 1. Group by formatted date string
    const groupedByDate = blog.reduce((acc, item) => {
        const dateStr = new Date(item.publishedat).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        });

        if (!acc[dateStr]) {
        acc[dateStr] = [];
        }
        acc[dateStr].push(item);
        return acc;
    }, {})

    // 2. Sort dates in descending order (most recent first). Remove if you want original order.
    const sortedDates = Object.keys(groupedByDate).sort(
        (a, b) => new Date(b) - new Date(a)
    )

    if (isLoading) {
        return <ProjectSkeleton />
    }
  return (
    <ol className="p-5 mb-4 rounded-sm relative border-s border-neutral-700">
      {sortedDates.map((date) => (
        <li key={date} className="ms-4 mb-6">
          <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
          <time className="text-lg text-white">{date}</time>
          <ol className="mt-3 divide-y divide-gray-200 dark:divide-gray-700">
            {groupedByDate[date].map((item, idx) => (
              <li key={idx}>
                <button
                    onClick={() => onViewBlog(item.metatitle)}
                    className="items-center w-full block p-3 sm:flex hover:bg-neutral-700"
                >
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </span>
                    <div className="text-sm font-normal">
                      {item.summary}
                    </div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                      <svg
                        className="w-2.5 h-2.5 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                      </svg>
                      Public
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default BlogDisplay;
