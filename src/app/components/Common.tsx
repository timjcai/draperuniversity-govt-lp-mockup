import React, { FC } from "react";

type TextType = {
    text: string;
};

export const H3: FC<TextType> = ({ text }) => {
    return <h3 className="text-3xl font-bold mb-2">{text}</h3>;
};

export const H4: FC<TextType> = ({ text }) => {
    return <h3 className="text-lg font-bold mb-4">{text}</h3>;
};
