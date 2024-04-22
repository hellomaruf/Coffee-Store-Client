import { Link, useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import img1 from "../assets/icons/1.png";
import img2 from "../assets/icons/2.png";
import img3 from "../assets/icons/3.png";
import img4 from "../assets/icons/4.png";

function MainLayout() {
  const coffee = useLoaderData();
  console.log(coffee);
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
            <img src={img1} alt="" />
            <h2 className="font-rancho text-xl font-semibold">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="space-y-2">
            <img src={img2} alt="" />
            <h2 className="font-rancho text-xl font-semibold">High Quality</h2>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          <div className="space-y-2">
            <img src={img3} alt="" />
            <h2 className="font-rancho text-xl font-semibold">Pure Grades</h2>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="space-y-2">
            <img src={img4} alt="" />
            <h2 className="font-rancho text-xl font-semibold">
              Proper Roasting
            </h2>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>

      {/* coffee card section start */}
      <div className="py-16 relative">
        <img className="absolute" src="/images/4.png" alt="" />
        <div className="max-w-xl">
          <img
            className="absolute right-0 top-0"
            src="/images/bg-home.png"
            alt=""
          />
        </div>
        <div className="space-y-4 py-8">
          <h2 className="font-rancho text-4xl text-[#331A15] font-bold text-center">
            Our Popular Products
          </h2>
          <div className="flex justify-center">
            <Link to="/addCoffee" className="btn bg-[#E3B577] ">
              Add Coffee
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
          {coffee.map((item, index) => (
            <Card key={index} coffeeDetails={item} />
          ))}
        </div>
      </div>
      {/* coffee card section end */}
    </div>
  );
}

export default MainLayout;
