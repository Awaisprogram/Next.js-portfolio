import React from 'react';
import Heading from './heading';
import { TfiHtml5 } from "react-icons/tfi";
import { SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiReact, SiTailwindcss } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <TfiHtml5 />, color: 'text-orange-600', name: 'HTML5' },
    { icon: <SiCss3 />, color: 'text-blue-500', name: 'CSS3' },
    { icon: <SiJavascript />, color: 'text-yellow-500', name: 'JavaScript' },
    { icon: <SiTypescript />, color: 'text-blue-600', name: 'TypeScript' },
    { icon: <SiBootstrap />, color: 'text-purple-600', name: 'Bootstrap' },
    { icon: <SiReact />, color: 'text-cyan-400', name: 'React' },
    { icon: <SiTailwindcss />, color: 'text-blue-500', name: 'CSS3' },
  ];

  const cards = [
    {
      title: 'Basics of Web Development',
      description: 'Built dynamic web pages using HTML, CSS, and JavaScript, leveraging YouTube tutorials for skill development',
    },
    {
      title: 'Frontend Development',
      description: 'Completed Front-End Development course via Governor Sindh IT initiative.',
    },
    {
      title: 'Web 3.0 and  Generative AI ',
      description: 'Enrolled in Web 3.0 and Generative AI course, exploring blockchain and AI.',
    },
  ];

  return (
    <>
      <div className='my-5'>
        <Heading heading='My Skills' />

        {/* ICONS */}

        <div className="container p-5 mt-10 flex flex-wrap gap-20">
          <div className="flex min-h-fit flex-wrap justify-center w-full md:w-1/2">
            {skills.map((skill, index) => (
              <div key={index} className="m-4">
                <span className={`bg-gray-800 ${skill.color} rounded-full p-5 text-6xl flex  items-center justify-center`}>
                  {skill.icon}
                </span>
                <div className="text-center text-white mt-2">{skill.name}</div>
              </div>
            ))}
          </div>
           {/* CARDS */}

          <div className="w-full md:w-1/3 flex flex-col gap-4">
            {cards.map((card, index) => (
              <div key={index} className="card bg-gradient-to-r from-gray-300 to-black p-2 rounded-lg">
                <h1 className='text-white text-2xl font-bold text-center mt-1'>{card.title}</h1>
                <p className='text-white pt-5'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
