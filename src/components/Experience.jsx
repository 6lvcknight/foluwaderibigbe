import React from 'react'
import { CheckCircle2 } from "lucide-react";
import { Experiences } from "../constants";
import resume from "../assets/resume.pdf"

const Experience = () => {
  return (
    <div id='Skills' className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide text-red-800">
      Skills
      </h2>
      <div className="flex flex-wrap items-stretch">
        {Experiences.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="flex flex-col p-10 border border-neutral-700 rounded-xl min-h-[710px]">
              <div className="flex-grow">
                <p className="text-3xl mb-8 text-center">
                    {option.title}
                </p>
                <p className="mb-8">
                    <span className="text-4xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
                <ul>
                    {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                    </li>
                    ))}
                </ul>
              </div>
              
              <a href={resume} target="_blank" rel="noopener noreferrer" 
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl 
                hover:bg-red-950 border border-red-800 rounded-lg transition duration-200">
                    Subscribe
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
