import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContex)

  const handelLogout =()=>{
    logOut()
    .then(()=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: ' LogOut SuccessFull',
        showConfirmButton: false,
        timer: 1500
    })
    })
    .catch(error =>{
      alert(error.message)
    })

  }
    const naveitem =<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Instructors</Link></li>
    <li><Link to='/classes'>Classes</Link></li>
    <li><Link to='/'>Dashboard</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {naveitem}
       
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className="text-blue-800">MR ACADEMY</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {naveitem}
    </ul>
  </div>
  <div className="navbar-end">
 {user?<>
 <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img src={user?.photoURL}/>
  </div>
</label>
<button onClick={handelLogout} className="btn">Log Out</button>
  </>:<>
  <Link to='/login' className="btn">Login</Link></>
 }
  </div>
</div>
            
        </div>
    );
};

export default Navbar;