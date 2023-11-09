import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';
import {useNavigate} from "react-router-dom";

export default function NavBar(){

    const menu = useRef(null);
    const navigate = useNavigate();


    let items = [
        {label: 'Finanse', icon: ' pi pi-credit-card', className: 'menu-item',command: () => {navigate ("/finance")}},
        {label: 'Notatki', icon: ' pi pi-list', className: 'menu-item'},
        {label: 'Kalendarz', icon: 'pi pi-calendar', className: 'menu-item'},
        {label: 'Wyloguj', icon: ' pi pi-power-off',className: 'menu-item',command: () => {navigate ("/")}},
    ];

    return(
        <div className="navbar-container">
        <div className="navbar-menu">
        <TieredMenu model={items} popup ref={menu} />
        <Button label="Show" icon="pi pi-bars" onClick={(e) => menu.current.toggle(e)} />
        </div>
        </div>
);
}