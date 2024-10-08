import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar-icon.png';
import featureImg from '../assets/images/feature-img.png';
import faqImg from '../assets/images/faq-img.png';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
// import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
    return (
        <>
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        <div>
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                                    We help patients live a Healthy, Longer Life.
                                </h1>
                                <p className="text__para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellendus itaque reprehenderit repellat error expedita assumenda dolor doloremque obcaecati non. Quos dolorum omnis eius earum fugit, blanditiis itaque molestiae magnam.</p>

                                <button className="btn">Request an Appointment</button>
                            </div>
                            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        30+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Years of Experience</p>
                                </div>

                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        15+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Clinic Locations</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                        100%
                                    </h2>
                                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-full" src={heroImg01} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                                <img src={heroImg03} alt="" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="text-[36px] font-bold text-headingColor text-center">Providing the best medical services</h2>
                        <p className="text__para text-center mt-2">
                            World-class care for everyone. Our health system offers unmatched, expert health care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
                        {[
                            { icon: icon01, title: "Find a Doctor", desc: "World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.", link: "/doctors" },
                            { icon: icon02, title: "Find Location", desc: "World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.", link: "/doctors" },
                            { icon: icon03, title: "Book Appointment", desc: "World-class care for everyone. Our health system offers unmatched, expert health care. From the lab to the clinic.", link: "/doctors" }
                        ].map((item, index) => (
                            <div className="py-[30px] px-5" key={index}>
                                <div className="flex items-center justify-center"><img src={item.icon} alt="" /></div>
                                <div className="mt-[30px]">
                                    <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">{item.title}</h2>
                                    <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                                        {item.desc}
                                    </p>
                                    <Link to={item.link} className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                        <BsArrowRight className="group-hover:text-white w-6 h-5" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <About />
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="text-[36px] font-bold text-center">Our Medical Services</h2>
                        <p className="text__para text-center">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                    </div>

                    <ServiceList />
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2">
                            <h2 className="text-[36px] font-bold text-headingColor">
                                Get virtual treatment <br /> anytime.
                            </h2>
                            <ul className="pl-4 mt-4">
                                <li className="text__para">
                                    1. Schedule the appointment directly.
                                </li>
                                <li className="text__para mt-2">
                                    2. Search for your physician here, and contact their office.
                                </li>
                                <li className="text__para mt-2">
                                    3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
                                </li>
                            </ul>
                            <Link to="/">
                                <button className="btn mt-4">Learn More</button>
                            </Link>
                        </div>

                        <div className="relative z-10 lg:w-1/2 flex justify-center mt-[50px] lg:mt-0">
                            <img src={featureImg} className="w-full lg:w-3/4" alt="" />

                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                                <div className="flex items-centr justify-between">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                            Tue, 24
                                        </p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                                            10:00 AM
                                        </p>
                                    </div>
                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                        <img src={videoIcon} alt="Video Icon" />
                                    </span>

                                </div>
                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                    Consulation
                                </div>

                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" />
                                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                                text-headingColor"> Wayne Collins</h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="text-[36px] font-bold text-headingColor text-center">Our Great Doctors</h2>
                        <p className="text__para text-center">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                    </div>


                    <DoctorList />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-1/2 hidden md:block"><img src={faqImg} alt="" /></div>

                        <div className="w-full md:w-1/2">
                            <h2 className="heading">
                                Most question by our beloved patients
                            </h2>
                            <FaqList />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="text-[36px] font-bold text-headingColor text-center">What Our Patient Say</h2>
                        <p className="text__para text-center">World-class care for everyone. Our health system offers unmatched, expert health care.</p>
                    </div>

                    <Testimonial />
                </div>
            </section> */}







        </>
    );
};

export default Home;


