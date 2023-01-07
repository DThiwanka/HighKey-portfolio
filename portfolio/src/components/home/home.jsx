import React from 'react'
import bgimg from '../../assets/pexels-photo-6739698.jpeg'

function Home() {
  return (
    <div>

      <div className="bg-gray-300 min-h-screen p-6 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Introduction
        </h1>
        <p className="text-xl text-gray-800 mb-6 leading-relaxed">
          Hello, my name is John Doe and I am a software developer. I have experience in building web applications using a variety of technologies, including the MERN stack.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
        <ul className="list-inside list-disc text-lg text-gray-800 mb-6">
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Express</li>
          <li>JavaScript</li>
        </ul>
        <a href="#" className="btn bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
          Contact Me
        </a>
      </div>




    </div>


  )
}

export default Home
