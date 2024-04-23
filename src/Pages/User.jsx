import { useLoaderData } from "react-router-dom";

function User() {
  const loadedUser = useLoaderData();
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
            {loadedUser.map((user, index) => (
              <tr key={index}>
                <th>1</th>
                <td>{user.email}</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
