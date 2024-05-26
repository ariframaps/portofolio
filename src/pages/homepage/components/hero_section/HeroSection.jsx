import { SocialButton } from './components/SocialButton';
import arif_rama from '../../../../assets/image/arif_rama.webp';
import { Blob } from './components/Blob';

export const HeroSection = () => {
    return (
        <section id='hero_section' className="bg-[url('../assets/background/hero_image-light.webp')] relative z-[2] min-h-screen">
            {/* background dark layer */}
            <div className="dark:hidden w-1/2 h-screen bg-gradient-to-r from-black/75 from-30%"></div>
            <div className="absolute top-0 inset-0 h-screen duration-200 bg-black/0 dark:bg-black/[85%] dark:backdrop-hue-rotate-90"></div>
            {/* content */}
            <div className="px-4 md:px-8 xl:px-0 max-w-screen-xl absolute m-auto left-0 right-0 bottom-0 top-0 flex flex-col md:flex-row justify-center gap-[4vh] md:gap-7 lg:gap-0 md:justify-between sm:items-center font-poppins text-[#C4C4C4]">
                <div>
                    <span className='font-lato text-base md:text-[20px]'>Front-end Web Developer</span>
                    <h1 className='text-4xl lg:text-5xl mt-3 md:mt-[20px] mb-3 lg:mb-[35px] text-white font-bold leading-[5vh] lg:leading-[60px]'>
                        Hi, I’m
                        <span className='xl:mx-2 px-2 md:px-4 py-1 text-[#FFE500] md:text-black drop-shadow-lg before:duration-200 before:hidden md:before:block before:absolute before:inset-1 before:bottom-0 before:hover:skew-y-3 before:-skew-y-3 before:bg-[#FFE500] dark:before:bg-[#53E0FF] relative inline-block'>
                            <span className='relative'>Arif Rama</span>
                        </span><br />
                        From Indonesia
                    </h1>
                    {/* social link */}
                    <SocialButton />
                </div>
                {/* image and blob */}
                <div className='md:block relative'>
                    <Blob />
                    <img className='w-[35vh] sm:w-[350px] lg:w-[517px] relative z-[2]' src={arif_rama} alt="Arif Rama" />
                </div>
            </div>
            <div className='absolute inset-x-0 bottom-0 font-bold font-lato text-black dark:text-white'>
                <p className='bg-white dark:bg-[#060A13] w-fit m-auto px-5 py-1.5 rounded-t-md'>My Skills:</p>
            </div>
        </section>
    )
}
