import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";

const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);

    const loadMoreHanlder = () => {
        setNextItems((prev) => prev + 3);
    };

    return (
        <section id="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap ">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-headingColor text-[2rem] font-[700]">
                            My recent projects
                        </h3>
                    </div>

                    <div className="flex gap-3">
                        <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                            All
                        </button>
                        <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                            Web Design
                        </button>
                        <button className="text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]">
                            UX Design
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {portfolios.slice(0, nextItems)?.map((portfolio, index) => (
                        <div
                            key={index}
                            data-aos="fade-zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            className="group max-w-full sm:w-[31.8%] lg:w-[32.2%] relative z-[1]"
                        >
                            <figure>
                                <img
                                    className="rounded-[8px]"
                                    src={portfolio.imgUrl}
                                    alt=""
                                />
                            </figure>

                            <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">
                                        See details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <div className="w-full h-full flex items-center justify-center">
                        {nextItems < portfolios.length &&
                            portfolios.length > 6 && (
                                <button
                                    onClick={loadMoreHanlder}
                                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
                                >
                                    Load more
                                </button>
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
