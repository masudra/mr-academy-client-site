
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import logo1 from '../../../../public/bangla.jpg'
import logo2 from '../../../../public/english.jpg'
import logo3 from '../../../../public/espanoe.jpg'
import logo4 from '../../../../public/japan.jpg'
import logo5 from '../../../../public/koriya.jpg'
import logo6 from '../../../../public/hindi.jpg'

const Banner = () => {
    

    return (
        <Carousel>
        <div className="h-[600px]">
            <img  src={logo1} />
             <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Bangla</h5>
                            <p>This course is designed to develop studentsproficiency in speaking, reading, writing, and understanding Bangla. </p>
                            
                        </div>
                    </div>
        </div>
        <div  className="h-[600px]">
            <img src={logo2} />
            <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>English </h5>
                            <p>This course is designed to develop students proficiency in speaking, reading, writing, and understanding English. </p>
                            
                        </div>
                    </div>
        </div>
        <div  className="h-[600px]">
            <img src={logo3} />
            <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Spanish</h5>
                            <p>This course is designed to develop students proficiency in speaking, reading, writing, and understanding Spanish. </p>
                            
                        </div>
                    </div>
        </div>
        <div  className="h-[600px]">
            <img src={logo4} />
            <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Japan</h5>
                            <p>This course is designed to develop students proficiency in speaking, reading, writing, and understanding Japan. </p>
                            
                        </div>
                    </div>
        </div>
        <div  className="h-[600px]">
            <img src={logo5} />
            <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Korea</h5>
                            <p>This course is designed to develop students proficiency in speaking, reading, writing, and understanding korea. </p>
                            
                        </div>
                    </div>
        </div>
        <div  className="h-[600px]">
            <img src={logo6} />
            <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Hindi </h5>
                            <p>This course is designed to develop students proficiency in speaking, reading, writing, and understanding Hindi. </p>
                            
                        </div>
                    </div>
        </div>
       
    </Carousel>
    );
};


export default Banner;