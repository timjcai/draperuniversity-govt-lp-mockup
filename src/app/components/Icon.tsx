import { IconDefinition, faHive } from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRight,
    faArrowUpRightDots,
    faArrowsSplitUpAndLeft,
    faAward,
    faBrain,
    faBridge,
    faCircle,
    faCircleCheck,
    faCircleInfo,
    faCity,
    faCoins,
    faExpand,
    faFilter,
    faGamepad,
    faHeartPulse,
    faHouse,
    faMagnifyingGlass,
    faMicrochip,
    faMoneyBillTrendUp,
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
    funnel: faFilter,
    "disruptive technology": faMicrochip,
    "global network": faHive,
    guidance: faCircleInfo,
    "vertical expansion": faExpand,
    "investment opportunity": faMoneyBillTrendUp,
    hackerhouse: faHouse,
    embark: faHive,
    bulletpoint: faArrowRight,
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
    | "circle"
    | "funnel"
    | "disruptive technology"
    | "global network"
    | "guidance"
    | "vertical expansion"
    | "investment opportunity"
    | "hackerhouse"
    | "embark"
    | "bulletpoint";

export const Icon: FC<IconProps> = ({ label }) => {
    const icon = iconMapping[label];
    return <FontAwesomeIcon icon={icon} />;
};
