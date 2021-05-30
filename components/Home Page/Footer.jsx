import React from 'react'

function Footer() {
	return (
		<div>
			<div className="w-full bg-blue-500 text-white">
				  <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
					<div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
					  <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
						<img src="v.svg" className="w-1/4" />
						<p className="opacity-60">Based in Charlotte, NC</p>
					  </div>
					  <div className="w-full sm:w-1/5 flex flex-col space-y-4">
						<a className="opacity-60" href="/projects/Projects">Projects</a>
						<a className="opacity-60">Services</a>
						<a className="opacity-60">Hobbies</a>
						<a className="opacity-60">About Me</a>
					  </div>
					  <div className="w-full sm:w-1/5 flex flex-col space-y-4">
						<a className="opacity-60">Hire Me</a>
						<a className="opacity-60">Contact Me</a>
					  </div>
					  <div className="w-full sm:w-1/5 pt-6 flex items-end mb-1">
						<div className="flex flex-row space-x-4">
						  <i className="fab fa-facebook-f"></i>
						  <i className="fab fa-twitter"></i>
						  <i className="fab fa-instagram"></i>
						  <i className="fab fa-google"></i>
						</div>
					  </div>
					</div>
					<div className="opacity-60 pt-2">
					  <p>© 2021 Vasu Bansal</p>
					</div>
				  </div>
				</div>
				
		</div>
	)
}

export default Footer
