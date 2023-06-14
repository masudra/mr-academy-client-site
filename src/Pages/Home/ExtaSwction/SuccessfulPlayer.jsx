import React from 'react';
import player1 from '../../../../public/pl-golf.jpg'
import player2 from '../../../../public/player ice.jpg'
import player3 from '../../../../public/player -mykel.jpg'
import player4 from '../../../../public/player-tesis.jpg'
import player5 from '../../../../public/player-5.jpg'
import player6 from '../../../../public/player-6.jpg'

const SuccessfulPlayer = () => {
    return (
        <div className='mb-10'>
            <div className='text-center text-4xl mt-16 mb-10 text-sky-600 font-bold'>
                <h1>Our Top Successful Players</h1>
                <p className='text-xl mt-2'>They coursed us from here</p>
            </div>
           <div className='grid md:grid-cols-3 gap-5'>
           <div >
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-96 w-96 p-4' src={player1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> <span className='font-bold'>Name:</span>Rory McIlroy</h2>
                        <h2 className="card-title"> <span className='font-bold'>Game:</span>Golf</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Medali:</span>25</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Years:</span>30</h2>
                        <h2 className="card-title"> <span className='font-bold'>From:</span>Bangladesh</h2>
                        <p>Golf is the best game populer game in the world</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-96 w-96 p-4' src={player2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> <span className='font-bold'>Name:</span>Wayne Gretzky</h2>
                        <h2 className="card-title"> <span className='font-bold'>Game:</span> Ice Hockey</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Medali:</span>5</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Years:</span>10</h2>
                        <h2 className="card-title"> <span className='font-bold'>From:</span>Canada</h2>
                        <p>Ice Hockey is the best game populer game in the world</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-96 w-96 p-4' src={player3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> <span className='font-bold'>Name:</span>Michael Jordan</h2>
                        <h2 className="card-title"> <span className='font-bold'>Game:</span>Basketball </h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Medali:</span>25</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Years:</span>20</h2>
                        <h2 className="card-title"> <span className='font-bold'>From:</span>USA</h2>
                        <p>Basketball  is the best game populer game in the world</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-96 w-96 p-4' src={player4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> <span className='font-bold'>Name:</span>Novak Djokovic</h2>
                        <h2 className="card-title"> <span className='font-bold'>Game:</span>Tennis </h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Medali:</span>2</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Years:</span>6</h2>
                        <h2 className="card-title"> <span className='font-bold'>From:</span>Canada</h2>
                        <p>Tennis  is the best game populer game in the world</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-96 w-96 p-4' src={player5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> <span className='font-bold'>Name:</span>Ronnie O'Sullivan</h2>
                        <h2 className="card-title"> <span className='font-bold'>Game:</span>Snooker</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Medali:</span>8</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Years:</span>8</h2>
                        <h2 className="card-title"> <span className='font-bold'>From:</span>Bangladesh</h2>
                        <p>Snooker is the best game populer game in the world</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-96 w-96 p-4' src={player6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> <span className='font-bold'>Name:</span>Mike Trout</h2>
                        <h2 className="card-title"> <span className='font-bold'>Game:</span>Baseball </h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Medali:</span>12</h2>
                        <h2 className="card-title"> <span className='font-bold'>Total Years:</span>16</h2>
                        <h2 className="card-title"> <span className='font-bold'>From:</span>USA</h2>
                        <p>Baseball  is the best game populer game in the world</p>

                    </div>
                </div>
            </div>

           </div>



        </div>
    );
};

export default SuccessfulPlayer;