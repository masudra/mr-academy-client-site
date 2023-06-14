import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';

const AddClasses = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
       
        const{Price,Available_seats,image,name,instructor_name,email}=  data
        const price = parseFloat(Price)
        const available_seats = parseFloat(Available_seats)

        const mdata ={
            price,
            available_seats,
            image,
            name,instructor_name,
            email
        }
        
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(mdata)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)}
                    )

    }


    return (
        <div>
            <div>

                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-9">
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Class Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Class Name" name="name" className="input input-bordered" />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Class Picture URL</span>
                                </label>
                                <input type="text" {...register("image", { required: true })} placeholder="Picture URL" name="image" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input type="text"  {...register("instructor_name", { required: true })} placeholder="Instructor name" name="instructor_name" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Instructor email" name="email" className="input input-bordered" required />
                            </div>

                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="number" {...register("Available_seats", { required: true })} placeholder="Available Seats" name="Available_seats" className="input input-bordered" required />
                            </div>
                            {/*  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" {...register("Price", { required: true })} placeholder="Price" name="Price" className="input input-bordered" required />
                            </div>
                            {/*  */}


                        </div>

                        <div className="form-control mt-6">
                            <input className="btn  text-white hover:bg-sky-600 bg-sky-600" type="submit" value="Add  Classes " />
                        </div>
                    </form>
                </div>


            </div>

        </div>
    );
};

export default AddClasses;