import { SocialButton } from './components/SocialButton';
import arif_rama from '../../../../assets/image/arif_rama.webp';
import { Blob } from './components/Blob';

export const HeroSection = () => {
    return (
        <section className="relative z-[2] min-h-screen bg-[url('../assets/background/hero_image-light.webp')]">
            {/* background dark layer */}
            <div className="w-1/2 h-screen bg-gradient-to-r from-black/75 from-30%"></div>
            {/* content */}
            <div className="max-w-screen-xl absolute m-auto left-0 right-0 bottom-0 top-0 flex justify-between items-center font-poppins text-[#C4C4C4]">
                <div>
                    <span className='font-lato text-[20px]'>Front-end Web Developer</span>
                    <h1 className='text-[48px] mt-[20px] mb-[35px] text-white font-bold leading-[60px]'>
                        Hi, I’m
                        <span className='mx-2 px-4 py-1 text-black drop-shadow-lg before:block before:absolute before:inset-1 before:bottom-0 before:-skew-y-3 before:bg-[#FFE500] relative inline-block'>
                            <span className='relative skew-y-2'>Arif Rama</span>
                        </span><br />
                        From Indonesia
                    </h1>
                    {/* social link */}
                    <SocialButton />
                </div>
                {/* image and blob */}
                <div className='relative'>
                    <Blob />
                    <img className='relative z-[2]' src={arif_rama} alt="Arif Rama" />
                </div>
            </div>
            <div className='absolute inset-x-0 bottom-0 font-bold font-lato text-black'>
                <p className='bg-white w-fit m-auto px-5 py-1.5'>My Skills:</p>
            </div>
        </section>
    )
}
