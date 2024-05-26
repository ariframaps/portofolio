import linkedin from '../../assets/logo/linkedin.svg';
import github from '../../assets/logo/github.svg';

export const Footer = () => {
    return (
        <footer className="px-8 xl:px-0 relative z-[2] h-60 lg:h-80 dark:bg-[#080E17] bg-slate-100 dark:text-white">
            <div className="flex items-center max-w-xl m-auto h-full">
                <div className='flex flex-col lg:flex-row justify-between w-full'>
                    <div className='w-fit pb-4 border border-0 border-b-2 mb-4 md:border-b-0'>
                        <p className='font-poppins font-medium'>Connect with me</p>
                        <div className='flex mt-4 lg:mt-[30px] gap-3 lg:gap-[17px]'>
                            <a href="https://linkedin.com/in/ariframaps" className='duration-100 hover:-translate-y-[3px] hover:drop-shadow-[0_3px_0px_rgba(0,0,0,1)]'>
                                <img className='w-[32px]' src={linkedin} alt="Linkedin logo" />
                            </a>
                            <a href="https://github.com/ariframaps" className='duration-100 rounded-full hover:-translate-y-[3px] hover:shadow-[0_3px_0px_rgba(0,0,0,1)]'>
                                <img className='w-[32px] invert dark:invert-0' src={github} alt="github logo" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <p className='font-poppins font-medium'>Let's work together!</p>
                        <div className='font-lato mt-4 lg:mt-[30px] dark:text-[#9F9F9F] text-[#7D7D7D]'>
                            <p>Whatsapp: 081335618823</p>
                            <p>Email: ariframaputra33@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
