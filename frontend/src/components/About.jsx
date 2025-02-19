import React, { useState } from 'react'
import profile from '../assets/exported_image.jpg';
import resume from '../assets/resume.pdf'

const About = () => {
    const [isAnimated, setIsAnimated] = useState(false)

    const handleAnimation = () => setIsAnimated(true)
  return (
    <div className=''>
        <div className='flex flex-col items-center'>
            <a href='/login' className="mb-12 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                About Me
            </a>

            
            <p className="mb-3 text-neutral-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-neutral-100 first-letter:me-3 first-letter:float-start">
                My name is Folu Aderibigbe, and I’m a Computer Science student at Ontario Tech University with a strong passion for problem-solving. 
                My hobbies, such as solving Sudoku puzzles, playing golf, and basketball, have enhance my ability to analyse situations. 
                These activities allow me to break down issues, identify the root causes of the issues, and find the resources I need to provide the most efficient solutions. 
                Over the years, this approach has helped me track my progress and adjust bit by bit, while deepen my enjoyment of these activities.
            </p>
            <p class="mb-3 text-neutral-400">
                In terms of technical skills, I love programming and applying mathematical concepts to solve complex problems. 
                I personally enjoy exploring modern technologies to simplify everyday tasks and explore mathematical foundations of technologies like machine learning. 
                I am proficient in major object-oriented programming languages such as Python, Java, and C++, as well as JavaScript frameworks and machine learning libraries. 
                Additionally, I have experience optimizing database performance using tools like SQL and systems like PostgreSQL.
            </p>
            <p class="mb-3 text-neutral-400">
                Beyond academics, I co-founded a company with four other friends. 
                We participated in the Brilliant Catalyst’s Ideation Pitch Contest, where we won the contest for the best business idea. 
                Our company, MyUniGuide, is a comparison tool designed to help high school students navigate university selection. 
                The platform considers factors like program-specific opportunities, company partnerships, co-op placements, tuition, and location, aiming to streamline the decision-making process for students.
            </p>

            <p class="mb-3 text-neutral-400">
                Outside of academics and entrepreneurship, I have worked at Shoppers Drug Mart for about five years. 
                During this time, I’ve developed leadership skills, worked collaboratively with assistant and front store managers to streamline daily operations, and fine tuned my customer service abilities to address and resolve customer issues efficiently. 
                Working in this environment has also taught me the importance of time management and completing tasks effectively within specified deadlines.
            </p>

            <p class="pb-20 text-neutral-400">
            Overall, I am passionate about learning and growing. Gaining knowledge not only broadens my perspective but also helps me better understand the world and its intricate workings.
            </p>

        </div>
    </div>
  )
}

export default About
