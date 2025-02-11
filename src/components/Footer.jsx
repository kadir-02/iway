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
              <li>Titan</li>
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
              <li>Titan Encircle</li>
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

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl m-2 text-sky-400">
              I<span className="text-white">Way</span>
            </h1>
            <p>© 2025 I Way+. All Rights Reserved.</p>
          </div>
          {/* Social Media Section */}
          <div className="flex justify-center gap-2 mt-8">
            <div>
              <p> REACH US AT</p>
              <p>cs@eyewayplus.com</p>
              <p>1800-266-0143</p>
            </div>
            <FaTwitter className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer " />
            <FaInstagram className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer " />
            <FaFacebook className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer " />
            <FaPinterest className="text-4xl bg-white text-[#000042] rounded-full hover:bg-[#35BBD1] p-2 cursor-pointer " />
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="bg-black w-full text-white text-center py-4 text-sm">
        <p>Designed & developed by Kadir</p>
      </div>

      <a
        href="#home"
        className="fixed bottom-5 right-5 text-white text-xl bg-red-700 flex items-center justify-center p-2 rounded-full "
      >
        <BiArrowToTop />
      </a>
    </div>
  );
};

export default Footer;
