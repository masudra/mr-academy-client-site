
const Class = ({ singelClass }) => {
    console.log(singelClass);
    const { name, image, instructor_name, available_seats, price } = singelClass
    return (
        <div>
            <div className="card md:w-96 bg-base-100 shadow-xl my-6 ">
                <figure><img className="h-[240px] md:w-[400px] p-2 rounded-2xl" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <h2 className="card-title">Instructor name:{instructor_name}</h2>
                    <h2 className="card-title">Available seats:{available_seats}</h2>
                    <h2 className="card-title">Price: ${price}</h2>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Select Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Class;