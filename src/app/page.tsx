"use client";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Emoji } from "./components/Emoji";
import {
    GovernmentPartnersAvatar,
    LogoAvatar,
} from "./components/GovernmentPartnerAvatar";
import { H3, H4 } from "./components";

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
                                    "linear-gradient( 248.88deg, rgba(0, 0, 0, 0) -0.05%, rgba(0, 0, 0, 0.4) 71.28% )",
                            }}
                        />
                    </div>
                    <div className="relative top-[20vw] w-[82vw] text-white">
                        <h2 className="text-4xl font-bold mb-8 w-[35vw]">
                            Bespoke Government Innovation Programs
                        </h2>
                        <p className="text-lg w-[35vw] mb-4">
                            Work with the early backers of Tesla, Skype & Baidu
                            to advance your countries innovation and development
                            goals
                        </p>
                        <p className="text-lg w-[35vw] mb-4">
                            Grow local startups that increase GDP, create new
                            jobs and attract foreign direct investment
                        </p>
                        <button className="bg-[#3865B6] rounded-[48px] px-8 py-4 mt-4">
                            Book a meeting
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-2 mb-4">
                    <p className="text-lg font-light mb-4">
                        Our Government Partners
                    </p>
                    <div className="flex flex-row mb-8">
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
                <section className="bg-[#CBDFFC] w-screen px-[15vw] py-[2vw] mb-4">
                    <div className="mb-4">
                        <div className="flex flex-col items-center mb-8">
                            <H3 text={"Why work with us?"} />
                            <p>
                                We are Venture Capitalists in the education
                                business.
                            </p>
                            <p>
                                Partner with us to learn how we identify, grow
                                and invest in high quality startups.
                            </p>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="flex flex-col items-center">
                                <H4 text={"GDP Growth"} />
                                <p>
                                    Startups contribute to the overall economic
                                    growth of a city or country by creating new
                                    products and services, attracting
                                    investment, and generating revenue. [copy
                                    needs to improve]
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <H4 text={"Job Creation"} />
                                <p>
                                    Create new employment opportunities, which
                                    can help to boost the local economy and
                                    reduce unemployment rates.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <H4 text={"Foreign Direct Investment"} />
                                <p>
                                    Create new employment opportunities, which
                                    can help to boost the local economy and
                                    reduce unemployment rates.
                                </p>
                            </div>
                            <div className="flex flex-col items-center">
                                <H4 text={"Bridge to Silicon Valley"} />
                                <p>
                                    Connect your local startups with the best
                                    mentors, VCs and AngelInvestors from the
                                    most innovative place in the world.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col items-center mt-2 mb-4">
                    <p className="text-lg font-light mb-4">
                        Our investment track record
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
                <section className="bg-[#133181] w-screen px-[15vw] py-[5vw] text-white">
                    <div className="flex flex-row justify-between">
                        <div>
                            <Image
                                src="/portfolioCompanies/bookmockupplaceholder.jpeg"
                                alt="Ecosystem Impact Casestudies"
                                height={100}
                                width={500}
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-bold mb-4 w-[35vw]">
                                Download our Ecosystem Impact Casestudies
                            </h2>
                            <p className="w-[35vw] text-[1rem] mb-4">
                                Get the actionable insights on how to grow your
                                entreprenuerial ecosystem - breakdown the growth
                                journey of Skype, Baidu and more...
                            </p>
                            <div className="grid grid-cols-2 w-[35vw] mb-4 text-[1rem] font-semibold">
                                <div className="col-span-1 mb-2">
                                    ✅ GDP contribution breakdown
                                </div>
                                <div className="col-span-1">
                                    ✅ Job creation metrics
                                </div>
                                <div className="col-span-1">
                                    ✅ Growth Hacking
                                </div>
                                <div className="col-span-1">
                                    ✅ Mafia effect breakdown
                                </div>
                            </div>
                            <label className="text-md">Email</label>
                            <input
                                type="email"
                                className="w-full h-[3.638] rounded-[0.661vw] border-[0.132vw] border-[#ababab] ps-[1vw] text-[1.058vw]"
                            ></input>
                            <div className="flex flex-row gap-2 mt-2">
                                <input type="checkbox"></input>
                                <label>
                                    Subscribe to the Draper University
                                    newsletter
                                </label>
                            </div>

                            <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                                Download
                            </button>
                        </div>
                    </div>
                </section>
                <section
                    className="bg-[#CBDFFC] w-screen px-[15vw] py-[2vw] mb-4"
                    id="how"
                >
                    <div className="mb-4">
                        <div className="flex flex-col items-center mb-8">
                            <H3 text={"Solutions"} />
                            <div className="w-full">
                                <div className="flex flex-row">
                                    <Image />
                                    <div>
                                        <H4 text={"More Entrepreneurs"} />
                                        <p></p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <Image />
                                    <div>
                                        <H4 text={"More Startups"} />
                                        <p></p>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <Image />
                                    <div>
                                        <H4 text={"More Unicorns"} />
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>corporate partners</div>
                    <div>
                        CTA schedule a call to learn more about our previous
                        work
                    </div>
                </section>
                <section id="what">
                    <div>how? from FOE to HT - what? TOFU</div>
                    <div>student quotes</div>
                    <div>bespoke programming - curriculum - what? BOFU</div>
                    <div>FAQ</div>
                </section>
            </div>
        </main>
    );
}

const govtLogos = [
    {
        src: "/govtLogos/jetro-logo.png",
        alt: "JETRO logo",
        width: 150,
        height: 35,
        country: "japan",
    },
    {
        src: "/govtLogos/KISED-logo.webp",
        alt: "KISED logo",
        width: 150,
        height: 35,
        country: "korea",
    },
    {
        src: "/govtLogos/ankara-development-agency-logo.jpeg",
        alt: "Ankara Development Agency logo",
        width: 150,
        height: 35,
        country: "turkey",
    },
    {
        src: "/govtLogos/SIDF_Logo.png",
        alt: "SIDF logo",
        width: 150,
        height: 35,
        country: "saudiarabia",
    },
    {
        src: "/govtLogos/DER-logo.png",
        alt: "DER logo",
        width: 150,
        height: 35,
        country: "sengal",
    },
    {
        src: "/govtLogos/asvda.png",
        alt: "ASVDA logo",
        width: 150,
        height: 35,
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
        src: "/portfolioCompanies/Coinbase-logo.png",
        alt: "Coinbase Logo",
        width: 102,
        height: 50,
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
        src: "/portfolioCompanies/skype.png",
        alt: "Skype Logo",
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
        src: "/portfolioCompanies/twitch.png",
        alt: "Twitch Logo",
        width: 102,
        height: 35,
    },
];
