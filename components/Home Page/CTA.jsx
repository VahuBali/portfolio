/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
  return (
	<div className="bg-gray-50">
	  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
		<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
		  <span className="block">Ready to own the Product of YOUR imagination?</span>
		  <span className="block text-blue-600">Hire Me Today!</span>
		</h2>
		<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
		  <div className="inline-flex rounded-md shadow">
			<a
			  href="hire-me"
			  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
			>
			Hire Me
			</a>
		  </div>
		  <div className="ml-3 inline-flex rounded-md shadow">
			<a
			  href="contact-me"
			  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
			>
			  Contact Me
			</a>
		  </div>
		</div>
	  </div>
	</div>
  )
}
