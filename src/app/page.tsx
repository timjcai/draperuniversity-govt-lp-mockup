"use client";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Emoji } from "./components/Emoji";
import {
    GovernmentPartnersAvatar,
    HeadshotAndLogoAvatar,
    LogoAvatar,
} from "./components/GovernmentPartnerAvatar";
import { Card, H3, H4 } from "./components";
import { Icon } from "./components/Icon";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-inter text-sm lg:flex flex-col relative">
                <div
                    id="navbar"
                    className="absolute flex flex-row w-[99vw] h-[5.91vw] items-center justify-between gap-[5.046vw] z-1000 top-[3.175vw]"
                >
                    <div className="w-[12.948vw] h-[5.91vw] ms-[5.777vw]">
                        <Image
                            src="/DU_logo_white.svg"
                            width={197}
                            height={93}
                            alt="Draper University Logo"
                        />
                    </div>
                    <div className="flex flex-row items-center rounded-l-[32px] bg-white justify-between w-[75.44vw]">
                        <ul className="flex flex-row">
                            <li className="text-[1.058vw] px-8 py-5">
                                <a>Founder</a>
                            </li>
                            <li className="text-[1.058vw] px-8 py-5 ">
                                <a>Executive</a>
                            </li>
                            <li className="text-[1.058vw] px-8 py-5 ">
                                <a>Investors</a>
                            </li>
                            <li className="text-[1.058vw] px-8 py-5 ">
                                <a>Government</a>
                            </li>
                            <li className="text-[1.058vw] px-8 py-5 ">
                                <a>Contact Us</a>
                            </li>
                        </ul>
                        <div className="bg-[#3865B6] rounded-[48px] px-[1.262vw] py-[0.992vw]">
                            Book a Call
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center h-[50vw] relative -z-10 mb-4">
                    <div className="w-screen absolute">
                        <Image
                            src="/govt-hero.png"
                            width={1512}
                            height={745}
                            layout="responsive"
                            alt="Draper University Government Innovation"
                            objectFit="cover"
                            objectPosition="left bottom"
                            style={{
                                background:
                                    "linear-gradient( 248.88deg, rgba(0, 0, 0, 0) -0.05%, rgba(0, 0, 0, 1) 71.28% )",
                            }}
                        />
                    </div>
                    <div className="relative top-[20vw] w-[82vw] text-white">
                        <h1 className="text-6xl font-bold mb-8 w-[50vw]">
                            Bespoke Government Innovation Programs
                        </h1>
                        <p className="text-xl w-[50vw] mb-4">
                            DraperU has partnered with 20+ Government Agencies
                            to support the growth of their innovation and
                            entrepreneurship ecosystems.
                        </p>
                        <p className="text-xl w-[50vw] mb-4">
                            Advance your country's innovation and reach your
                            developental goals.
                        </p>
                        <button className="bg-[#3865B6] rounded-[48px] px-8 py-4 mt-4 text-lg font-bold">
                            Book a meeting
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4 mb-4">
                    <p className="text-lg font-light mb-4">
                        Our Government Partners
                    </p>
                    <div className="flex flex-row mb-12 w-[80vw]">
                        {govtLogos.map((items) => {
                            return (
                                <GovernmentPartnersAvatar
                                    key={items.alt}
                                    src={items.src}
                                    alt={items.alt}
                                    width={items.width}
                                    height={items.height}
                                    country={items.country}
                                />
                            );
                        })}
                    </div>
                </div>
                <section className="flex flex-col justify-center items-center min-h-[50vw] bg-[#201981] text-[#ffffff] w-screen">
                    <div className="mb-20">
                        <H3
                            text={
                                "We are Venture Capitalists in the education business"
                            }
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center px-[15vw] w-[100vw] mb-10">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[140px] font-bold text-[#255EFB] leading-[140px]">
                                $1B
                            </h1>
                            <p className="text-[32px] font-semibold">
                                Capital Raised
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[140px] font-bold text-[#255EFB] leading-[140px]">
                                3.7K
                            </h1>
                            <p className="text-[32px] font-semibold">Alumni</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[140px] font-bold text-[#255EFB] leading-[140px]">
                                10K+
                            </h1>
                            <p className="text-[32px] font-semibold">
                                Jobs Created
                            </p>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-center my-12">
                    <p className="text-lg font-light mb-4">
                        We are early stage backers of
                    </p>
                    <div className="flex flex-row mb-8">
                        {portfolioCompanies.map((items) => {
                            return (
                                <LogoAvatar
                                    key={items.alt}
                                    src={items.src}
                                    alt={items.alt}
                                    width={items.width}
                                    height={items.height}
                                />
                            );
                        })}
                    </div>
                </div>
                <section className="bg-[#CBDFFC] w-screen px-[15vw] py-[6vw] mb-4">
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex flex-col items-center mb-12">
                            <H3
                                text={
                                    "Importance of investing in your ecosystem"
                                }
                            />
                            <p className="text-lg text-center">
                                <br />
                                Partner with us to learn how to identify, grow
                                and invest in high quality startups.
                            </p>
                        </div>
                        <div className="grid grid-cols-4 gap-8 mb-12">
                            <Card>
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="growth" />
                                </div>
                                <H4 text={"GDP Growth"} />
                                <p className="text-lg">
                                    Startups contribute to the economic growth
                                    by creating new products and services,
                                    attracting investment, and generating
                                    revenue.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#EEE5FE] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="job" />
                                </div>
                                <H4 text={"Job Creation"} />
                                <p className="text-lg">
                                    As startups grow, they generate direct jobs
                                    and stimulate the broader economy by
                                    engaging with suppliers and service
                                    providers.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#C1D7CA] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="fdi" />
                                </div>
                                <H4 text={"Foreign Direct Investment"} />
                                <p className="text-lg">
                                    Building a pipeline of promising startups
                                    and scaleups with global impact can attract
                                    investment opportunity from investors
                                    seeking high-potential ventures.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#FFE6EF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="bridge" />
                                </div>
                                <H4 text={"Bridge to Silicon Valley"} />
                                <p className="text-lg">
                                    Connect your local startups with the best
                                    mentors, VCs and Angel Investors from the
                                    most innovative place in the world - Silicon
                                    Valley.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#EEE5FE] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="skill" />
                                </div>
                                <H4 text={"Skilled Technical Workforce"} />
                                <p className="text-lg">
                                    Create demand for technical skills. Attract
                                    global talent or grow internal talent into
                                    your local economy.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#FFE6EF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="research" />
                                </div>
                                <H4 text={"Innovation and Research"} />
                                <p className="text-lg">
                                    Create innovative technologies and
                                    businesses that address your countries
                                    development goals.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="diversification" />
                                </div>
                                <H4 text={"Economic Diversification"} />
                                <p className="text-lg">
                                    Supporting a diverse range of startups
                                    reduces the dependence on a single sector,
                                    making your economy more resilient to
                                    economic fluctuations.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#C1D7CA] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <Icon label="recognition" />
                                </div>
                                <H4 text={"International Recognition"} />
                                <p className="text-lg">
                                    The most innovative places in the world
                                    attract the attention of global investors,
                                    entrepreneurs and talent.
                                </p>
                            </Card>
                        </div>
                        <button className=" bg-[#3865B6] rounded-[48px] px-8 py-4 mt-4 text-lg font-bold">
                            Book a meeting
                        </button>
                    </div>
                </section>
                <div className="flex flex-col items-center my-12">
                    <p className="text-lg font-light mb-4">
                        The teams that have come from our programs
                    </p>
                    <div className="flex flex-row mb-8">
                        {alumniCompanies.map((items) => {
                            return (
                                <LogoAvatar
                                    key={items.alt}
                                    src={items.src}
                                    alt={items.alt}
                                    width={items.width}
                                    height={items.height}
                                />
                            );
                        })}
                    </div>
                </div>

                <section className="bg-[#133181] w-screen px-[15vw] py-[5vw] text-white">
                    <div className="flex flex-row justify-between my-12">
                        <div className="flex items-center">
                            <Image
                                src="/portfolioCompanies/bookmockupplaceholder.jpeg"
                                alt="Ecosystem Impact Casestudies"
                                height={100}
                                width={500}
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-bold mb-8 w-[35vw]">
                                Download our Ecosystem Impact Casestudies
                            </h2>
                            <p className="w-[35vw] text-[1rem] mb-8">
                                Get the actionable insights on how to grow your
                                entreprenuerial ecosystem - breakdown the growth
                                journey of some our biggest investments - Skype,
                                Baidu and more...
                            </p>
                            <div className="grid grid-cols-2 w-[35vw] mb-4 text-[1rem] font-semibold">
                                <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                    <Icon label={"check"} />
                                    <p>GDP contribution breakdown</p>
                                </div>
                                <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                    <Icon label={"check"} />
                                    <p>Job creation metrics</p>
                                </div>
                                <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                    <Icon label={"check"} />
                                    <p>Growth Hacking strategies</p>
                                </div>
                                <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                    <Icon label={"check"} />
                                    <p>Ripple effect breakdown</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                    <label className="text-md">Name</label>
                                    <input
                                        type="text"
                                        className=" w-full h-[3.638] rounded-[0.661vw] border-[0.132vw] border-[#ababab] ps-[1vw] text-[1.058vw]"
                                    ></input>
                                </div>
                                <div className="col-span-1">
                                    <label className="text-md col-span-2">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        className="col-span-2 w-full h-[3.638] rounded-[0.661vw] border-[0.132vw] border-[#ababab] ps-[1vw] text-[1.058vw]"
                                    ></input>
                                </div>
                                <div className="col-span-2">
                                    <label className="text-md ">Email</label>
                                    <input
                                        type="email"
                                        className="col-span-2 w-full h-[3.638] rounded-[0.661vw] border-[0.132vw] border-[#ababab] ps-[1vw] text-[1.058vw]"
                                    ></input>
                                </div>
                                <div className="flex flex-row gap-2 mt-2 col-span-2">
                                    <input type="checkbox"></input>
                                    <label>
                                        Subscribe to the Draper University
                                        newsletter
                                    </label>
                                </div>
                            </div>

                            <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                                Download
                            </button>
                        </div>
                    </div>
                </section>
                <section
                    className="bg-[#CBDFFC] w-screen px-[15vw] py-[2vw]"
                    id="how"
                >
                    <div className="mb-4">
                        <div className="flex flex-col items-center mb-4 mt-12">
                            <H3
                                text={
                                    "How do we partner with Government Agencies?"
                                }
                            />
                            <div className="grid grid-cols-3 gap-8 gap-y-28 mt-20 justify-center">
                                <div className="col-span-1 relative">
                                    <Image
                                        fill={true}
                                        src="/entrepreneurship101.png"
                                        alt="Entrepreneurship Fundamentals"
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Card>
                                        <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                            <Icon label="entreprenuer" />
                                        </div>
                                        <H4
                                            text={
                                                "Entrepreneurship Fundamentals"
                                            }
                                        />
                                        <p className="text-lg">
                                            Develop local or virtual programs
                                            focused on developing skills in
                                            entrepreneurship. Focused on young
                                            professionals & university students
                                            <br />
                                            <br />
                                            Equip young entrepreneurs with the
                                            skills to think bigger, problem
                                            solve and to build innovative
                                            ventures.
                                        </p>
                                        <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                                            Learn More
                                        </button>
                                    </Card>
                                </div>
                                <div className="col-span-2">
                                    <Card>
                                        <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                            <Icon label="startup" />
                                        </div>
                                        <H4 text={"Incubators"} />
                                        <p className="text-lg">
                                            Enrol your local startups and early
                                            stage founders in our Global
                                            Incubator programs. The experience
                                            is designed to expand the founders
                                            global network of mentor, peers and
                                            investors.
                                            <br />
                                            <br />
                                            Over the course of 5 weeks - we
                                            cover a variety of diverse topics:
                                            market validation, pitch readiness,
                                            collaborative problem-solving. It is
                                            structured to build endurance and
                                            enhance the capacity for
                                            entrepreneurship in each individual.
                                        </p>
                                        <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                                            Learn More
                                        </button>
                                    </Card>
                                </div>
                                <div className="col-span-1 relative">
                                    <Image
                                        fill={true}
                                        src="/incubator.png"
                                        alt="Incubators"
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "16px",
                                        }}
                                    />
                                </div>
                                <div className="col-span-1 relative">
                                    <Image
                                        fill={true}
                                        src="/acceleration.png"
                                        alt="Accelerators"
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "16px",
                                        }}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Card>
                                        <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                            <Icon label="scaleup" />
                                        </div>
                                        <H4 text={"Accelerators"} />

                                        <p className="text-lg">
                                            Create a Bespoke Accelerator Program
                                            tailored to a theme of interest in
                                            line with your develop goals.
                                            <br />
                                            <br />
                                            Leverage our expertise in scouting,
                                            our speaker network and our venture
                                            capital network to provide support
                                            to all types of scaleups.
                                        </p>
                                        <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                                            Learn More
                                        </button>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-center min-h-[45vw] w-auto bg-[#133181] text-[#ffffff] w-screen">
                    <div className="mb-20">
                        <H3 text={"A day in our programs"} />
                    </div>
                    <div className="flex flex-row justify-center gap-0 items-center px-[15vw] w-[100vw] mb-10">
                        <div className="flex flex-col justify-center items-end w-[20vw] pb-8 border-b-2">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                01
                            </h1>
                            <p className="text-lg">Guest Speaker Session</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]  pb-8 border-b-2">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                02
                            </h1>
                            <p className="text-lg">Problem Solving Challenge</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]  pb-8 border-b-2">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                03
                            </h1>
                            <p className="text-lg">1:1 Mentoring</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]  pb-8 border-b-2">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                04
                            </h1>
                            <p className="text-lg">Pitch Practice</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center px-[15vw] w-[100vw] mb-10">
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">9AM</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">11AM</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">1PM</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">3PM</p>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-center mt-2 mb-4">
                    <p className="text-lg font-light my-12">
                        Past speakers include
                    </p>
                    <div className="flex flex-row mb-8">
                        {pastSpeakers.map((items) => {
                            return (
                                <HeadshotAndLogoAvatar
                                    headshot={items.headshot}
                                    logo={items.logo}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col items-center mt-2 mb-4">
                    <p className="text-lg font-light mb-4">
                        and mentoring from experts in these industries
                    </p>
                    <div className="flex flex-row mb-8 justify-center">
                        <Card>
                            <div className="flex flex-col items-center justify-center w-[10vw] text-center">
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative text-xl">
                                    <Icon label="ai" />
                                </div>
                                <H4 text={"Artiicial Intelligence"} />
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col items-center justify-center w-[10vw] text-center">
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative text-xl">
                                    <Icon label="crypto" />
                                </div>
                                <H4 text={"Blockchain Web3.0"} />
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col items-center justify-center w-[10vw] text-center">
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative text-xl">
                                    <Icon label="gaming" />
                                </div>
                                <H4 text={"Gaming"} />
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col items-center justify-center w-[10vw] text-center">
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative text-xl">
                                    <Icon label="deeptech" />
                                </div>
                                <H4 text={"DeepTech"} />
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col items-center justify-center w-[10vw] text-center">
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative text-xl">
                                    <Icon label="healthtech" />
                                </div>
                                <H4 text={"HealthTech"} />
                            </div>
                        </Card>
                        <Card>
                            <div className="flex flex-col items-center justify-center w-[10vw] text-center">
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative text-xl">
                                    <Icon label="fintech" />
                                </div>
                                <H4 text={"FinTech"} />
                            </div>
                        </Card>

                        {/* {govtLogos.map((items) => {
                            return (
                                <LogoAvatar
                                    key={items.alt}
                                    src={items.src}
                                    alt={items.alt}
                                    width={items.width}
                                    height={items.height}
                                />
                            );
                        })} */}
                    </div>
                </div>
                <section className="bg-[#133181] w-screen px-[15vw] py-[5vw] text-white">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-bold mb-4 w-[35vw]">
                                Let's grow your Startup ecosystem together
                            </h2>
                            <p className="w-[35vw] text-[1rem] mb-4">
                                Schedule a strategy call today
                            </p>
                            {/* <div className="grid grid-cols-2 w-[35vw] mb-4 text-[1rem] font-semibold">
                                <div className="col-span-1 mb-2">
                                    ✅ GDP contribution breakdown
                                </div>
                                <div className="col-span-1">
                                    ✅ Job creation metrics
                                </div>
                                <div className="col-span-1">
                                    ✅ Growth Hacking strategies
                                </div>
                                <div className="col-span-1">
                                    ✅ Ripple effect breakdown
                                </div>
                            </div> */}
                            <label className="text-md">Email</label>
                            <input
                                type="email"
                                className="w-full h-[3.638] rounded-[0.661vw] border-[0.132vw] border-[#ababab] ps-[1vw] text-[1.058vw]"
                            ></input>
                            {/* <div className="flex flex-row gap-2 mt-2">
                                <input type="checkbox"></input>
                                <label>
                                    Subscribe to the Draper University
                                    newsletter
                                </label>
                            </div> */}

                            <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                                Book a meeting
                            </button>
                        </div>
                        <div>
                            <Image
                                src="/portfolioCompanies/bookmockupplaceholder.jpeg"
                                alt="Ecosystem Impact Casestudies"
                                height={100}
                                width={500}
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </section>
                <section id="what"></section>
                <div className="flex flex-col justify-center items-center my-12">
                    <div className="flex justify-start w-full">
                        <h3 className="text-[36px] leading-[36px] mb-4">
                            FAQs
                        </h3>
                    </div>
                    <div className="w-[65.608vw]">
                        <div className="bg-[#d1e4fd] rounded-t-[20px] h-[50px] w-full mb-4 flex justify-start items-center px-6">
                            + What is Draper University?
                        </div>
                        <div className="bg-[#d1e4fd] rounded-t-[20px] h-[50px] w-full mb-4 flex justify-start items-center px-6">
                            + What value will we get partnering with Draper
                            University?
                        </div>
                        <div className="bg-[#d1e4fd] rounded-t-[20px] h-[50px] w-full mb-4 flex justify-start items-center px-6">
                            + What are the requirements for startups/individuals
                            joining the programs at Draper University?
                        </div>
                        <div className="bg-[#d1e4fd] rounded-t-[20px] h-[50px] w-full mb-4 flex justify-start items-center px-6">
                            + Are there Co-Funding Opportunities?
                        </div>
                        <div className="bg-[#d1e4fd] rounded-t-[20px] h-[50px] w-full mb-4 flex justify-start items-center px-6">
                            + Are there custom programs that can be designed for
                            specific economic/technological needs of the
                            country?
                        </div>
                        <div className="bg-[#d1e4fd] rounded-t-[20px] h-[50px] w-full mb-4 flex justify-start items-center px-6">
                            + How is your programming delivered?
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const govtLogos = [
    {
        src: "/govtLogos/jetro-logo.png",
        alt: "JETRO logo",
        width: 250,
        height: 50,
        country: "japan",
    },
    {
        src: "/govtLogos/KISED-logo.webp",
        alt: "KISED logo",
        width: 250,
        height: 50,
        country: "korea",
    },
    {
        src: "/govtLogos/ankara-development-agency-logo.jpeg",
        alt: "Ankara Development Agency logo",
        width: 250,
        height: 50,
        country: "turkey",
    },
    {
        src: "/govtLogos/SIDF_Logo.png",
        alt: "SIDF logo",
        width: 250,
        height: 50,
        country: "saudiarabia",
    },
    {
        src: "/govtLogos/DER-logo.png",
        alt: "DER logo",
        width: 250,
        height: 50,
        country: "sengal",
    },
    {
        src: "/govtLogos/asvda.png",
        alt: "ASVDA logo",
        width: 250,
        height: 50,
        country: "taiwan",
    },
];

const portfolioCompanies = [
    {
        src: "/portfolioCompanies/baidu.png",
        alt: "Baidu Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/skype.png",
        alt: "Skype Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/Coinbase-logo.png",
        alt: "Coinbase Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/tesla.png",
        alt: "Tesla Logo",
        width: 102,
        height: 35,
    },
    {
        src: "/portfolioCompanies/DocuSign-Logo.png",
        alt: "Docusign Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/hotmail.png",
        alt: "Hotmail Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/Robinhood-logo.png",
        alt: "Robinhood Logo",
        width: 102,
        height: 50,
    },

    {
        src: "/portfolioCompanies/twitch.png",
        alt: "Twitch Logo",
        width: 102,
        height: 35,
    },
];

const pastSpeakers = [
    {
        headshot: {
            src: "/pastSpeakers/musk.png",
            alt: "Elon Musk",
            width: 150,
            height: 50,
        },
        logo: {
            src: "/pastSpeakers/tesla.avif",
            alt: "Tesla Logo",
            width: 50,
            height: 50,
        },
    },
    {
        headshot: {
            src: "/pastSpeakers/andreessen.png",
            alt: "Mark Andreessen",
            width: 150,
            height: 50,
        },
        logo: {
            src: "/pastSpeakers/a16z.png",
            alt: "a16z Logo",
            width: 50,
            height: 50,
        },
    },
    {
        headshot: {
            src: "/pastSpeakers/ravikant.png",
            alt: "Naval Ravikant",
            width: 150,
            height: 50,
        },
        logo: {
            src: "/pastSpeakers/angellist.png",
            alt: "Angel List Logo",
            width: 50,
            height: 50,
        },
    },
    {
        headshot: {
            src: "/pastSpeakers/phan.png",
            alt: "Michelle Phan",
            width: 150,
            height: 50,
        },
        logo: {
            src: "/pastSpeakers/ipsy.png",
            alt: "Ipsy Logo",
            width: 50,
            height: 50,
        },
    },
    {
        headshot: {
            src: "/pastSpeakers/hyman.png",
            alt: "Jennifer Hyman",
            width: 150,
            height: 50,
        },
        logo: {
            src: "/pastSpeakers/rtr.png",
            alt: "Run The Runway Logo",
            width: 50,
            height: 50,
        },
    },
];

const alumniCompanies = [
    {
        src: "/portfolioCompanies/helium.png",
        alt: "Helium Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/henry.png",
        alt: "HENRY Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/lemon.png",
        alt: "Lemon Cash Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/ring.png",
        alt: "Ring Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/nVision.png",
        alt: "nVision Logo",
        width: 102,
        height: 35,
    },
    {
        src: "/portfolioCompanies/yestheory.png",
        alt: "YES Theory Logo",
        width: 102,
        height: 50,
    },
];
