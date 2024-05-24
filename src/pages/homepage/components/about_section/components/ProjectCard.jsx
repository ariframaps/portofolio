import { useEffect, useState } from "react"
import { TechnologyUsed } from "./TechnologyUsed"

export const ProjectCard = ({ index, hoveredIndex, setHoveredIndex }) => {
    const techList = [
        'react', 'Tailwind', 'Node.js', 'JSON-Server', 'Node.js'
    ]

    return (
        <div onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={(() => setHoveredIndex(null))} className={`flex gap-5 p-2.5 rounded bg-white duration-300 hover:bg-[#FAFAFC] cursor-pointer hover:-translate-y-px ${(hoveredIndex !== null && index !== hoveredIndex) ? 'blur-[2px]' : ''}`}>
            <img className="max-w-40 rounded" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/2.jpg" alt="" />
            <div>
                <h5 className="font-poppins font-semibold text-lg leading-none">E-commerce</h5>
                <p className="text-[#717171] font-lato my-3.5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                <ul className="flex gap-2.5 flex-wrap">
                    {techList.map(((tech, index) => (
                        <TechnologyUsed key={index} tech={tech} />
                    )))}

                </ul>
            </div>
        </div>
    )
}
