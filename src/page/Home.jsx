import React from "react";
import './Home.css'
// import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Home=()=>{
    return(
        
            <section id="home" className="home-body">
                <div className="body-content">
                    <div className="content-div">
                    <div className="content-info">
                    Hello! I am Arbin Choudhary. I have completed Bsc.(Hons) in Computing from Softwarica College of IT & E-Commerce. 
                    This is my Portfolio. If you want to know more about me, you can click on "more about me" button below.
                    </div>
                    <div className="btn-div">
                        <div>
                        
                        <AnchorLink href="#about"><button className="btn-txt">More about me</button></AnchorLink></div>
                        <div>
                        <AnchorLink href="#project"><button className="btn-txt">My Project</button></AnchorLink>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>

            </section>
            
        
    )
}