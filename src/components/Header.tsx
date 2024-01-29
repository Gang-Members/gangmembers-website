import React from "react";
import Hero from "./svg/Hero";
import Text from "./svg/Text";

const Header: React.FC = () => {
    return (
        <header className="absolute w-full">
            <Hero />
            <Text />
        </header>
    );
};

export default Header;