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

                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">
                                Follow me:
                            </span>
                            <span>
                                <a
                                    href="#"
                                    className="text-smallTextColor text-[18px] font-[600]"
                                >
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#"
                                    className="text-smallTextColor text-[18px] font-[600]"
                                >
                                    <i className="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#"
                                    className="text-smallTextColor text-[18px] font-[600]"
                                >
                                    <i className="ri-facebook-line"></i>
                                </a>
                            </span>
                            <span>
                                <a
                                    href="#"
                                    className="text-smallTextColor text-[18px] font-[600]"
                                >
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/*========= HERO LEFT CONTENT END =========*/}

                    {/*========= HERO IMAGE =========*/}
                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure className="flex items-center justify-center">
                            <img src={heroImg} alt="" />
                        </figure>
                    </div>
                    {/*========= HERO IMAGE END =========*/}

                    {/*========= HERO RIGHT CONTENT =========*/}
                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp
                                    start={0}
                                    end={6}
                                    duration={2}
                                    suffix="+"
                                />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Years of experience
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp
                                    start={0}
                                    end={100}
                                    duration={2}
                                    suffix="%"
                                />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Success rate
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp
                                    start={0}
                                    end={150}
                                    duration={2}
                                    suffix="+"
                                />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Happy clients
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp
                                    start={0}
                                    end={249}
                                    duration={2}
                                    suffix="+"
                                />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Projects Completed
                            </h4>
                        </div>
                    </div>
                    {/*========= HERO RIGHT CONTENT END =========*/}
                </div>
            </div>
        </section>
    );
};

export default Hero;
