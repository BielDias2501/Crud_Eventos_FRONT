import React from "react";
import Styles from "./Header.module.css"

function Header() {
    return(
        <header className={Styles.header}>
            <h1>Eventos</h1>
            <div>
                <ul>
                <li>Evento 1</li>
                <li>Evento 2</li>
                <li>Evento 3</li>
            </ul>
            </div>
        </header>
    )
}

export default Header;