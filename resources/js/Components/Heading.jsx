const Heading = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:px-6 ">
                <div className="md:w-[50%] flex flex-col justify-center md:p-[48px] py-8 md:py-0 text-center md:text-start">
                    <p className="md:mb-5 lg:mb-6 py-2 px-6 md:bg-gradient-to-t hover:from-blue-100 to-white rounded-md font-semibold">
                        Top Brand Euro Global
                    </p>
                    <div className="font-clash flex flex-col">
                        <h1 className="flex flex-col leading-8 md:leading-6 md:gap-2 lg:gap-4 ">
                            <span className="font-semibold text-[46px] md:text-[52px] lg:text-[68px]">
                                ECOMATE
                            </span>
                            <span className="font-medium md:text-[28px] lg:text-[38px]">
                                COLLECTIVE
                            </span>
                        </h1>
                    </div>
                    <div>
                        <p className="text-sm md:text-base md:py-2 lg:md-4">
                            Socialecology: Unite, Socialize, Protect
                        </p>
                        <div>
                            <button className="mt-2 md:mt-0 border-solid border-2 border-gray-300 md:border-gray-100 py-1 px-6 hover:bg-black text-black hover:text-white rounded-full font-medium text-sm">
                                See All
                            </button>
                            <button className="mt-2 md:mt-0 border-solid border-2 border-gray-300 md:border-gray-100 py-1 px-6 hover:bg-black text-black hover:text-white rounded-full font-medium text-sm">
                                See All
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:w-[50%] p-6 md:p-[48px]">
                    <img src="/images/header.png" alt="" />
                </div>
            </div>
            <div>
                <div>
                    <p className="text-center font-bold md:text-[18px] lg:text-[28px]">
                        The best way to recomemmend{" "}
                        <span className=" bg-gradient-to-t from-primary to-red-500 bg-clip-text text-transparent">
                            products and earn money
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Heading;
