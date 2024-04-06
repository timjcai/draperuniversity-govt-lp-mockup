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
    Navbar,
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
            src: "/pastSpeakersEnt/michaelseibel.png",
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
                <Navbar />
                <div className="flex flex-col items-center h-[70vh] relative -z-10">
                    <div className="w-screen h-full flex justify-center items-center">
                        <Image
                            src="/stellar/herobanner2.png"
                            fill={true}
                            // width={1512}
                            // height={745}
                            // layout="responsive"
                            alt="Draper University Government Innovation"
                            objectFit="cover"
                            objectPosition="left bottom"
                            style={{
                                minHeight: "50vh",
                                maxHeight: "80vh",
                                background:
                                    "linear-gradient( 248.88deg, rgba(0, 0, 0, 0) -0.05%, rgba(0, 0, 0, 1) 71.28% )",
                                objectPosition: "center",
                            }}
                        />
                    </div>
                    <div className="flex flex-col xl:items-start items-center absolute top-[19vh] w-[82vw] text-white">
                        <h1 className="xl:text-xl font-regular xl:w-[50vw] w-full text-lg xl:text-start text-center"></h1>
                        <h2 className="xl:text-6xl font-bold mb-8 xl:w-[50vw] w-full text-4xl xl:text-start text-center">
                            Stellar X Draper University
                        </h2>
                        <p className="xl:text-lg w-[50vw] mb-4 xl:w-[50vw] w-full text-lg xl:text-start text-center">
                            This two-part program guides developers and founders
                            on a transformative journey within the Stellar
                            blockchain ecosystem.
                        </p>
                        <p className="text-lg w-[50vw] mb-4 xl:w-[50vw] w-full text-lg xl:text-start text-center">
                            By combining Stellar's innovative platform with
                            Draper's renowned expertise, this partnership is
                            poised to drive forward the next wave of
                            blockchain-powered startups.
                        </p>
                        <p className="text-lg w-[50vw] mb-4 xl:w-[50vw] w-full text-lg xl:text-start text-center">
                            By combining Stellar's innovative platform with
                            Draper's renowned expertise, this partnership is
                            poised to drive forward the next wave of
                            blockchain-powered startups.
                        </p>
                        <button className="bg-[#FDDB2C] text-black rounded-[48px] px-8 py-4 mt-4 text-lg font-bold ">
                            Apply Now
                        </button>
                    </div>
                </div>
                <section className="bg-[#00214B] w-screen px-[15vw] py-[6vw] mb-4">
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex flex-col items-center mb-12 text-white">
                            <H3 text={"Program Overview"} />
                            <p className="text-lg text-center">
                                <br />
                                Join the next wave of Blockchain Startups
                                building on the Stellar Network
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <Card>
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="hackerhouse" />
                                    </div>
                                </div>
                                <H4 text={"Stellar Hacker House"} />
                                <p className="text-lg mb-4">
                                    The Stellar Hacker House is a residency
                                    incubator for ambitious developers &
                                    founders looking to revolutionize
                                    decentralized solutions. Learn the
                                    fundamentals on building a business on the
                                    Stellar Network.
                                </p>
                                <ul className="text-lg">
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>3 week program</span>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>Silicon Valley residency</span>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>
                                            Learn to transform ideas into
                                            product
                                        </span>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>
                                            Accepted participants receive{" "}
                                            <strong>$20K in grant money</strong>
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                            <Card>
                                <div className="bg-[#EEE5FE] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="embark" />
                                    </div>
                                </div>
                                <H4 text={"Stellar Embark Accelerator"} />
                                <p className="text-lg mb-4">
                                    The Embark Accelerator is a residency
                                    program that helps scale your Stellar
                                    Network startup and prepares you for
                                    fundraising with advanced sessions on
                                    Stellar-specific technologies, go-to-market
                                    strategies, and fundraising tactics.
                                </p>
                                <ul className="text-lg">
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>10 week program</span>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>Silicon Valley residency</span>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>
                                            Build your network of industry
                                            leaders and experts.
                                        </span>
                                    </li>
                                    <li className="flex flex-row gap-2 items-center">
                                        <div className="h-4 w-4">
                                            <Icon label="bulletpoint" />
                                        </div>
                                        <span>
                                            Accepted participants receive{" "}
                                            <strong>
                                                up to $50K in investments
                                            </strong>
                                        </span>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                        <button className=" bg-[#3865B6] rounded-[48px] px-8 py-4 mt-4 text-lg font-bold">
                            Apply Now
                        </button>
                    </div>
                </section>

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

                <section className="bg-[#00214B] w-screen px-[15vw] py-[6vw]">
                    <div className="flex flex-col items-center mb-4">
                        <div className="flex flex-col items-center mb-12 text-white">
                            <H3 text={"Application & Selection Process"} />
                            <p className="text-lg text-center">
                                <br />
                                Who we are looking for?
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <Card>
                                <div className="bg-[#E6F2FF] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="hackerhouse" />
                                    </div>
                                </div>
                                <H4 text={"Stellar Hacker House"} />
                                <p className="text-lg mb-4">
                                    We are looking for ambitious early stage
                                    founders or developers who are interested in
                                    building a business on the Stellar
                                    Blockchain Network
                                </p>
                                <p className="text-lg mb-4">
                                    This will be a 2-step selection process:
                                </p>
                                <ul className="text-lg mb-4">
                                    <ol className="flex flex-row gap-2 items-center">
                                        <span>
                                            1. Fill out the online Application
                                            prior to the July 5th 2024 deadline
                                        </span>
                                    </ol>
                                    <ol className="flex flex-row gap-2 items-center">
                                        <span>
                                            2. Participating in the Pitch
                                            Competition
                                        </span>
                                    </ol>
                                </ul>
                                <p className="text-lg mb-4">
                                    Shortlisted candidates will be notified upon
                                    successful selection and admission into the
                                    Hacker House program.
                                </p>
                            </Card>
                            <Card>
                                <div className="bg-[#EEE5FE] mb-7 flex h-14 w-14 place-items-center rounded-full justify-center relative -left-2 text-xl">
                                    <div className="h-6 w-6">
                                        <Icon label="embark" />
                                    </div>
                                </div>
                                <H4 text={"Stellar Embark Accelerator"} />
                                <p className="text-lg mb-4">
                                    We are looking for Stellar Network startups
                                    who have shown initial early stage traction
                                    and are ready to scale their business.
                                </p>
                                <p className="text-lg mb-4">
                                    We prefer Stellar startups who those who
                                    fall under these core themes:
                                    <ul>
                                        <li className="flex flex-row gap-2 items-center">
                                            <div className="h-4 w-4">
                                                <Icon label="bulletpoint" />
                                            </div>
                                            <span>Smart Contracts</span>
                                        </li>
                                        <li className="flex flex-row gap-2 items-center">
                                            <div className="h-4 w-4">
                                                <Icon label="bulletpoint" />
                                            </div>
                                            <span>AI x Blockchain</span>
                                        </li>
                                        <li className="flex flex-row gap-2 items-center">
                                            <div className="h-4 w-4">
                                                <Icon label="bulletpoint" />
                                            </div>
                                            <span>
                                                Creator & Enterprise Adoption
                                            </span>
                                        </li>
                                    </ul>
                                </p>
                                <ul className="text-lg mb-4">
                                    <ol className="flex flex-row gap-2 items-center">
                                        <span>
                                            1. Fill out the online Application
                                            prior to the September 13th 2024
                                            deadline
                                        </span>
                                    </ol>
                                    <ol className="flex flex-row gap-2 items-center">
                                        <span>
                                            2. Shortlisted candidates will be
                                            participate in a 30 minute interview
                                            with the Embark Accelerator
                                            selection team.
                                        </span>
                                    </ol>
                                </ul>
                                <p className="text-lg mb-4">
                                    Once selected, the Embark Accelerator
                                    selection team will make their offers 2
                                    weeks prior to the program start date
                                </p>
                                <p className="text-lg mb-4">
                                    Although not essential, participation in the
                                    Stellar Hacker House will be viewed
                                    favorably in the application for the Embark
                                    Accelerator
                                </p>
                            </Card>
                        </div>
                        <button className=" bg-[#3865B6] rounded-[48px] px-8 py-4 mt-4 text-lg font-bold">
                            Apply Now
                        </button>
                    </div>
                </section>
                <section className="bg-[#133181] w-screen px-[15vw] py-[5vw] text-white">
                    <div className="flex flex-row justify-between items-center gap-12">
                        <div className="bg-white rounded-2xl p-8">
                            <h3 className="text-[#061C41] text-3xl font-bold mb-4 w-[400px]">
                                Apply for the Stellar Hacker House!
                            </h3>
                            <p className="text-[#061C41] text-md mb-4">
                                Submit your application today:
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
                                    id="Pitch"
                                    placeholder="Pitch us your business"
                                    className="rounded-md border-[#CCDAEE] border-[2px] p-4 mb-4 w-full"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[#FED628] text-[#3661AF] font-bold rounded-[200px] py-4 text-lg w-[280px] absolute -bottom-[60px]"
                                >
                                    Apply Now
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
