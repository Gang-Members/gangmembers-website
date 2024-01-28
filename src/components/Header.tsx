import React from "react";
import Hero from "./Hero";
import HeroFlat from "./HeroFlat";

const Header: React.FC = () => {
    return (
        <header>
            <Hero />
            <HeroFlat />
        </header>
    );
};

export default Header;