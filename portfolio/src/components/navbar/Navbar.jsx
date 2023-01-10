import React from 'react'
import '../../App.css'

function navbar() {
  return (
    <div>
            <nav class="flex items-center justify-between px-4 py-3 bg-white fixed w-full z-50 top-0">
  <div class="flex items-center">
    <a href="#" class="text-gray-800 font-bold text-xl text-fade-in">My App</a>
  </div>
  <div class="lg:hidden">
    <button class="block px-3 py-2 rounded-md text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100" aria-label="Menu">
      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
  <div class="hidden lg:block">
    <div class="ml-auto">
      <a href="#profile" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">Profile</a>
      <a href="#work" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">Work</a>
      <a href="#experience" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">Experience</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default navbar
