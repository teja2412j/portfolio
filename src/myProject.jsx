import React from "react";
import line from './assets/images/line (14).png'
import ProjectComp from "./components/projectComp";
import jayblues from './assets/images/jay.png';
import bindu from './assets/images/bindu.png';
import Gtrac from './assets/images/gtrac img.png';

import vyprewmy from './assets/images/vypremey.png';


export default function MyProjects() {
    return (
        <>

        
            <h2 className="headings">MY PROJECTS</h2>
            <div className="text-center">
                <img src={line} alt="line" />
            </div>
            <div className=" container projects">
                <h4 className="proj-heading">Developed Websites</h4>


                <div className="projdetail row">
                    <div className="col-lg-4 col-sm-12 mb-4"> <ProjectComp imgSrc={jayblues} imgDetail="JayBlues Website" imgLink="https://jayblues.com/" linkName="Visit Site" /></div>
                    <div className="col-lg-4 col-sm-12 mb-4"> <ProjectComp imgSrc={vyprewmy} imgDetail="Vy-Prameya Website" imgLink="https://vyprameya.in/" linkName="Visit Site" /></div>
                    <div className="col-lg-4 col-sm-12 mb-4"> <ProjectComp imgSrc={bindu} imgDetail="Bindu Travels Website" imgLink="https://jayblues.in/bindu/" linkName="Visit Site" /></div>
                    <div className="col-lg-4 col-sm-12 mb-4"> <ProjectComp imgSrc={Gtrac} imgDetail="Gtrac Website" imgLink="https://jayblues.in/gtrac/index.html" linkName="Visit Site" /></div>
                </div>
            </div>

        </>

    );
}


