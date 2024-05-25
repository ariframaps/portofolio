import HTML from '../../../assets/logo/HTML.svg';
import CSS from '../../../assets/logo/CSS.svg';
import javascript from '../../../assets/logo/javascript.svg';
import React from '../../../assets/logo/React.svg';
import nextjs from '../../../assets/logo/nextjs.svg';
import tailwindcss from '../../../assets/logo/tailwindcss.svg';
import jquery from '../../../assets/logo/jquery.svg';
import nodejs from '../../../assets/logo/nodejs.svg';
import bootstrap from '../../../assets/logo/bootstrap.svg';
import Sass from '../../../assets/logo/Sass.svg';
import figma from '../../../assets/logo/figma.svg';
import firebase from '../../../assets/logo/firebase.svg';
import php from '../../../assets/logo/php.svg';
import MySQL from '../../../assets/logo/MySQL.svg';
import { useState } from 'react';

export const Skills = () => {
    const logos = [
        { src: HTML, alt: "HTML logo" },
        { src: CSS, alt: "CSS logo" },
        { src: javascript, alt: "javascript logo" },
        { src: React, alt: "React logo" },
        { src: nextjs, alt: "nextjs logo" },
        { src: tailwindcss, alt: "tailwindcss logo" },
        { src: jquery, alt: "jquery logo" },
        { src: nodejs, alt: "nodejs logo" },
        { src: bootstrap, alt: "bootstrap logo" },
        { src: Sass, alt: "Sass logo" },
        { src: figma, alt: "figma logo" },
        { src: firebase, alt: "firebase logo" },
        { src: php, alt: "php logo" },
        { src: MySQL, alt: "MySQL logo" },
    ];

    const [showSkills, setShowSkills] = useState(false)

    return (
        <section className="relative z-[2] shadow dark:shadow-[0_1px_3px_0px_rgba(44,44,44,1)] flex justify-center py-[30px]">
            <div className={`${showSkills ? 'h-auto' : 'max-h-12 overflow-hidden'} px-8 xl:px-0 flex flex-wrap  justify-center gap-[48px] lg:h-auto`} >
                {
                    logos.map((logo, index) => (
                        <img src={logo.src} alt={logo.alt} key={index} />
                    ))
                }
            </div>
            <div onClick={() => setShowSkills(!showSkills)} className='xl:hidden absolute bg-slate-100 hover:bg-slate-200 duration-100 -bottom-7 shadow inset-x-0 flex flex-col justify-center items-center cursor-pointer'>
                {showSkills ? 'Less' : 'More'}
                {showSkills ? (
                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" />
                    </svg>) : (

                    <svg className="w-4 h-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                    </svg>
                )}
            </div>
        </section>
    )
}
