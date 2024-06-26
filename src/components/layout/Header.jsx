import { useState } from "react"
import { DarkmodeToggle } from "../others/DarkmodeToggle"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false) // show dropdown (when on mobile)

    return (
        <header className="px-2 md:px-5 absolute z-[999] inset-x-0 font-poppins text-base text-slate-100">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto py-5 md:py-7">
                <div className="flex items-center">
                    <span className="flex items-center ms-2 px-2.5 py-1 rounded-md bg-slate-100 text-black text-sm md:text-base">
                        Available
                        <svg className="ms-2 w-2.5 h-2.5 bg-sky-300 rounded-full"></svg>
                    </span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <DarkmodeToggle />
                    <button onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <nav className={`${showMenu ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul className="flex flex-col backdrop-blur-lg md:backdrop-blur-none p-4 md:p-0 mt-4 font-base border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <a onClick={() => setShowMenu(!showMenu)} href="#hero_section" className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-500 dark:md:text-[#53E0FF] md:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a onClick={() => setShowMenu(!showMenu)} href="#about_section" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-yellow-500 dark:md:hover:text-[#53E0FF]">About Me</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
