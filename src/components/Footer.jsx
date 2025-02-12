import { BiArrowToTop } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Promotional Banner */}
      <div className="bg-[#F2925D] w-full h-10 text-sm flex items-center justify-center">
        10% Off All Sunglasses | Shop Now{" "}
      </div>

      {/* Footer Content */}
      <div className="bg-black w-full text-white py-10 px-5 sm:px-20">
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20">
          {/* Shop Section */}
          <div className="w-full sm:w-1/3 py-5">
            <h1 className="font-bold text-sm my-2 uppercase text-[#35BBD1]">
              Shop
            </h1>
            <ul className="text-sm">
              <li>Eyeglasses</li>
              <li>Sunglasses</li>
              <li>Accessories</li>
              <li>Men</li>
              <li>Women</li>
              <li>Fastrack</li>
              <li>Rimless</li>
              <li>I-TRENDS</li>
            </ul>
          </div>

          {/* Account Section */}
          <div className="w-full sm:w-1/3 py-5">
            <h1 className="font-bold text-sm my-2 uppercase text-[#35BBD1]">
              Account
            </h1>
            <ul className="text-sm">
              <li>Our Policies</li>
              <li>My Account</li>
              <li>Create an Account</li>
              <li>Tata Neu Pass</li>
              <li>I-TRENDS</li>
            </ul>
          </div>

          {/* Learn Section */}
          <div className="w-full sm:w-1/3 py-5">
            <h1 className="font-bold text-sm my-2 uppercase text-[#35BBD1]">
              USEFUL LINKS
            </h1>
            <ul className="text-sm">
              <li>Store Locations</li>
              <li>Business Partner</li>
              <li>EyeX Compatible App</li>
              <li>Hearing Aids</li>
              <li>Exercise Your Rights</li>
              <li>Glossary</li>
            </ul>
          </div>

          {/* Brick & Mortar Section */}
          <div className="w-full sm:w-1/3 py-5">
            <h1 className="font-bold text-sm my-2 uppercase text-[#35BBD1]">
              Our Store
            </h1>
            <ul className="text-sm">
              <li>Pune, TX 78741</li>
              <li>Mon-Sat 9AM-6:30PM</li>
            </ul>
          </div>
        </div>

        {/* Map and Additional Sections */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-20 mt-10">
          <div className="w-full sm:w-1/2 py-5">
            <h1 className="font-bold text-sm my-2 uppercase text-[#35BBD1]">
              Find Us
            </h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120995.5087761034!2d73.82963146813043!3d18.614137275786884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c700594eff49%3A0x4978255b63aab10e!2sShop%20No%203%2C%20Ground%20floor%2C%20Sr.%20No%20296%2C%20Porwal%20Rd%2C%20near%20DY%20Patil%20University%20Road%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411047!3m2!1d18.6141552!2d73.9120332!5e0!3m2!1sen!2sin!4v1739340120971!5m2!1sen!2sin"
              width="100%"
              height="350"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              title="Store Location"
            ></iframe>
          </div>

          <div className="w-full sm:w-1/2 py-15 flex flex-col items-start justify-between">
            <div className="w-full sm:w-1/2 mb-5">
              <img
                src="itrends.png"
                alt="I Trends Logo"
                className="w-1/2 object-contain"
              />
              <p>© 2025 i-trends+. All Rights Reserved.</p>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col justify-center gap-2 mt-8">
              <div>
                <p>REACH US AT</p>
                <p>cs@eyewayplus.com</p>
                <p>8421830051</p>
              </div>
              <div className="flex gap-2 mt-3">
                <FaTwitter
                  className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer"
                  aria-label="Twitter"
                />
                <FaInstagram
                  className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer"
                  aria-label="Instagram"
                />
                <FaFacebook
                  className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer"
                  aria-label="Facebook"
                />
                <FaPinterest
                  className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer"
                  aria-label="Pinterest"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="bg-black w-full text-white text-center py-4 text-sm">
        <p>Designed & developed by Kadir</p>
      </div>

      {/* Scroll to Top Button */}
      <a
        href="#home"
        className="fixed bottom-5 right-5 text-white text-xl bg-red-700 flex items-center justify-center p-2 rounded-full"
      >
        <BiArrowToTop />
      </a>
    </div>
  );
};

export default Footer;
