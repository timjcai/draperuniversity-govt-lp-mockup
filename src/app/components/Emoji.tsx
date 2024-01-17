import React, { FC } from "react";

const emojiMap: { [key: string]: string } = {
    korea: "🇰🇷",
    taiwan: "🇹🇼",
    canada: "🇨🇦",
    saudiarabia: "🇸🇦",
    pakistan: "🇵🇰",
    japan: "🇯🇵",
    india: "🇮🇳",
    hongkong: "🇭🇰",
    nigeria: "🇳🇬",
    turkey: "🇹🇷",
    sengal: "🇸🇳",
};

type emojiType = {
    type: string;
};

export const Emoji: FC<emojiType> = ({ type }) => {
    const moji = emojiMap[type];
    return <div>{moji}</div>;
};
