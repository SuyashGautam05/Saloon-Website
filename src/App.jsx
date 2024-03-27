import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import PaymentPage from "./pages/PaymentPage";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Success from "./pages/Success";
import Gallery from "./pages/Gallery";
import Navbarr from "./components/Navbarr";
import Hairs from "./pages/Hairs";
import OtherPhotos from "./pages/OtherPhotos";
import Failure from "./pages/Failure";
import ScrollToTop from "./components/ScrollToTop";
import OTPinput from "./components/OTPinput";
import PasswordChange from "./pages/PasswordChange";

import Allservices from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="w-full z-20 bg-transparent fixed">
        <Navbarr />
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/gallery-hairs" element={<Hairs />} />
          <Route exact path="/other-photos" element={<OtherPhotos />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgetpass" element={<OTPinput />} />
          <Route exact path="/changepassword" element={<PasswordChange />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/payment/:id" element={<PaymentPage />} />
          <Route exact path="/appointment" element={<Appointment />} />

          
          <Route exact path="/dashboard" element={<Allservices />} />

          <Route
            exact
            path="/success/:razorpayPaymentId"
            element={<Success />}
          />
          <Route exact path="/failed" element={<Failure />} />

          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
