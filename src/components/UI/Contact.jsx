import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="pb-16">
            <div className="container">
                <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">
                    Get in touch
                </h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77824590253!2d2.2646350603905847!3d48.85893843451437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1685455441811!5m2!1sfr!2sfr"
                            title="google-maps"
                            className="border-0 w-full h-full"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
                        <form action="" className="w-full">
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Enter yout name"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    placeholder="Enter yout email"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    type="text"
                                    rows={3}
                                    placeholder="Write your message"
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                />
                            </div>

                            <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
