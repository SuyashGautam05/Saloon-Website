/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Countdown from "react-countdown";

// Random component
// const Completionist = () => (
//   <span className="text-sm">Oops!! You are late Offer Ended</span>
// );

const Pricing = () => {
  const [services, setServices] = useState();
  const naviagte=useNavigate()
  const getAllServices = async () => {
    try {
      const res = await axios.get("https://salon-server-jupe.onrender.com/services/getservices");
      setServices(res.data.allServices);
    } catch (error) {
      console.log(error);
    }
  };
  const selectedServices = async (id) => {
    // console.log(id);
    try {
      const response = await axios.get(
        `https://salon-server-jupe.onrender.com/services/selectedService/${id}`,
       
      );
      if (response.data.success) {
        naviagte(`/payment/${id}`)
        // console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching selected service:", error);
      // Handle the error (e.g., display an error message to the user)
    }
  };
  

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <div className="pt-24 h-full w-full flex justify-center items-center">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            {!services || services.length === 0 ? (
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-[#537f3c] animate-bounce [animation-delay:.7s]" />
                <div className="w-4 h-4 rounded-full bg-[#537f3c] animate-bounce [animation-delay:.3s]" />
                <div className="w-4 h-4 rounded-full bg-[#537f3c] animate-bounce [animation-delay:.7s]" />
              </div>
            ) : (
              services?.map((data) => (
                <div
                  key={data._id}
                  className="divide-y bg-zinc-100  divide-gray-200 rounded-2xl border border-[#537f3c] shadow-sm"
                >
                  <div className="p-6 sm:px-8">
                    <h2 className="text-lg font-medium uppercase text-gray-900">
                      {data.name}
                      <span className="sr-only">Plan</span>
                    </h2>

                    
                    <p className="mt-2 sm:mt-4">
                      <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        {" "}
                        ₹{data.price}{" "}
                      </strong>

                      
                    </p>

                    <button
                      to="/payment"
                      onClick={()=>{
                        selectedServices(data._id)
                      }}
                      className="mt-4 w-full block btn3 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#537f3c]  focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                    >
                      Book Now
                    </button>
                  </div>

                  <div className="p-6 sm:px-8">
                    <p className="text-lg font-medium text-gray-900 sm:text-xl">
                      What's included:
                    </p>

                    <ul className="mt-2 space-y-2 sm:mt-4">
                      {data.included?.map((list, index) => (
                        <li key={index} className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 text-indigo-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>

                          <span className="text-gray-700">{list}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            )}
            {/* <div className="divide-y bg-zinc-100  divide-gray-200 rounded-2xl border border-[#537f3c] shadow-sm w-[800px]"></div> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default Pricing;
