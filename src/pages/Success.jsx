/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { Link, useParams } from "react-router-dom";

const Success = () => {
  const { razorpayPaymentId } = useParams();
  const [status, setStatus] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://salon-server-jupe.onrender.com/status/appointment/${razorpayPaymentId}`
        );
        const appointmentData = response.data.result;
          console.log(appointmentData)
        // Check if all required properties have values
        const isValidData =
          appointmentData &&
          appointmentData.name &&
          appointmentData.date &&
          appointmentData.amount &&
          appointmentData.address && appointmentData.mobile &&
          appointmentData.razorpay_payment_id;

        if (isValidData) {
          setStatus(appointmentData);

          // Set the flag to true once data is fetched successfully
          setIsDataFetched(true);
        } else {
          console.error("Invalid or missing data in the API response.");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [razorpayPaymentId]);

  useEffect(() => {
    // Check if data is fetched before calling sendEmail
    if (isDataFetched) {
      sendEmail();
    }
  }, [isDataFetched]);

  const sendEmail = () => {
    const templateParams = {
      from_name: status.name,
      date: status.date,
      address: status.address,
      amount: status.amount,
      transId: status.razorpay_payment_id,
      mobile: status.mobile,
    };

    console.log("Sending email with params:", templateParams);

    emailjs
      .send(
        "service_x6dxgh2",
        "template_4mth6fb",
        templateParams,
        "ZO08mjNileJXhBeMT"
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="pt-24 flex justify-center items-center">
      <section className="rounded-3xl bg-zinc-100 shadow-2xl">
        <div className="p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#537f3c]">
            Your appointment has been Sheduled
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Thanks for Using our Service, we're getting it ready!
          </h2>
          <div className="bg-white rounded-xl shadow-lg my-4 p-4 ">
            <p>
              Amount You Paid :{" "}
              <span className="font-semibold">Rs. {status.amount}</span>{" "}
            </p>
            <p>
              Transaction ID :{" "}
              <span className="font-semibold">
                {" "}
                {status.razorpay_payment_id}
              </span>
            </p>
            <p>
              Selected Date :{" "}
              <span className="font-semibold">{status.date}</span>
            </p>
            <p className="my-4">
              For any query, reach us{" "}
              <Link to="/contact">
                <span className="text-green-500 font-bold underline">
                  {" "}
                  Here
                </span>
              </Link>
            </p>
          </div>
          <Link
            className="mt-8 inline-block w-full rounded-xl bg-[#537f3c] py-4 text-sm font-bold text-white shadow-xl"
            to="/appointment"
          >
            Go to Appointment Section
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Success;
