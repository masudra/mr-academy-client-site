import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaWallet } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <Helmet>
                <title>Mr Academy || DashBoard </title>
            </Helmet>
            <div className="drawer drawer-mobile lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content hear */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-black font-bo">
                        {/* Sidebar content hear */}
                        <li><NavLink to='/dashboard/'><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/dashboard/myselectedclass'>My Selected Classes</NavLink></li>
                        <li><NavLink to='/dashboard/myenrolledclasses'>My Enrolled Classes</NavLink></li>
                        <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment history</NavLink></li>
                       
                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Main Home</Link></li>
                        <li><Link to='/menu'>Our Menu</Link></li>
                        <li><Link to='/order'>Our Order</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;