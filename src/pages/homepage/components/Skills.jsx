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

    return (
        <section className="relative z-[2] shadow text-center flex flex-col items-center justify-center py-[30px]">
            <div className='flex gap-[48px]'>
                {logos.map(logo => (
                    <img src={logo.src} alt={logo.alt} />
                ))}
            </div>
        </section>
    )
}
