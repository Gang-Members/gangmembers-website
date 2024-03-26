import React from "react";

export default function header() {
    return (
        <header>
            <section className="headerImg">
                <img src="https://via.placeholder.com/150" alt="logo" />
            </section>
            <nav>
                <ul>
                    <li><a href="/blog">blog</a></li>
                    <li><a href="/motm">Motm</a></li>
                    <li><a href="/login">login</a></li>
                </ul>
            </nav>
        </header>
    );
};