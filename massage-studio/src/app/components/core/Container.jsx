import clsx from "clsx";
import React from "react";

const Container = ({ children, className }) => {
    return (
        <div className={clsx("mx-auto w-full px-4 lg:px-8", className)}>
            {children}
        </div>
    );
};

export default Container;
