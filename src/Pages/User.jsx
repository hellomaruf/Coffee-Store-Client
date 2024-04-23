import { useLoaderData } from "react-router-dom";

function User() {
  const loadedUser = useLoaderData();
  return <div>All users {loadedUser.length}</div>;
}

export default User;
