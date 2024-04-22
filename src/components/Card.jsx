function Card({ coffeeDetails }) {
  const { coffeeName, chef, category, photo } = coffeeDetails;
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
        <div className="flex flex-col space-y-3">
          <i className="ri-eye-line bg-[#D2B48C] text-white p-2 rounded-md text-xl mx-4"></i>
          <i className="ri-pencil-line bg-[#3C393B] text-white p-2 rounded-md text-xl mx-4"></i>
          <i className="ri-delete-bin-5-line bg-[#EA4744] text-white p-2 rounded-md text-xl mx-4"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
