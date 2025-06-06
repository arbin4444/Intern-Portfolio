import React from "react";
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Link } from "react-router-dom";

export const Navbar = () => {
    const titles = [
        { path: '#home', title: 'Home' },
        {path: '#about', title:'About'},
        {path: '#exp', title: 'Experience'},
        {path: '#project', title:'Project'},
        // {path: '#contact', title: 'Contact'},
        
    ];

    return (
        <nav>
            <section className="nav-div">
            
            <div className="lst">
                {titles.map((title, index) => (
                    <div  key={index}>
                        <AnchorLink className="lst-title" href={title.path}>{title.title}</AnchorLink>
                        {/* <Link className="lst-title" to={title.path}>{title.title}</Link> */}
                    </div>
                ))}
            
            </div>
            </section>
        </nav>
    );
};
