import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    Card,
    CorporatePartnersAvatar,
    GovernmentPartnersAvatar,
    H3,
    H4,
    HeadshotAndLogoAvatar,
    Icon,
    LogoAvatar,
} from "../components";

const partnerLogos = [
    {
        src: "/partnerCompanies/ey.png",
        alt: "ey",
        width: 100,
        height: 40,
        country: "japan",
    },
    {
        src: "/partnerCompanies/INGsquare.png",
        alt: "ing",
        width: 100,
        height: 40,
        country: "korea",
    },
    {
        src: "/partnerCompanies/mitsubishisquare.png",
        alt: "Ankara Development Agency logo",
        width: 100,
        height: 40,
        country: "turkey",
    },
    {
        src: "/partnerCompanies/orangesquare.png",
        alt: "SIDF logo",
        width: 100,
        height: 40,
        country: "saudiarabia",
    },
    {
        src: "/partnerCompanies/turkishairlines.png",
        alt: "DER logo",
        width: 100,
        height: 40,
        country: "sengal",
    },
    {
        src: "/partnerCompanies/UNDPsquare.png",
        alt: "ASVDA logo",
        width: 100,
        height: 40,
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
            src: "/pastSpeakersEnt/elon.png",
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
            src: "/pastSpeakersEnt/andrewchen.png",
            alt: "Andrew Chen",
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
            src: "/pastSpeakersEnt/jenniferfonstad.png",
            alt: "Jennifer Fonstad",
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
            src: "/pastSpeakersEnt/johnzimmer.png",
            alt: "John Zimmer",
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
            src: "/pastSpeakersEnt/michael seibel.png",
            alt: "Michael Seibel",
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
    {
        headshot: {
            src: "/pastSpeakersEnt/chingyuhu.png",
            alt: "Ching Yu Hu",
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
    {
        headshot: {
            src: "/pastSpeakersEnt/nateblecharzyk.png",
            alt: "Nate Blecharzyk",
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
    {
        headshot: {
            src: "/pastSpeakersEnt/naval.png",
            alt: "Naval Ravikant",
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
        src: "/portfolioCompanies/hydra.png",
        alt: "Hydra Energy Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/lemonsquare.png",
        alt: "Lemon Cash Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/1047.png",
        alt: "1047 Games Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/nvisionsquare.png",
        alt: "nVision Logo",
        width: 102,
        height: 35,
    },
    {
        src: "/portfolioCompanies/archform.png",
        alt: "Arch Form Logo",
        width: 102,
        height: 50,
    },
    {
        src: "/portfolioCompanies/heliumsquare.png",
        alt: "Helium Health Logo",
        width: 102,
        height: 50,
    },
];

const page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-inter text-sm lg:flex flex-col relative">
                <div
                    id="navbar"
                    className="absolute flex flex-row w-[99vw] h-[5.91vh] items-center justify-between gap-[5.046vw] z-1000 top-[3.175vw]"
                >
                    <div className="w-[12.948vw] h-[5.91vh] ms-[5.777vw]">
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
                                <Link href="/embed">Founder</Link>
                            </li>
                            <li className="text-[1.058vw] px-8 py-5 ">
                                <Link href="/corporate-accelerator">
                                    Executive
                                </Link>
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
                <div className="flex flex-col items-center h-[60vh] relative -z-10 mb-4">
                    <div className="w-screen h-full">
                        <Image
                            src="/govt-hero.png"
                            fill={true}
                            // width={1512}
                            // height={745}
                            // layout="responsive"
                            alt="Draper University Government Innovation"
                            objectFit="cover"
                            objectPosition="left bottom"
                            style={{
                                minHeight: "50vh",
                                maxHeight: "70vh",
                                background:
                                    "linear-gradient( 248.88deg, rgba(0, 0, 0, 0) -0.05%, rgba(0, 0, 0, 1) 71.28% )",
                            }}
                        />
                    </div>
                    <div className="flex flex-col xl:items-start items-center absolute top-[19vh] w-[82vw] text-white">
                        <h1 className="xl:text-xl font-regular xl:w-[50vw] w-full text-lg xl:text-start text-center">
                            Corporate Accelerator Patnerships
                        </h1>
                        <h2 className="xl:text-6xl font-bold mb-8 xl:w-[50vw] w-full text-4xl xl:text-start text-center">
                            Discover, Mentor and Grow the World's Best Startups.
                        </h2>
                        <p className="xl:text-xl w-[50vw] mb-4 xl:w-[50vw] w-full text-xl xl:text-start text-center">
                            Custom designed programming to give you and your
                            startups the edge on the competition.
                        </p>
                        <p className="text-xl w-[50vw] mb-4 xl:w-[50vw] w-full text-xl xl:text-start text-center">
                            Future-proof your business by investing and building
                            with the most exciting startups in your industry.
                        </p>
                        <button className="bg-[#3865B6] rounded-[48px] px-8 py-4 mt-4 text-lg font-bold ">
                            Book a meeting
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-4 mb-4">
                    <p className="text-lg font-light mb-4">
                        A few of our Corporate Partners
                    </p>
                    <div className="flex flex-row mb-12 w-[80vw] xl:flex xl:justify-center grid grid-cols-3 gap-4">
                        {partnerLogos.map((items) => {
                            return (
                                <CorporatePartnersAvatar
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
                {/* <section className="flex flex-col justify-center items-center min-h-[50vw] bg-[#201981] text-[#ffffff] w-screen py-24">
                    <div className="flex justify-center items-center mb-20">
                        <H3
                            text={
                                "We are Venture Capitalists in the education business"
                            }
                        />
                    </div>
                    <div className="flex xl:flex-row flex-col gap-24 justify-between items-center px-[15vw] w-[100vw] mb-24">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[10vh] font-bold text-[#255EFB] leading-[10vh]">
                                $1B
                            </h1>
                            <p className="text-[32px] font-semibold">
                                Capital Raised
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[10vh] font-bold text-[#255EFB] leading-[10vh]">
                                3.7K
                            </h1>
                            <p className="text-[32px] font-semibold">Alumni</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-[10vh] font-bold text-[#255EFB] leading-[10vh]">
                                10K+
                            </h1>
                            <p className="text-[32px] font-semibold">
                                Jobs Created
                            </p>
                        </div>
                    </div>
                </section> */}
                <section className="bg-[#CBDFFC] w-screen px-[15vw] py-[6vw] mb-4">
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex flex-col items-center mb-12">
                            <H3
                                text={"Importance of a Corporate Accelerator"}
                            />
                            <p className="text-lg text-center">
                                <br />
                                Partner with us to learn how to identify, grow
                                and invest in high quality startups.
                            </p>
                        </div>
                        <div className="grid xl:grid-cols-3 grid-cols-2 gap-8 mb-12">
                            <Card>
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="funnel" />
                                    </div>
                                </div>
                                <H4 text={"Innovation Funnel"} />
                                <p className="text-lg">
                                    Create or build on your pipeline of
                                    innovation. Surround your teams with
                                    mentorship and get access to additional
                                    venture capital networks.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#EEE5FE] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="disruptive technology" />
                                    </div>
                                </div>
                                <H4 text={"Disruptive Technology & Teams"} />
                                <p className="text-lg">
                                    Get early access to technology or talent
                                    that could provide a competitive edge in
                                    your industry.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#C1D7CA] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="global network" />
                                    </div>
                                </div>
                                <H4 text={"Global Network"} />
                                <p className="text-lg">
                                    Join and gain access to our global network
                                    of investors, mentors and startups.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#FFE6EF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="guidance" />
                                    </div>
                                </div>
                                <H4 text={"Expert Guidance"} />
                                <p className="text-lg">
                                    Leverage our investor and startup experience
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#FFE6EF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="vertical expansion" />
                                    </div>
                                </div>
                                <H4 text={"Market Expansion"} />
                                <p className="text-lg">
                                    Expand into new markets or disrupt existing
                                    ones by injecting new technology into your
                                    internal processes.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="investment opportunity" />
                                    </div>
                                </div>
                                <H4 text={"Investment Opportunities"} />
                                <p className="text-lg">
                                    Work closely with high-growth, high
                                    potential startups. Get early access to deal
                                    flow opportunities
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
                    <div className="xl:flex xl:flex-row mb-8 grid grid-cols-3">
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
                {/* <div className="flex flex-col items-center my-12">
                    <p className="text-lg font-light mb-4">
                        Some of the startups from our accelerator programs
                    </p>
                    <div className="xl:flex xl:flex-row mb-8 grid grid-cols-4 gap-4">
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
                </div> */}
                <section className="bg-[#133181] w-screen px-[15vw] py-[5vw] text-white">
                    <div className="flex xl:flex-row flex-col justify-between my-12">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/portfolioCompanies/bookmockupplaceholder.jpeg"
                                alt="Ecosystem Impact Casestudies"
                                height={100}
                                width={500}
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-col items-center w-full xl:items-start xl:w-[35vw]">
                            <div className="w-full">
                                <div className="bg-white rounded-2xl p-12">
                                    <h2 className="text-4xl font-bold mb-8 mt-4 xl:mt-0 text-[#061C41]">
                                        Download our Corporate Accelerator
                                        Casestudies
                                    </h2>
                                    <p className="text-[1rem] mb-8 text-[#061C41]">
                                        Get the actionable insights from our
                                        track record of successful corporate
                                        collaborations. Including a success
                                        breakdown from our biggest wins:
                                    </p>
                                    <div className="grid grid-cols-2 mb-4 text-[1rem] font-semibold w-full text-[#061C41]">
                                        <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                            <div className="h-6 w-6">
                                                <Icon label={"check"} />
                                            </div>
                                            <p>Funding raised</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                            <div className="h-6 w-6">
                                                <Icon label={"check"} />
                                            </div>
                                            <p>Startups accelerated</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                            <div className="h-6 w-6">
                                                <Icon label={"check"} />
                                            </div>
                                            <p>How to scout</p>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 col-span-1 mb-4">
                                            <div className="h-6 w-6">
                                                <Icon label={"check"} />
                                            </div>
                                            <p>
                                                How to integrate acquired
                                                companies
                                            </p>
                                        </div>
                                    </div>
                                    <form className="flex flex-col justify-center items-center relative p-4">
                                        <input
                                            id="Name"
                                            placeholder="Name"
                                            className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                        ></input>
                                        <input
                                            id="Email"
                                            placeholder="Email"
                                            className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                        ></input>
                                        <textarea
                                            id="Message"
                                            placeholder="Message"
                                            className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="bg-[#FED628] text-[#3661AF] font-bold rounded-[200px] py-4 text-lg w-[280px] absolute -bottom-[60px]"
                                        >
                                            Get Download Link
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* <div className="grid grid-cols-2 gap-4 w-full">
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
                    </div> */}
                            {/* <button className="bg-[#F4DE5D] rounded-[48px] px-8 py-4 mt-4 text-black">
                        Download
                    </button> */}
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
                                    "How do we partner with Corporations and Enterprise?"
                                }
                            />
                            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 gap-y-28 mt-20 justify-center">
                                <div className="xl:col-span-1 relative h-[380px] xl:h-auto">
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
                                <div className="xl:col-span-2">
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

                                <div className="xl:col-span-2">
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
                                <div className="col-span-1 relative h-[380px] xl:h-auto">
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
                                <div className="col-span-1 relative h-[380px] xl:h-auto">
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
                {/* <section className="flex flex-col justify-center items-center min-h-[45vw] w-auto bg-[#133181] text-[#ffffff] w-screen">
                    <div className="mb-20">
                        <H3 text={"A day in our programs"} />
                    </div>
                    <div className="flex flex-row justify-center gap-0 items-center px-[15vw] w-[100vw] mb-10">
                        <div className="flex flex-col justify-center items-end w-[20vw] pb-8 border-b-2 relative">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                01
                            </h1>
                            <p className="text-xl font-bold">Speaker Session</p>
                            <div className="absolute -bottom-2.5">
                                <Icon label={"circle"} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]  pb-8 border-b-2 relative">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                02
                            </h1>
                            <p className="text-xl font-bold">Problem Solving</p>
                            <div className="absolute -bottom-2.5">
                                <Icon label={"circle"} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]  pb-8 border-b-2 relative">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                03
                            </h1>
                            <p className="text-xl font-bold">1:1 Mentoring</p>
                            <div className="absolute -bottom-2.5">
                                <Icon label={"circle"} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]  pb-8 border-b-2 relative">
                            <h1 className="text-2xl font-bold text-[#255EFB] leading-[140px]">
                                04
                            </h1>
                            <p className="text-xl font-bold">Pitch Practice</p>
                            <div className="absolute -bottom-2.5">
                                <Icon label={"circle"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center px-[15vw] w-[100vw] mb-10">
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">Session 1</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">Session 2</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">Session 3</p>
                        </div>
                        <div className="flex flex-col justify-center items-end w-[20vw]">
                            <p className="text-lg">Session 4</p>
                        </div>
                    </div>
                </section> */}
                <div className="flex flex-col items-center mt-2 mb-4">
                    <p className="text-lg font-light my-12">
                        Past speakers include
                    </p>
                    <div className="grid md:grid-cols-4 grid-cols-8 mb-8 gap-12">
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
                    <div className="flex flex-row justify-between items-center gap-12">
                        <div className="bg-white rounded-2xl p-8">
                            <h3 className="text-[#061C41] text-3xl font-bold mb-4 w-[400px]">
                                Let's grow your Innovation Program together
                            </h3>
                            <p className="text-[#061C41] text-md mb-4">
                                Schedule a strategy call today
                            </p>
                            <form className="flex flex-col justify-center items-center relative p-4">
                                <input
                                    id="Name"
                                    placeholder="Name"
                                    className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                ></input>
                                <input
                                    id="Email"
                                    placeholder="Email"
                                    className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                ></input>
                                <input
                                    id="CompanyName"
                                    placeholder="CompanyName"
                                    className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                ></input>
                                <textarea
                                    id="Message"
                                    placeholder="Message"
                                    className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[#FED628] text-[#3661AF] font-bold rounded-[200px] py-4 text-lg w-[280px] absolute -bottom-[60px]"
                                >
                                    Book Meeting
                                </button>
                            </form>
                        </div>
                        {/* <div
                            className="pipedriveWebForms"
                            data-pd-webforms="https://webforms.pipedrive.com/f/6rG46dzR3kUrVs5l4wC6qQZCbS1s0CihnZuvm8LOyxKzOgoAyZwySypOwnLW8KoIM3"
                        >
                            <script src="https://webforms.pipedrive.com/f/loader"></script>
                        </div> */}
                        <div className="flex justify-center h-[500px] w-full">
                            <Image
                                src="/timdraper.jpeg"
                                alt="Tim Draper"
                                height={100}
                                width={500}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "16px",
                                }}
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
};

export default page;
