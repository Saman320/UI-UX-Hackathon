import Image from "next/image";

const FeaturedPosts = () => {
    return (
        <section className="mx-auto w-[1440px] h-[1044px] gap-[80px] bg-[#FFFFFF] py-12 px-6 md:px-10 lg:px-20">

            <div className="mx-auto w-[1050px] h-[1044px] gap-[80px] ">
                <div className="mx-auto w-[692px] h-[134px] flex flex-col items-center justify-center text-center">
                    <h6 className="w-[114px] h-[24px] font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px] text-center text-[#23A6F0]">
                        Practice Advice
                    </h6>
                    <h2 className="w-[309px] h-[50px] font-montserrat text-[40px] font-bold leading-[50px] tracking-[0.2px] text-center text-[#252B42]">
                        Featured Posts
                    </h2>
                    <p className="w-[692px] font-montserrat text-[14px] font-normal leading-[20px] tracking-[0.2px] text-center text-[#737373]">
                        Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                <div className="w-[1045px] h-[606px] gap-[30px] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:px-20 mt-[80px]">
                <div className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
                        <div className="relative">
                            <Image
                                src="/images/Feature1.png"
                                alt="Post 1"
                                layout="responsive"
                                width={400}
                                height={250}
                                className="object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                                NEW
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
                                <span className="text-[#8EC2F2]">Google</span>
                                <span>Trending</span>
                                <span>New</span>
                            </div>
                            <h3 className=" font-montserrat text-xl font-bold text-[#252B42] mb-2">
                                Loudest à la Madison #1 (L&apos;Integrál)
                            </h3>
                            <p className="text-sm text-[#737373] mb-4">
                                We focus on ergonomics and meeting you where you work. It&apos;s
                                only a keystroke away.
                            </p>
                            <div className="flex items-center justify-between text-xs text-[#737373]">
                                <div className="flex items-center space-x-2">
                                    <img src="/images/calendar.png" className="h-4" />
                                    <span>22 April 2021</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="/images/comment.png" className="h-4" />
                                    <span>10 comments</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a
                                    href="/"
                                    className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
                                >
                                    <p className="font-montserrat">Learn More</p>
                                    <img src="/images/next.png" className="ml-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
                        <div className="relative">
                            <Image
                                src="/images/Feature2.png"
                                alt="Post 1"
                                layout="responsive"
                                width={400}
                                height={250}
                                className="object-cover"
                            />
                            <span className="absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                                NEW
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
                                <span className="text-[#8EC2F2]">Google</span>
                                <span>Trending</span>
                                <span>New</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#252B42] mb-2">
                                Loudest à la Madison #1 (L&apos;Integrál)
                            </h3>
                            <p className="text-sm text-[#737373] mb-4">
                                We focus on ergonomics and meeting you where you work. It&apos;s
                                only a keystroke away.
                            </p>
                            <div className="flex items-center justify-between text-xs text-[#737373]">
                                <div className="flex items-center space-x-2">
                                    <img src="/images/calendar.png" className="h-4" />
                                    <span>22 April 2021</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="/images/comment.png" className="h-4" />
                                    <span>10 comments</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a
                                    href="/"
                                    className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
                                >
                                    <p>Learn More</p>
                                    <img src="/images/next.png" className="ml-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-[#E5E5E5] overflow-hidden shadow-sm">
                        <div className="relative">
                            <Image
                                src="/images/Feature3.png"
                                alt="Post 1"
                                layout="responsive"
                                width={400}
                                height={250}
                                className="object-cover"
                            />
                            <span className="font-montserrat absolute top-3 left-3 bg-[#E74040] text-white text-sm font-bold px-3 py-1 rounded">
                                NEW
                            </span>
                        </div>
                        <div className="p-6">
                            <div className="flex items-center text-xs text-[#737373] space-x-2 mb-3">
                                <span className="text-[#8EC2F2] font-montserrat">Google</span>
                                <span>Trending</span>
                                <span>New</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#252B42] mb-2">
                                Loudest à la Madison #1 (L&apos;Integrál)
                            </h3>
                            <p className="text-sm text-[#737373] mb-4">
                                We focus on ergonomics and meeting you where you work. It&apos;s
                                only a keystroke away.
                            </p>
                            <div className="flex items-center justify-between text-xs text-[#737373]">
                                <div className="flex items-center space-x-2">
                                    <img src="/images/calendar.png" className="h-4" />
                                    <span>22 April 2021</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <img src="/images/comment.png" className="h-4" />
                                    <span>10 comments</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <a
                                    href="/"
                                    className="text-[#4C9EEF] text-sm font-bold hover:underline flex items-center"
                                >
                                    <p>Learn More</p>
                                    <img src="/images/next.png" className="ml-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;