import React from 'react';
import classesNav from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return <nav className={classesNav.nav}>
        <div className={classesNav.item}>
            <NavLink to="/profile" activeClassName={classesNav.active}>Profile</NavLink>
        </div>
        <div className={classesNav.item}>
            <NavLink to="/dialogs" activeClassName={classesNav.active}>Messages</NavLink>
        </div>
        <div className={classesNav.item}>
            <NavLink to="/news" activeClassName={classesNav.active}>News</NavLink>
        </div>
        <div className={classesNav.item}>
            <NavLink to="/music" activeClassName={classesNav.active}>Music</NavLink>
        </div>
        <div className={classesNav.item}>
            <NavLink to="/settings " activeClassName={classesNav.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Nav;