import React, { FC } from "react";

type CardType = {
    children: React.ReactNode;
};

export const Card: FC<CardType> = ({ children }) => {
    return (
        <div className="group rounded-lg shadow-globe-product-card bg-white p-6 inline-block shrink-0 snap-center first:ml-[var(--margin)] last:mr-[var(--margin)] md:first:ml-0 md:last:mr-0 md:w-1/4-gutter">
            {children}
        </div>
    );
};
