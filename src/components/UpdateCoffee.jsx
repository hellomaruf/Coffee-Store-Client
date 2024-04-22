import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateCoffee() {
  const coffee = useLoaderData();
  const { coffeeName, chef, supplier, teste, category, details, photo } =
    coffee;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const teste = form.teste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      coffeeName,
      chef,
      supplier,
      teste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:3000/coffee", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added Coffee Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div style={{ backgroundImage: "url(/images/11.png)" }} className="">
        <section className="p-6 max-w-7xl mx-auto dark:text-gray-900">
          <div className=" text-center pb-10">
            <h1 className="font-bold text-3xl pb-3">
              Update Existing Coffee Details
            </h1>
            <p className="max-w-4xl mx-auto">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <Link className="btn bg-[#D2B48C] mb-7" to="/">
            Back to home
          </Link>
          <form
            onSubmit={handleUpdateCoffee}
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-[#F4F3F0]">
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Name
                  </label>
                  <input
                    required
                    defaultValue={coffeeName}
                    name="name"
                    type="text"
                    placeholder="Enter Coffee name"
                    className="w-full rounded-md  p-2 outline-none border"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Chef
                  </label>
                  <input
                    required
                    defaultValue={chef}
                    name="chef"
                    type="text"
                    placeholder="Enter Chef name"
                    className="w-full rounded-md p-2 outline-none border "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Supplier
                  </label>
                  <input
                    required
                    defaultValue={supplier}
                    name="supplier"
                    type="text"
                    placeholder="Enter Coffee Supplier"
                    className="w-full rounded-md  p-2 outline-none border"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Teste
                  </label>
                  <input
                    required
                    defaultValue={teste}
                    name="teste"
                    type="text"
                    placeholder="Enter Coffee Teste"
                    className="w-full rounded-md p-2 outline-none border "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Category
                  </label>
                  <input
                    required
                    defaultValue={category}
                    name="category"
                    type="text"
                    placeholder="Enter Coffee Category"
                    className="w-full rounded-md  p-2 outline-none border"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Details
                  </label>
                  <input
                    required
                    defaultValue={details}
                    name="details"
                    type="text"
                    placeholder="Enter Coffee Details"
                    className="w-full rounded-md p-2 outline-none border "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Photo
                  </label>
                  <input
                    required
                    defaultValue={photo}
                    name="photo"
                    type="text"
                    placeholder="Enter Photo URL"
                    className="w-full rounded-md  p-2 outline-none border"
                  />
                  <div className=" w-full">
                    <input
                      className="bg-[#D2B48C] w-full mt-8 py-2 font-bold text-gray-700 rounded-lg"
                      type="submit"
                      value="Update Coffee"
                    />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    </div>
  );
}

export default UpdateCoffee;
