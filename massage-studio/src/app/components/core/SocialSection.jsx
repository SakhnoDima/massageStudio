import Image from "next/image";
import React from "react";

const SocialItem = ({ url, icon, className, w, h }) => {
    return (
        <a
            href={url}
            target={url.startsWith("tel:") ? undefined : "_blank"}
            className={` ${className}`}
        >
            <Image src={icon} alt={url} width={w} height={h} />
        </a>
    );
};

export default SocialItem;
