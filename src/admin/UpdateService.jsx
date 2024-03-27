/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "antd";

const UpdateService = () => {
  const [services, setServices] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [included, setIncluded] = useState([]);

  const getAllServices = async () => {
    try {
      const res = await axios.get("https://salon-server-jupe.onrender.com/services/getservices");
      setServices(res.data.allServices);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeIncluded = (e) => {
    const includedItems = e.target.value.split(",").map((item) => item.trim());
    setIncluded(includedItems);
  };

  const handleUpdateService = async () => {
    try {
      const updatedService = {
        name: name,
        price: price,
        included: included,
      };
      const res = await axios.put(
        `https://salon-server-jupe.onrender.com/services/updateservice/${selectedServiceId}`,
        updatedService
      );
      setServices(
        services.map((service) =>
          service._id === selectedServiceId ? res.data.data : service
        )
      );
      setModal2Open(false);
    } catch (error) {
      console.error(
        `Error updating service with ID ${selectedServiceId}:`,
        error
      );
    }
  };

  const openModal = (id) => {
    setSelectedServiceId(id);
    const selectedService = services.find((service) => service._id === id);
    setName(selectedService.name);
    setPrice(selectedService.price);
    setIncluded(selectedService.included);
    setModal2Open(true);
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div className="h-full w-full flex justify-center items-center">
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
                    onClick={() => openModal(data._id)}
                    className="mt-4 w-full block btn3 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#ff6767]  focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                  >
                    Update Service
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
        </div>
      </div>
      <Modal
        centered
        open={modal2Open}
        onOk={handleUpdateService}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{
          style: { background: "#537f3c", borderColor: "#537f3c" },
        }}
      >
        <div>
          <h1 className="text-center text-xl">Update Service</h1>
          <div className="rounded-lg bg-white lg:col-span-3 lg:p-12">
            <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <div className="relative">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="price" className="sr-only">
                  Price
                </label>
                <div className="relative">
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    type="number"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter Price"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="included" className="sr-only">
                  Include Service
                </label>
                <div className="relative">
                  <textarea
                    value={included.join(",")}
                    onChange={handleChangeIncluded}
                    className="w-full rounded-lg border-gray-200 p-4 h-24 pe-12 text-sm shadow-sm"
                    placeholder="Included (comma-separated)"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateService;
