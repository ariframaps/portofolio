import { SocialButton } from './components/SocialButton';
import arif_rama from '../../../../assets/image/arif_rama.webp';
import { Blob } from './components/Blob';

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen bg-[url('../assets/background/hero_image-light.webp')]">
            {/* background dark layer */}
            <div className="w-1/2 h-screen bg-gradient-to-r from-black/75 from-30%"></div>
            {/* content */}
            <div className="max-w-screen-xl absolute m-auto left-0 right-0 bottom-0 top-0 flex justify-between items-center font-poppins text-[#C4C4C4]">
                <div>
                    <span className='font-lato text-[20px]'>Front-end Web Developer</span>
                    <h1 className='text-[48px] mt-[20px] mb-[35px] text-white font-bold leading-[60px]'>Hi, I’m <span className='bg-black px-4 text-[#FFE500] drop-shadow-lg'>Arif Rama</span><br />From Indonesia</h1>
                    {/* social link */}
                    <SocialButton />
                </div>
                {/* image and blob */}
                <div className='relative'>
                    <Blob />
                    <img className='relative z-[2]' src={arif_rama} alt="Arif Rama" />
                </div>
            </div>
        </section>
    )
}
