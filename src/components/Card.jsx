import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Card({ coffeeDetails }) {
  const { _id, coffeeName, chef, category, photo } = coffeeDetails;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(_id);

        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side h-full flex items-center bg-[#F5F4F1] bg-opacity-70 shadow-md">
        <figure className=" w-52  p-6">
          <img src={photo} className=" w-full" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="">
            <span className="font-semibold">Name</span> : {coffeeName}
          </h2>
          <h2 className="">
            <span className="font-semibold">Chef</span> : {chef}
          </h2>
          <h2 className="">
            <span className="font-semibold">Category</span> : {category}
          </h2>
        </div>
        <div className="flex flex-col space-y-6">
          <button>
            <i className="ri-eye-line bg-[#D2B48C] text-white p-2 rounded-md text-xl mx-4"></i>
          </button>
          <Link to={`/updateCoffee/${_id}`}>
            <i className="ri-pencil-line bg-[#3C393B] text-white p-2 rounded-md text-xl mx-4"></i>
          </Link>
          <button onClick={() => handleDelete(_id)}>
            <i className="ri-delete-bin-5-line bg-[#EA4744] text-white p-2 rounded-md text-xl mx-4"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
