import React from 'react'
import { CheckCircle2 } from "lucide-react";
import { Experiences } from "../constants";
import resume from "../assets/resume.pdf"

const Experience = () => {
  return (
    <div id='Skills' className="mt-20">
      <h1 className="flex mb-8 uppercase text-xl tracking-wide items-start">
        Skills
      </h1>
      <div>
        <table className="w-full text-sm text-left rtl:text-right text-neutral-400">
          <tbody>
            <tr className="">
                <td className="px-6 py-4">Python</td>
                <td className="px-6 py-4">Javascript</td>
                <td className="px-6 py-4">Java</td>
                <td className="px-6 py-4">SQL</td>
            </tr>
            <tr className="">
                <td className="px-6 py-4">HTML</td>
                <td className="px-6 py-4">CSS</td>
                <td className="px-6 py-4">TypeScript</td>
                <td className="px-6 py-4">C++</td>
            </tr>
            <tr className="">
                <td className="px-6 py-4">Git/GitHub</td>
                <td className="px-6 py-4">PyTorch</td>
                <td className="px-6 py-4">Jupyter</td>
                <td className="px-6 py-4">Flask</td>
            </tr>
            <tr className="">
                <td className="px-6 py-4">ReactJS</td>
                <td className="px-6 py-4">NodeJS</td>
                <td className="px-6 py-4">PostgreSQL</td>
                <td className="px-6 py-4">MongoDB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Experience;
