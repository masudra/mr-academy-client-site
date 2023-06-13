import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaBookDead, FaHome, FaMobile, FaShapes, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../Pages/Hook/useAdmin';
import useAuth from '../Pages/Hook/useAuth';
import useInstructor from '../Pages/Hook/useInstructor';

const DashBoard = () => {
    const {user}= useAuth()
    // const isAdmin = true;
    // const isInstructor = false;
    const [isAdmin] = useAdmin();
    const [isInstructor] =useInstructor();
    

    return (
        <div>
            <Helmet>
                <title>Mr Academy || DashBoard </title>
            </Helmet>
            <div className="drawer drawer-mobile lg:drawer-open">
                <h1>{user?.name}</h1>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content hear */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-sky-500  text-black font-bo">
                       <img className='w-[80px] rounded-full mx-auto mt-2' src={user.photoURL} alt="" />

                       <div className='mx-auto mb-4 mt-2 text-white'>
                        <h1 className=' hover:bg-black hover:bg-opacity-50 p-2'>{user?.displayName}</h1>
                        <h1 className=' hover:bg-black hover:bg-opacity-50 p-2'>{user?.email}</h1>
                       </div>

                        {

                            isAdmin ? <>
                                {/* Admin DashBoard */}
                                <li><NavLink to='/dashboard/'><FaBook></FaBook>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers>Manage Users</NavLink></li> </>
                                 : isInstructor ? <>
                                 
                              
                            <li><NavLink to='/dashboard/'><FaBook></FaBook>Add a Class</NavLink></li>
                            <li><NavLink to='/dashboard/'><FaShoppingCart></FaShoppingCart>My Classes</NavLink></li>
                            </> 
                            : <>
                                {/* Student DashBoard */}
                                <li><NavLink to='/dashboard/myselectedclass'><FaBook></FaBook>My Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/myenrolledclasses'><FaShoppingCart></FaShoppingCart> My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment history</NavLink></li></>

                    

                        }
                        {/* Sidebar content hear */}


                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Main Home</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;