
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle";
import useAxiosPublic from "../../../hook/useAxiousPublic";
import useUser from "../../../hook/useUser";
import User from "../../../Components/User";
import useAxios from "../../../hook/useAxios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";


const AllUsers = () => {
    const [users, refetch] = useUser();
    const [admins, setAdmins] = useState(users);
    console.log(admins)
    const axiosSecure = useAxios()
    const admin = users.filter(user => user.role ? user.role === admins : "normal")
    console.log(admin)
    const normal = users.filter(user => user.role !== 'admin')
    console.log(normal, admin)
    const axiosPublic = useAxiosPublic()
    const handleMakeAdmin = user => {
        console.log('admin users', user)
        axiosSecure.patch(`/api/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res?.data?.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleDeleteUser = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {

                axiosPublic.delete(`/api/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    const handleFilter = (event) => {
        setAdmins(event.target.value);
    }
    return (
        <div>
            <SectionTitle
                headings={'All Users'}
                subHeading={'User ONLINE'}>
            </SectionTitle>
            <div className="flex justify-evenly my-4">
                {/* Dropdown btn */}
                {/* <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" onClick={() => setIsOpen(!isOpen)} className="btn m-1">Users</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>admin</a></li>
                        <li><a>Normal</a></li>
                        <li><a>Pro-User</a></li>
                       
                    </ul> 
                    
                </div> */}
                <form >
                    <select value={admins} onChange={handleFilter} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <option value="all">All</option>
                        <option onClick={() => setAdmins(admin)} value="admin">Admin</option>
                        <option value="normal">Normal</option>
                        <option value="pro-user">Pro user</option>
                    </select>
                </form>
                {/*  */}
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <User
                users={users}

                handleMakeAdmin={handleMakeAdmin}
                handleDeleteUser={handleDeleteUser}
            ></User>



        </div>
    );
};

export default AllUsers;