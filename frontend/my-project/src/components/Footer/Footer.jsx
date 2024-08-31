import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
    {
        path: "https://www.youtube.com",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://www.github.com",
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://www.instagram.com",
        icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />
    },
];

const quickLinks01 = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about-us",
        display: "About Us",
    },
    {
        path: "/services",
        display: "Services",
    },
    {
        path: "/blog",
        display: "Blog",
    },
];

const quickLinks02 = [
    {
        path: "/find-a-doctor",
        display: "Find a Doctor",
    },
    {
        path: "/appointment",
        display: "Request an Appointment",
    },
    {
        path: "/location",
        display: "Find a Location",
    },
    {
        path: "/opinion",
        display: "Get an Opinion",
    },
];

const quickLinks03 = [
    {
        path: "/donate",
        display: "Donate",
    },
    {
        path: "/contact",
        display: "Contact Us"
    },
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="pt-10">
            <div className="container pb-16">
                <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="Logo" className="w-20 h-auto" />
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link
                                    to={link.path}
                                    key={index}
                                    className="w-9 h-9 border-solid border-[181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[18px] font-[600] text-textColor mb-4">Quick Links</h4>
                        <ul>
                            {quickLinks01.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[18px] font-[600] text-textColor mb-4">I Want To</h4>
                        <ul>
                            {quickLinks02.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[18px] font-[600] text-textColor mb-4">Support</h4>
                        <ul>
                            {quickLinks03.map((item, index) => (
                                <li key={index} className="mb-3">
                                    <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor hover:text-primaryColor">
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-gray-800 py-4">
                <div className="container text-center">
                    <p className="text-[16px] leading-7 font-[400] text-white">
                        Copyright © {year} developed by Shriyansh Agarwal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

