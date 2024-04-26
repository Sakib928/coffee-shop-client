import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Delete Success");
          const remainingUsers = users.filter((user) => user._id !== _id);
          console.log(remainingUsers);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h2>Users : {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => {
              return (
                <tr key={user._id} className="hover">
                  <th>{user.email}</th>
                  <td>{user.creationTime}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
