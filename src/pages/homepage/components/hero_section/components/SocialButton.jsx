import linkedin from '../../../../../assets/logo/linkedin.svg';
import github from '../../../../../assets/logo/github.svg';

export const SocialButton = () => {
    return (
        <div className='flex gap-[20px]'>
            <button className='flex gap-[10px] px-[12px] py-[10px] items-center rounded-lg duration-200 hover:bg-white hover:text-black'>
                <img className='inline' src={linkedin} alt="linkedin logo" />
                LinkedIn
            </button>
            <button className='flex gap-[10px] px-[12px] py-[10px] items-center bg-black border border-transparent rounded-lg duration-200 hover:bg-transparent hover:border-white'>
                <img className='inline' src={github} alt="github logo" />
                GitHub
            </button>
        </div>
    )
}
