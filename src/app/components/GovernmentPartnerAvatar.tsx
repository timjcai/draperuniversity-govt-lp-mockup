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
        <div className="flex justify-center items-center relative mx-6">
            <Image src={src} alt={alt} width={width} height={height} />
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
