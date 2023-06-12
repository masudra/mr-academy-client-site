import React from 'react';
import { Helmet } from 'react-helmet-async';
import useStudentSelected from '../../Hook/useStudentSelected';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';

const MySelectedClasses = () => {
    const [studentselect, refetch] = useStudentSelected()

    const handelDelet = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/studentSelect/${item?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
       
         <div className="w-full">
        <Helmet>
                <title>Mr Academy || My Selected Classes </title>
            </Helmet>
         
         <div>
             <div className="overflow-x-auto p-10">
                 <table className="table">
                     {/* head */}
                     <thead>
                         <tr className='bg-[#D1A054] font-bold text-black'>

                             <th>NO:</th>
                             <th>CLASSES IMAGE</th>
                             <th>ClASSES NAME</th>
                             <th>PRICE</th>
                             <th>ACTION</th>
                         </tr>
                     </thead>
                     <tbody>
                         {
                            studentselect.map((item, index) => <tr key={item._id}>

                                 <td>{index + 1}</td>
                                 <td>
                                     <div className="flex items-center space-x-3 top-4">
                                         <div className="avatar">
                                             <div className="mask mask-squircle w-12 h-12">
                                                 <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                             </div>
                                         </div>

                                     </div>
                                 </td>
                                 <td>{item?.name}</td>
                                 <td>${item?.price}</td>
                                 <td >
                                     <button onClick={() => handelDelet(item)} className="btn btn-ghost btn-xs mx-4 bg-red-600 text-white w-12 h-12 text-2xl"><FaTrash></FaTrash></button>
                                     <button onClick={() => handelDelet(item)} className="btn btn-ghost btn-xs bg-red-600 text-white w-12 h-12 text-2xl">pay </button>
                                 </td>
                             </tr>)
                         }



                     </tbody>
                 </table>
             </div>
         </div>


     </div>
    );
};

export default MySelectedClasses;