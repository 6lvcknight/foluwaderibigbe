import React from 'react';
import video1 from '../assets/recipe.mov';
import img1 from '../assets/sentiment analysis.png';
import img2 from '../assets/Price Prediction.png';
import img3 from '../assets/weather extremes.png';
 
const Projects = () => {
  return (
    <div>
        <div id='Projects' className="flex flex-col items-center mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl yexy-center tracking-wide">
                Projects for
            </h1>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl yexy-center tracking-wide bg-gradient-to-r to-purple-800 from-purple-950 text-transparent bg-clip-text mt-4'>
                Software Developer</h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>"I am not a great programmer; I am just a good programmer 
                with great habits. Good programming is not about knowing 'what' to write; 
                it's about understanding 'why' it is written." - Donald Knuth</p>
                <div className="flex justify-center my-10">
                    <a href="https://github.com/6lvcknight" className='bg-gradient-to-r from-purple-700 to-purple-950 py-3 px-4 mx-3 rounded-md' target="_blank" rel="noopener noreferrer">Github Profile</a>
                    <a href="https://www.youtube.com/@6lvcknight" className='py-3 px-4 mx-3 rounded-md border' target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
                <div className="flex mt-10 justify-center">
                    <a href="https://github.com/6lvcknight/Recipe-Website" target="_blank" rel="noopener noreferrer" 
                        className='flex-wrap rounded-lg w-1/2 border border-purple-700 shadow-purple-400 mx-2 my-4 object-cover'>
                        <video autoPlay loop muted>
                            <source src={video1} type='video/mp4' />
                            your browser does not support the video tag
                        </video>
                    </a>
                    
                </div>
        </div>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl yexy-center tracking-wide">
                <span className='bg-gradient-to-r from-red-900 to-red-700 text-transparent bg-clip-text'>
                    Data Science
                </span>
            </h1>
                <div className="flex justify-center my-10">
                    <a href="https://github.com/6lvcknight" className='bg-gradient-to-r from-red-700 to-red-950 py-3 px-4 mx-3 rounded-md' target="_blank" rel="noopener noreferrer">Github Profile</a>
                </div>
                <div className="flex mt-10 gap-4 mb-5">
                    <a href="https://github.com/6lvcknight/Sentiment-Analysis-of-IMDB-Reviews" target="_blank" rel="noopener noreferrer">
                        <img className='rounded-lg border border-red-700 shadow-purple-400 mx-auto' src={img1} alt="data science project 1"/>
                    </a>
                    <a href="https://github.com/6lvcknight/-Airplane-Price-Prediction-Model" target="_blank" rel="noopener noreferrer">
                        <img className='rounded-lg border border-red-700 shadow-purple-400 mx-auto' src={img2} alt="data science project 2"/>
                    </a>
                </div>
                <div className="flex gap-4 mb-5">
                <a href="https://github.com/6lvcknight/Changing-Weather-Extremes" target="_blank" rel="noopener noreferrer">
                        <img className='rounded-lg w-1/2 border border-red-700 shadow-purple-400 mx-auto' src={img3} alt="data science project 3"/>
                    </a>
                </div>
        </div>
    </div>
    
  )
}

export default Projects
