import React from "react";
import "./navbar.css"
import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = ()=> {
    return (
        <div className="navbar">
        <p>No Pain No Gain</p>
        <p>Inicio</p>
        <p>Nosotros</p>
        <p>Contacto</p>
        <CartWidget/>
        </div>
    )
}
