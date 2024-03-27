/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddService = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [included, setIncluded] = useState("");

  const addService = async (e) => {
    e.preventDefault();
    if (!name || !price || !included) {
      toast.error("All fields are required");
      return;
    }
    try {
      const res = await axios.post(
        "https://salon-server-jupe.onrender.com/services/postservices",
        { name, price, included }
      );
      toast.success("Service added successfully");
      setName("");
      setPrice("");
      setIncluded("");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add service");
    }
  };
  

  const handleChangeIncluded = (e) => {
    const includedItems = e.target.value.split(",").map((item) => item.trim());
    setIncluded(includedItems);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <form
        onSubmit={addService}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
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
              required
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
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="included" className="sr-only">
            Include Service
          </label>
          <div className="relative">
            <textarea
              value={included}
              onChange={handleChangeIncluded}
              className="w-full rounded-lg border-gray-200 p-4 h-auto pe-12 text-sm shadow-sm"
              placeholder="Included (comma-separated)"
              required
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn2">
            Add Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
