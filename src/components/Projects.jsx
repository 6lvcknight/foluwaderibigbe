import React from 'react';
import video1 from '../assets/recipe.mov';
import img1 from '../assets/sentiment analysis.png';
import img2 from '../assets/Price Prediction.png';
import img3 from '../assets/weather extremes.png';
 
const Projects = () => {
  return (
    <div>
        <div id='Projects' className="flex flex-col mt-20">
            <h1 className="flex mb-8 uppercase text-xl tracking-wide items-start">
                Recent Projects
            </h1>
            <ol className="relative border-s border-neutral-700"> 
            <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-neutral-500">Forth Quarter, 2024</time>
                    <h3 className="text-lg text-white">Handwriting Recognition Model </h3>
                    <p className="mb-4 text-base font-normal text-neutral-400">Developed a deep learning-based handwriting recognition system capable of accurately identifying handwritten text from images. 
                        The model integrates convolutional layers for extracting spatial features, recurrent layers for sequence prediction, and a transcription layer to map predictions into readable text.</p>
                </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-neutral-500">Second Quarter, 2024</time>
                    <h3 className="text-lg text-white">---Facade WRLD--- A CLOTHING WEBSITE </h3>
                    <p className="mb-4 text-base font-normal text-neutral-400">This is a robust fullstack web application leveraging ReactJS for the frontend and Django for the backend. 
                    The app combines a dynamic and responsive user interface with a powerful server-side architecture 
                    to deliver a seamless user experience.</p>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium border rounded-sm focus:z-10 focus:ring-4 focus:outline-none text-neutral-400 border-neutral-600 hover:text-white hover:bg-neutral-700 focus:ring-neutral-700">
                        Learn more <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></a>
                </li>

                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-700 rounded-full mt-1.5 -start-1.5 border border-neutral-900"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-neutral-500">First Quarter, 2024</time>
                    <h3 className="text-lg text-white">Sentiment Analysis in Poetry </h3>
                    <p className="mb-4 text-base font-normal text-neutral-400">Designed and implemented a sentiment analysis system for poetry, capable of categorizing poems by topics and forms while analyzing their emotional tone. 
                        Leveraged natural language processing (NLP) techniques to interpret and quantify sentiment from poetic texts.</p>
                </li>
            </ol>
        </div>
    </div>
    
  )
}

export default Projects
