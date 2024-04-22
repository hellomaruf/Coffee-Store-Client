function AddCoffee() {
  return (
    <div>
      <section className="p-6 max-w-7xl mx-auto dark:text-gray-900">
        <div className=" text-center pb-10">
          <h1 className="font-bold text-3xl pb-3">Add New Coffee</h1>
          <p className="max-w-2xl mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form
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
                  id="firstname"
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
                  id="lastname"
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
                  id="firstname"
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
                  id="lastname"
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
                  id="firstname"
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
                  id="lastname"
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
                  id="firstname"
                  type="text"
                  placeholder="Enter Photo URL"
                  className="w-full rounded-md  p-2 outline-none border"
                />
                <div className=" w-full">
                  <button className="bg-[#D2B48C] w-full mt-8 py-2 font-bold text-gray-700 rounded-lg">
                    Add Coffee
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default AddCoffee;
