import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
    return (
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
                        <Link href="/corporate">Executive</Link>
                    </li>
                    <li className="text-[1.058vw] px-8 py-5 ">
                        <a>Investors</a>
                    </li>
                    <li className="text-[1.058vw] px-8 py-5 ">
                        <a>Government</a>
                    </li>
                    <li className="text-[1.058vw] px-8 py-5 ">
                        <Link href="/stellar">Stellar</Link>
                    </li>
                </ul>
                <div className="bg-[#3865B6] rounded-[48px] px-[1.262vw] py-[0.992vw]">
                    Book a Call
                </div>
            </div>
        </div>
    );
};
