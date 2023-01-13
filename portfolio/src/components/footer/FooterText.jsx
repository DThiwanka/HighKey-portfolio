import React from 'react'

function FooterText() {
  return (

      <div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getTime()}
				<a
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Portfolio
				</a>
				-
				<a
					href="https://dthiwanka.github.io"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Dthiwanka
				</a>
			</div>
		</div>
  )
}

export default FooterText
