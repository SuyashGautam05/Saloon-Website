/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const Appointment = () => {
  const [loginedUser, setLoginedUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [auth, setAuth] = useAuth();

  const getAppointments = async () => {
    try {
      const response = await axios.get(
        "https://salon-server-jupe.onrender.com/status/allappointmnet",
        {
          params: {
            userId: loginedUser._id,
          },
        }
      );
      setAppointments(response.data.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Get the user data from localStorage
    const authData = localStorage.getItem("auth");

    // Parse the string to a JavaScript object
    const parsedAuthData = authData ? JSON.parse(authData) : {};

    // Set the state with the parsed user data
    setLoginedUser(parsedAuthData.user);

    // Fetch appointments and delete null appointments
    getAppointments();
  }, [loginedUser._id]); // Run this effect whenever loginedUser._id changes



  // Filter out appointments with null values for razorpay_payment_id, razorpay_order_id, and razorpay_signature
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.razorpay_payment_id !== null &&
      appointment.razorpay_order_id !== null &&
      appointment.razorpay_signature !== null
  );

  return (
    <>
      <div className="h-full w-full flex justify-center items-center flex-col gap-4 p-4 pt-24">
        {appointments.length === 0 ? (
          <article className="group w-96">
            <img
              alt="Lava"
              src="https://imgs.search.brave.com/4Hx8t_mUcEbluPvkdkeKwuGZtchYOu_BhBYQ-99wNWs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzEyLzQ0LzMy/LzM2MF9GXzMxMjQ0/MzI4MV8xR3N6RG1s/Ymg2RUlQdGVCT0o4/Q0l2Y1hTdmw2MW51/cy5qcGc"
              className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />

            <div className="p-4">
              <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                  No Appointment Found
                </h3>
              </a>

              <p className="mt-2  text-sm/relaxed text-gray-500">
                Experience the ultimate in women's salon services. From stunning
                hair transformations to revitalizing skincare treatments, our
                expert team is here to pamper you. Say hello to a new level of
                beauty and confidence. Book your appointment now and discover
                the difference.
              </p>
              <Link to="/pricing">
                <button className="w-full bg-[#537f3c] my-4 py-2 rounded-xl text-white">
                  Book Now
                </button>
              </Link>
            </div>
          </article>
        ) : (
          <>
            <h1 className="text-2xl font-semibold">Your Appointments</h1>
            {appointments.map((data) => (
              <div
                key={data._id}
                className="flow-root rounded-lg w-full border bg-white border-gray-100 py-3 shadow-sm"
              >
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">
                      Selected Package Price
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {data.amount}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-2">{data.name}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Email</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {data.email}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Mobile</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {data.mobile}
                    </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Address</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                      {data.address}
                    </dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Selected Date</dt>
                    <dd className="text-gray-700 sm:col-span-2">{data.date}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Appointment;
