import React from 'react'
import Navbar from '../navbar/Navbar'
import bgimg from '../../assets/pexels-photo-6739698.jpeg'

function Home() {
  return (
    <div>

      <Navbar />


      <p class="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
      <hr class="lg:w-2/4 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 sm:w-1/5" />
      <p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>


    </div>


  )
}

export default Home
