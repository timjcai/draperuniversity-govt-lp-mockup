import { IconDefinition, faHive } from "@fortawesome/free-brands-svg-icons";
import {
    faArrowUpRightDots,
    faArrowsSplitUpAndLeft,
    faAward,
    faBrain,
    faBridge,
    faCircle,
    faCircleCheck,
    faCity,
    faCoins,
    faGamepad,
    faHeartPulse,
    faMagnifyingGlass,
    faPeopleCarryBox,
    faRobot,
    faRocket,
    faScrewdriverWrench,
    faSeedling,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

type IconProps = {
    label: IconType;
};

const iconMapping: { [key in IconType]: IconDefinition } = {
    entreprenuer: faUser,
    startup: faRocket,
    scaleup: faCity,
    growth: faArrowUpRightDots,
    job: faPeopleCarryBox,
    fdi: faSeedling,
    bridge: faBridge,
    skill: faScrewdriverWrench,
    research: faMagnifyingGlass,
    diversification: faArrowsSplitUpAndLeft,
    recognition: faAward,
    check: faCircleCheck,
    ai: faBrain,
    crypto: faHive,
    gaming: faGamepad,
    deeptech: faRobot,
    healthtech: faHeartPulse,
    fintech: faCoins,
    circle: faCircle,
};
export type IconType = SectionType;

export type SectionType =
    | "entreprenuer"
    | "startup"
    | "scaleup"
    | "growth"
    | "job"
    | "fdi"
    | "bridge"
    | "skill"
    | "research"
    | "diversification"
    | "recognition"
    | "check"
    | "ai"
    | "crypto"
    | "gaming"
    | "deeptech"
    | "healthtech"
    | "fintech"
    | "circle";

export const Icon: FC<IconProps> = ({ label }) => {
    const icon = iconMapping[label];
    return <FontAwesomeIcon icon={icon} />;
};
