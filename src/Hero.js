import React from "react";

const Hero = ({handleLogout}) => {

    return (
        <section className = "hero">
            <nav>
                <h2>Добро пожаловать</h2>
                <button onClick = {handleLogout}>Выход</button>
            </nav>
        </section>
    )
};

export default Hero;