import { FaTrashAlt, FaUsers } from "react-icons/fa";


const User = ({ users, handleMakeAdmin, handleDeleteUser }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === 'admin' ? 'Admin' : <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="btn btn-lg bg-lime-500 hover:bg-green-600">
                                    <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                </button>}
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteUser(user)}
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default User;