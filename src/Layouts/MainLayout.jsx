function MainLayout() {
  return (
    <div>
      <div className=" text-center flex items-center justify-center gap-2 py-2 bg-[#331A15]">
        <img className="w-14" src="images/logo1.png" alt="" />
        <h1 className="font-rancho font-bold text-2xl text-white">
          Espresso Emporium
        </h1>
      </div>
      {/* hero section start*/}
      <div
        className="hero min-h-[600px]"
        style={{
          backgroundImage: "url(images/3.png)",
        }}
      >
        <div className=" text-start grid grid-cols-2 max-w-7xl mx-auto">
          <div className="col-span-1"></div>
          <div className=" text-white col-span-1">
            <h1 className="mb-5 text-5xl font-bold font-rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 text-gray-300 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#E3B577] border-none ">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* hero section end */}
      <div className="bg-[#ECEAE3]">
        <div className="flex max-w-7xl mx-auto gap-4 py-12">
          <div className="space-y-2">
            <img src="/icons/1.png" alt="" />
            <h2 className="font-rancho text-xl font-semibold">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img src="/icons/2.png" alt="" />
            <h2 className="font-rancho text-xl font-semibold">High Quality</h2>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div className="space-y-2">
            <img src="/icons/3.png" alt="" />
            <h2 className="font-rancho text-xl font-semibold">Pure Grades</h2>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-2">
            <img src="/icons/4.png" alt="" />
            <h2 className="font-rancho text-xl font-semibold">Proper Roasting</h2>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
