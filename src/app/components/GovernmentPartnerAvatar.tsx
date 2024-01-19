import Image from "next/image";
import { FC } from "react";
import { Emoji } from "./Emoji";

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

interface GovernmentAvatar extends ImageProps {
    country: string;
}

export const GovernmentPartnersAvatar: FC<GovernmentAvatar> = ({
    src,
    alt,
    width,
    height,
    country,
}) => {
    return (
        <div className="flex justify-center items-center relative mx-4">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{ objectFit: "cover" }}
            />
            <p className="absolute -right-2 -bottom-1 text-3xl">
                <Emoji type={country} />
            </p>
        </div>
    );
};

export const LogoAvatar: FC<ImageProps> = ({ src, alt, width, height }) => {
    return (
        <div className="flex justify-center items-center mx-4">
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
    );
};

type HSAndLogo = {
    headshot: ImageProps;
    logo: ImageProps;
};

export const HeadshotAndLogoAvatar: FC<HSAndLogo> = ({ headshot, logo }) => {
    return (
        <div className="flex flex-col justify-center items-center relative mx-6 h-[150px]">
            <Image
                src={headshot.src}
                alt={headshot.alt}
                width={headshot.width}
                height={headshot.height}
                style={{ objectFit: "cover" }}
            />
            <p className="text-md mt-2">{headshot.alt}</p>
            {/* <div className="absolute -right-2 -bottom-1">
                <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                />
            </div> */}
        </div>
    );
};
