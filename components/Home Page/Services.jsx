/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, ServerIcon, EmojiHappyIcon, UserAddIcon, DatabaseIcon, ChatAltIcon, PresentationChartLineIcon, AdjustmentsIcon } from '@heroicons/react/outline'

const features = [
  {
	name: 'Next.js / React',
	description:
	  'I can create beautiful looking webpages that are fast and reliable in a short period of time',
	icon: GlobeAltIcon,
  },
  {
	name: `REST API (Django, Express)`,
	description:
	  `I can create fast and reliable backend API's using REST frameworks such as Express.js and Django, Your Choice.`,
	icon: ServerIcon,
  },
  {
	name: 'HTML / CSS / JavaScript',
	description:
	  'I can create websites that will astonish your reader using vanilla HTML, CSS, and JavaScript',
	icon: EmojiHappyIcon,
  },
  {
	name: 'SwiftUI',
	description:
	  'My expertise with Swift and SwiftUI will let me make you applications that will wow your users. ',
	icon: UserAddIcon,
  },
  {
	  name: 'Django / Node.js',
	  description:
		'I can create backend integrated solutions using Django DTL or Node.js which will help your app grow over time as more users visit your site/app',
	  icon: DatabaseIcon,
	},
	{
	  name: `Discord.py / Discord.js`,
	  description:
		`I can create a very versatile, functional Discord.py or Discord.js application which integrates with the web and other services such as MongoDB or PostgreSQL that will amaze everyone who uses this bot`,
	  icon: ChatAltIcon,
	},
	{
	  name: 'Startup',
	  description:
		`I can program your startup's website, iOS and Android applications, and backend integrations in a matter of no time.`,
	  icon: PresentationChartLineIcon,
	},
	{
	  name: 'Fix',
	  description:
		'I can fix your pre-existing code and refine it to let the end-user have a better experience',
	  icon: AdjustmentsIcon,
	},
]

export default function Services() {
  return (
	<div className="py-12 bg-white">
	  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div className="lg:text-center">
		  <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
		  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			The Services that I Offer You
		  </p>
		  <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
			You can hire me to do any full stack development project and I will be able to tackle it
		  </p>
		</div>

		<div className="mt-10">
		  <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
			{features.map((feature) => (
			  <div key={feature.name} className="relative">
				<dt>
				  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
					<feature.icon className="h-6 w-6" aria-hidden="true" />
				  </div>
				  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
				</dt>
				<dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
			  </div>
			))}
		  </dl>
		</div>
	  </div>
	</div>
  )
}
