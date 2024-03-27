import { useState } from "react";
import AllServices from "../admin/AllServices";
import AddService from "../admin/AddService";
import DeleteService from "../admin/DeleteService";
import Reviews from "../admin/Reviews";
import UpdateService from "../admin/UpdateService";
import { useAuth } from "../context/auth";
import Pagenotfound from "../pages/Pagenotfound"


const Dashboard = () => {
  const [activeButton, setActiveButton] = useState("All Services");
  const [auth] = useAuth();

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      {auth.user === null ? (
        <Pagenotfound />
      ) : auth.user.admin ? (
        <section className="bg-[#c2d6d4] pt-4">
          <div className="container px-6 py-10 mx-auto">
            <div className="flex overflow-x-auto py-4 mt-4 w-full md:justify-center items-center">
              <button
                className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
                  activeButton === "All Services"
                    ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                    : "text-black bg-transparent border-gray-200"
                } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
                onClick={() => handleClick("All Services")}
              >
                All Services
              </button>
              <button
                className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
                  activeButton === "Add Services"
                    ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                    : "text-black bg-transparent border-gray-200"
                } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
                onClick={() => handleClick("Add Services")}
              >
                Add Services
              </button>
              <button
                className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
                  activeButton === "Delete Services"
                    ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                    : "text-black bg-transparent border-gray-200"
                } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
                onClick={() => handleClick("Delete Services")}
              >
                Delete Services
              </button>
              <button
                className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
                  activeButton === "Update Services"
                    ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                    : "text-black bg-transparent border-gray-200"
                } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
                onClick={() => handleClick("Update Services")}
              >
                Update Service
              </button>
              <button
                className={`h-12 px-5 py-2 -mb-px text-sm text-center ${
                  activeButton === "Delete Reviews"
                    ? "text-blue-600 bg-transparent border-b-2 border-blue-500"
                    : "text-black bg-transparent border-gray-200"
                } sm:text-base whitespace-nowrap cursor-base focus:outline-none`}
                onClick={() => handleClick("Delete Reviews")}
              >
                Delete Reviews
              </button>
            </div>

            <section className="mt-8 space-y-8 lg:mt-12">
              {activeButton === "All Services" && <AllServices />}
              {activeButton === "Add Services" && <AddService />}
              {activeButton === "Delete Services" && <DeleteService />}
              {activeButton === "Update Services" && <UpdateService />}
              {activeButton === "Delete Reviews" && <Reviews />}
            </section>
          </div>
        </section>
      ) : (
        <Pagenotfound />
      )}
    </>
  );
};

export default Dashboard;
