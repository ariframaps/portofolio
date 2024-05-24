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
    return (
        <section className="border border-transparent border-b-[#CBCBCB] text-center flex flex-col items-center justify-center py-[30px]">
            <p className='font-bold font-lato mb-7'>My Skills:</p>
            <div className='flex gap-[48px]'>
                <img src={HTML} alt="HTML logo" />
                <img src={CSS} alt="CSS logo" />
                <img src={javascript} alt="javascript logo" />
                <img src={React} alt="React logo" />
                <img src={nextjs} alt="nextjs logo" />
                <img src={tailwindcss} alt="tailwindcss logo" />
                <img src={jquery} alt="jquery logo" />
                <img src={nodejs} alt="nodejs logo" />
                <img src={bootstrap} alt="bootstrap logo" />
                <img src={Sass} alt="Sass logo" />
                <img src={figma} alt="figma logo" />
                <img src={firebase} alt="firebase logo" />
                <img src={php} alt="php logo" />
                <img src={MySQL} alt="MySQL logo" />
            </div>
        </section>
    )
}
