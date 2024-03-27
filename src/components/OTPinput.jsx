import { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import PasswordChange from "../pages/PasswordChange";
import toast from "react-hot-toast";

const OTPinput = () => {
  const [OTP, setOTP] = useState("");
  const [otpsended, setSended] = useState("");
  const [email, setEmail] = useState("");
  const [otpdiv, setOtpdiv] = useState("hidden");
  const [emaildiv, setEmaildiv] = useState("");
  const [isVerified, setVerified] = useState(false);

  const forgetpass = async () => {
    try {
      const res = await axios.post("https://salon-server-jupe.onrender.com/auth/forgetpass", {
        email,
      });
      if (res.data && res.data.otp) {
        setSended(res.data.otp);
        setEmaildiv("hidden");
        setOtpdiv("");
        sendEmail(res.data.otp);
      } else {
        console.log("Error sending OTP:", res.data.error);
      }
    } catch (error) {
      toast.error("User not registered");
    }
  };

  const checkCode = () => {
    if (OTP === otpsended) {
      setVerified(true);
    } else {
      console.log("Wrong OTP");
    }
  };

  const sendEmail = (otp) => {
    const templateParams = {
      to_email: email,
      from_code: otp,
    };

    emailjs
      .send(
        "service_x6dxgh2",
        "template_ulvt37k",
        templateParams,
        "ZO08mjNileJXhBeMT"
      )
      
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      {isVerified ? (
        <PasswordChange email={email} />
      ) : (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
            <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
              <div className="mx-auto flex w-full max-w-md flex-col">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <div className="font-semibold text-3xl">
                    <p>Email Verification</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col justify-center ">
                    <section className={`bg-white dark:bg-gray-900 ${emaildiv}`}>
                      <div className="flex flex-row text-sm text-center justify-center font-medium text-gray-400">
                        <p>Provide your email to verify your registered account</p>
                      </div>
                      <div className="max-w-3xl px-6 mx-auto text-center">
                        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-col gap-4 sm:justify-center sm:-mx-2">
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            placeholder="Email Address"
                          />
                          <button
                            onClick={forgetpass}
                            className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#537f3c] rounded-md sm:mx-2  focus:outline-none "
                          >
                            Send Verification Code
                          </button>
                        </div>
                      </div>
                    </section>
                    <section className={`bg-white dark:bg-gray-900 ${otpdiv}`}>
                      <div className="flex flex-row text-sm text-center justify-center font-medium text-gray-400">
                        <p>Enter the verification code sent to your email.</p>
                      </div>
                      <div className="max-w-3xl px-6 mx-auto text-center">
                        <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-col gap-4 sm:justify-center sm:-mx-2">
                          <input
                            value={OTP}
                            onChange={(e) => setOTP(e.target.value)}
                            id="email"
                            type="text"
                            className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                            placeholder="Verification Code"
                          />
                          <button
                            onClick={checkCode}
                            className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#537f3c] rounded-md sm:mx-2  focus:outline-none "
                          >
                            Verify Code
                          </button>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OTPinput;
