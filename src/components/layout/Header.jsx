import { DarkmodeToggle } from "../others/DarkmodeToggle"

export const Header = () => {
    return (
        // <header className='absolute z-[999] inset-x-0 font-poppins text-base text-slate-100 font-light bg-transparent'>
        //     <div className="m-auto py-5 flex justify-between items-center max-w-screen-3xl">
        //         {/* status */}
        //         <div className="flex items-center">
        //             Status :
        //             <span className="flex items-center ms-2 px-2.5 py-1 rounded-md bg-white text-black">
        //                 Available
        //                 <svg className="ms-2 w-2.5 h-2.5 bg-green-400 rounded-full"></svg>
        //             </span>
        //         </div>
        //         {/* navigation */}
        //         <nav className="list-none flex gap-x-9">
        //             <li>Home</li>
        //             <li>About me</li>
        //             <li>Project</li>
        //         </nav>
        //         {/* dark mode toggle*/}
        //         <DarkmodeToggle />
        //     </div>
        // </header>



        <nav className="absolute z-[999] inset-x-0 font-poppins text-base text-slate-100">
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <span className="flex items-center ms-2 px-2.5 py-1 rounded-md bg-white text-black">
                        Available
                        <svg className="ms-2 w-2.5 h-2.5 bg-green-400 rounded-full"></svg>
                    </span>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <DarkmodeToggle />
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-base border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white bg-yellow-700 rounded md:bg-transparent md:text-yellow-700 md:p-0 md:dark:text-yellow-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-700 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
