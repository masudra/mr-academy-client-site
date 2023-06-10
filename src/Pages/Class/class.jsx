import { useContext } from "react";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Class = ({ singelClass }) => {
    const { name, image, instructor_name, available_seats, price, _id } = singelClass
    const { user } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()

    const handelSelectBtn = classData => {
        console.log(classData);
        if (user && user?.email) {
            const studentItem = { studentItemId: _id, name, image, instructor_name, available_seats, price, email: user?.email }
            fetch('http://localhost:5000/studentSelect', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(studentItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Login Now',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login It!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

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
                        <button onClick={() => handelSelectBtn(singelClass)} className="btn btn-primary">Select Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Class;