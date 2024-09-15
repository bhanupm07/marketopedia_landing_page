import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <div className="footer-main">
        <h2 className="footer-heading">Join 500,000+ Subscribers</h2>
        <p>
          Get exclusive access to freebies and news. We don’t spam, rent or sell
          your email.{" "}
          <span className="text-[#a5a4a8] underline hover:text-white cursor-pointer">
            See our Privacy Policy
          </span>
          .
        </p>
        <form className="mt-5 flex items-center gap-4">
          <input
            type="email"
            required
            className="input-email placeholder-white"
            placeholder="Enter your email address here"
          />
          <div className="submit-div">
            <input type="submit" value="Subscribe" />
          </div>
        </form>
      </div> */}
      <div className="bg-[#192733] py-10 text-white">
        {/* Icons */}
        <div className="flex justify-center gap-10 footer-icons text-[#B6C6D5] text-3xl">
          <a href="#">
            <FaFacebookF className="icon" />
          </a>
          <a href="#">
            <FaInstagram className="icon" />
          </a>
          <a href="#">
            <FaYoutube className="icon" />
          </a>
          <a href="#">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="#">
            <FaGithub className="icon" />
          </a>
          <a href="#">
            <FaXTwitter className="icon" />
          </a>
          <a href="#">
            <BsFillSuitcaseLgFill className="icon" />
          </a>
        </div>
        <div className="flex flex-col items-center mt-16 gap-5">
          <div>
            <h5 className="text-3xl font-extrabold text-center">
              Marketopedia
            </h5>
            <p className="text-gray-400 text-sm">
              Copyright © 2024 Marketopedia, Inc.
            </p>
          </div>
          {/* <ul className="flex underline">
            <li className="border-r-[1px] border-white px-5">
              <Link to={""}>Legal Stuff</Link>
            </li>
            <li className="border-r-[1px] border-white px-5">
              <Link to={""}>Privacy Policy</Link>
            </li>
            <li className="border-r-[1px] border-white px-5">
              <Link to={""}>Security</Link>
            </li>
            <li className="border-r-[1px] border-white px-5">
              <Link to={""}>Website Accessibility</Link>
            </li>
            <li className="pl-5">
              <Link to={""}>Manage Cookies</Link>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
