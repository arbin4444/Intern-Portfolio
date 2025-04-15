import React from "react";
import './Contact.css';

export const Contact =()=>{
    return(
        
            <section id="contact" className="contact-div">
                <div className="ct-div">
                    <div className="ct-info-div">
                    
                    <div className="ct-content-div">
                    <div className="ct-txt"><p>Name</p></div>             
                    <div className="ct-input"><input className="ct-input-txt" type="text" placeholder="Your Name"></input></div></div>
                    <div className="ct-content-div">
                    <div className="ct-txt"><p>Email</p></div>
                    <div className="ct-input"><input className="ct-input-txt" type="email" placeholder="Your Email"></input></div></div>
                    
                
                <div className="msg-div">
                    <div className="msg-txt"><p>Message Box</p></div>
                <div className="msg-box"><textarea className="msg-txt-area" ></textarea></div>
                </div>
                
                <div className="ct-btn"><button className="ct-btn-txt">submit</button></div>
                </div>
                </div>
                
                
            </section>
        
    )
}