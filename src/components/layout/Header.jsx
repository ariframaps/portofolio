import { DarkmodeToggle } from "../others/DarkmodeToggle"

export const Header = () => {
    return (
        <header className="z-[999] font-poppins text-base fixed left-0 right-0 text-slate-100 font-light">
            <div className="m-auto h-20 flex justify-between items-center max-w-screen-3xl">
                {/* status */}
                <div className="flex items-center">
                    Status :
                    <span className="flex items-center ms-2 px-2.5 py-1 rounded-lg bg-white text-black">
                        Available
                        <svg className="ms-2 w-2.5 h-2.5 bg-green-400 rounded-full"></svg>
                    </span>
                </div>
                {/* navigation */}
                <nav className="list-none flex gap-x-9">
                    <li>Home</li>
                    <li>About me</li>
                    <li>Project</li>
                </nav>
                {/* dark mode toggle*/}
                <DarkmodeToggle />
            </div>
        </header>
    )
}
