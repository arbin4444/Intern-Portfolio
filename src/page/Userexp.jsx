import React from "react";
import "./Userexp.css";
import imagelogo from './image.png';
import schoollogo from './school.jpg';


export const Userexp=()=>{
    const header=[{head:"News Producer", description:"I have worked in Image Channel Company as News Producer. I used to handle the news part which were to be aired live in Image Channel.", pic:<img className="logo" src={imagelogo} alt="logo"/>},
        {head:"Computer Teacher", description:"I have also worked as a teacher for school level. My main subject was Computer Science and other than that i used to teach Math and Moral subject.", pic:<img className="logo1" src={schoollogo} alt="logo"/>},
        {head:"Frontend Developer", description:"I am working as an intern in React Frontend Development. Learning and implementing ideas and skills to develop various React projects."},
    ];
    return(
        <div>
            <section id="exp" className="user-exp">
                <div className="exp-div">
                    <div className="exp-content">
                    <div className="exp-title">Work Experience</div>
                    <div className="exp-list">
                        {header.map((head)=>(
                            <div>
                                <div className="exp-head">{head.head}{head.pic}</div>
                                 <div className="list-content">{head.description}</div>
                            </div>))}
                            
                        {/* <ul>
                            <li>News Producer</li>
                            <div className="list-content">I have worked in Image Channel Company as News Producer. I used to handle the news part which were to be aired live in Image Channel.</div>
                            <li>Computer Teacher</li>
                            <div className="list-content">I have also worked as a teacher for school level. My main subject was Computer Science and other than that i used to teach Math and Moral subject. Many mini-projects were completed together with my students and also took part in different inter-schools competition</div>
                            
                        </ul> */}
                    </div>
                    </div>
                </div>

            </section>
        </div>
    )
}