import React from 'react';

const PopularClassCart = ({populersix}) => {
    const { name, image, instructor_name, available_seats, price, _id } = populersix;

    return (
        <div >
           <div>
           <div className="card md:w-96 bg-base-100 shadow-xl my-6  ">
                <figure><img className="h-[240px] md:w-[400px] p-2 rounded-2xl" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Instructor name:{instructor_name}</h2>
                    <h2 className="card-title">Available seats:{available_seats}</h2>
                    <h2 className="card-title">Price: ${price}</h2>
                </div>
            </div>
           </div>
            
        </div>
    );
};

export default PopularClassCart;