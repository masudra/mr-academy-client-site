import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    // Handel Admin BTN
    const handelMakeAdmin=user =>{
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to add ${user.name} as an admin?!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin It!'
        })

        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'ADD',
                                ' Admin create successful',
                                'success'
                            )
                        }
                    })
            }
        })
       
    }

    // Handel  Instructor

    const handelMakeInstructor=user =>{
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to add ${user.name} as an  Instructor?!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make  Instructor It!'
        })

        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount) {
                            refetch();
                            Swal.fire(
                                'ADD',
                                '  create successful',
                                'success'
                            )
                        }
                    })
            }
        })
       
    }






    return (
        <div>
            <div className="overflow-x-auto p-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-sky-500  font-bold text-black'>

                            <th>NO:</th>
                            <th>USER PHOTO</th>
                            <th>USER NAME</th>
                            <th>USER EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3 top-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'admin' ? 'admin' : user.role== 'instructor'?'instructor': <button className="btn btn-ghost btn-xs mx-4 bg-sky-500  text-white w-12 h-12 text-2xl"><FaUser></FaUser></button>}
                                </td>

                                <td>
                                    <button onClick={()=> handelMakeAdmin(user)} className="btn btn-ghost w-40  my-2 bg-sky-500  text-white ">Make Admin</button><br />
                                    <button onClick={()=> handelMakeInstructor(user)} className="btn btn-ghost w-40 bg-sky-500  text-white">Make Instructor </button></td>

                                <td >


                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;