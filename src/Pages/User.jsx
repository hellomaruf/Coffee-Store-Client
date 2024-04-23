import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function User() {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          alert("Deleted Successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold text-center py-5"> All users </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={index}>
                <th>1</th>
                <td>{user.email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>
                    {" "}
                    <i className="ri-delete-bin-5-line bg-[#EA4744] text-white p-2 rounded-md text-xl mx-4"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
