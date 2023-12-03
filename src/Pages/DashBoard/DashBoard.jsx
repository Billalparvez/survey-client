import { NavLink, Outlet } from "react-router-dom";
import Container from "../../Shard/Container";
import { Helmet } from "react-helmet-async";
import UseAdmin from '../../hook/UseAdmin'

const DashBoard = () => {
    const [isAdmin] =UseAdmin()
    console.log(isAdmin)
    // const isAdmin=true
    
    return (
        <Container>
             <Helmet>
                <title> Survey App |  DashBoard </title>           
            </Helmet>
            
            <div className="flex flex-col md:flex-row gap-5 ">
                <div className="w-64 min-h-screen bg-lime-500">
                    <ul className="menu mt-10">
                        <h1 className="text-4xl p-2 mb-4">Survey application</h1>
                        {
                            isAdmin ? <>
                                <li><NavLink to={'/dashboard/adminHome'}>Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/surveyCreation'}>Survey Creation</NavLink></li>
                                <li><NavLink to={'/dashboard/allUsers'}>All User <span className="text-red-500">{''}</span></NavLink></li>
                            </>
                                : <>
                                    <li><NavLink to={'/dashboard/home'}>User Home</NavLink></li>
                                    <li><NavLink to={'/dashboard/cart'}>My Cart <span className="text-red-500">{'cart.length'}</span> </NavLink></li>
                                    <li><NavLink to={'/dashboard/views'}>My Views</NavLink></li>
                                    <li><NavLink to={'/dashboard/bookings'}>My Bookings</NavLink></li>
                                    <li><NavLink to={'/dashboard/reservation'}>Reservation</NavLink></li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to={'/'}> Home</NavLink></li>
                        <li><NavLink to={'/menu'}> Menu</NavLink></li>
                        <li><NavLink to={'/shop'}> Shop</NavLink></li>
                        <li><NavLink to={'/contact'}> Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default DashBoard;