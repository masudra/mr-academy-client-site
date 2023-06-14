import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";

const MyClasses = () => {
    const { user } = useAuth()
    const [myClasses, setMyClasses] = useState([])

    const url = `http://localhost:5000/classes?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyClasses(data))
    }, []);
    return (
        <div>
            {
                myClasses.map(myclass => console.log(myclass))
            }
            <div className="overflow-x-auto p-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-sky-500  font-bold text-black'>
                            <th>NO:</th>
                            <th> PHOTO</th>
                            <th>Game NAME</th>
                            <th> EMAIL</th>
                            
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myclass, index) => <tr key={myclass._id}>
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
                                <td>{myclass.name}</td>
                                <td>{myclass?.email}</td>
                               

                                <td>
                                    <button  className="btn btn-ghost w-40  my-2 bg-sky-500  text-white ">pending</button><br />
                                    <button  className="btn btn-ghost w-40 bg-sky-500  text-white">approved </button></td>

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

export default MyClasses;