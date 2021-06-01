import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  ShieldExclamationIcon,
  DesktopComputerIcon,
  ChipIcon,
  CreditCardIcon,
  MenuIcon,
  MicrophoneIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  ServerIcon,
  XIcon,
  ClipboardCheckIcon,
  ArchiveIcon,
  EmojiHappyIcon,
  ChatAlt2Icon,
  BriefcaseIcon
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const menu = [
  {
    name: "My Services",
    description: "All the services that I offer",
    href: "services",
    icon: ServerIcon,
  },
  {
    name: "My Projects",
    description: "A list of all the projects that I have made",
    href: "Projects",
    icon: ClipboardCheckIcon,
  },
  {
    name: "My Hobbies",
    description: "All of my Hobbies",
    href: "hobbies",
    icon: ArchiveIcon,
  },
  {
    name: "About Me",
    description: "Information about myself",
    href: "about-me",
    icon: EmojiHappyIcon,
  },
  {
    name: "Contact Me",
    description: "Find My Details",
    href: "contact-me",
    icon: ChatAlt2Icon,
  },
  {
    name: "Hire Me",
    description: "Hire Me",
    href: "hire-me",
    icon: BriefcaseIcon,
  },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src={props.src} alt="" />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <a
                  href="Projects"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Projects
                </a>
                <a
                  href="services"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Services
                </a>
                <a
                  href="hobbies"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Hobbies
                </a>
                <a
                  href="about-me"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  About Me
                </a>
                <a
                href="contact-me"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                Contact Me
              </a>
              </Popover.Group>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <a
                  href="hire-me"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src={props.src} alt="Workflow" />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {menu.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                            aria-hidden="false"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                {/* <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </a>
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div>
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Sign in
                      </a>
                    </p>
                  </div>
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
