import linkedin from '../../assets/logo/linkedin.svg';
import github from '../../assets/logo/github.svg';

export const Footer = () => {
    return (
        <footer className="relative z-[2] h-80 bg-slate-50">
            <div className="flex items-center max-w-xl m-auto h-full">
                <div className='flex justify-between w-full'>
                    <div>
                        <p className='font-poppins font-medium'>Connect with me</p>
                        <div className='flex mt-[30px] gap-[17px]'>
                            <img className='w-[32px]' src={linkedin} alt="Linkedin logo" />
                            <img className='w-[32px] invert' src={github} alt="github logo" />
                        </div>
                    </div>
                    <div>
                        <p className='font-poppins font-medium'>Let's work together!</p>
                        <div className='font-lato mt-[30px] text-[#7D7D7D]'>
                            <p>Whatsapp: 081335618823</p>
                            <p>Email: ariframaputra33@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
