
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import logo1 from '../../../../public/baseball baner.jpg'
import logo2 from '../../../../public/sports-–-tennis.jpg'
import logo3 from '../../../../public/ice hokey baner.jpg'
import logo5 from '../../../../public/golf baner.jpg'

const Banner = () => {


    return (
          


        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={logo1} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'>Baseball </h5>
                                <p>
A game is an activity or sport usually involving skill, knowledge, or chance, in which you follow fixed rules and try to win against an opponent or to solve a puzzle. ... the wonderful game of Baseball . </p>

                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={logo2} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'>Tennis </h5>
                                <p>
A game is an activity or sport usually involving skill, knowledge, or chance, in which you follow fixed rules and try to win against an opponent or to solve a puzzle. ... the wonderful game of Tennis . </p>

                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={logo3} className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'>Ice hockey </h5>
                                <p>
A game is an activity or sport usually involving skill, knowledge, or chance, in which you follow fixed rules and try to win against an opponent or to solve a puzzle. ... the wonderful game of Ice hockey . </p>

                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={logo5}className="w-full" />
                <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                                <h5 className='text-5xl font-bold'>Golf </h5>
                                <p>
A game is an activity or sport usually involving skill, knowledge, or chance, in which you follow fixed rules and try to win against an opponent or to solve a puzzle. ... the wonderful game of Golf. </p>

                            </div>
                        </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};


export default Banner;