import React from "react";
import CountUp from "react-countup";
import heroImg from "../../assets/images/hero.svg";

const Hero = () => {
    return (
        <section className="pt-0" id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
                    {/*========= HERO LEFT CONTENT START =========*/}
                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className="text-headingColor font-[600] text-[16px]"
                        >
                            Hello welcome
                        </h5>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                        >
                            I'm Anas Tulimat <br /> Software Developer
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            className="flex items-center gap-6 mt-7"
                        >
                            <a href="#contact">
                                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                    <i className="ri-mail-line"></i> Hire me
                                </button>
                            </a>

                            <a href="#portfolio">
                                <button className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor">
                                    See portfolio
                                </button>
                            </a>
                        </div>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1800"
                            className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
                        >
                            <span>
                                <i className="ri-apps-2-line"></i>
                            </span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Neque commodi at maiores quod, repudiandae
                            sunt vero dicta obcaecati nihil similique!
                        </p>
                    </div>
                    {/*========= HERO LEFT CONTENT END =========*/}
                </div>
            </div>
        </section>
    );
};

export default Hero;
