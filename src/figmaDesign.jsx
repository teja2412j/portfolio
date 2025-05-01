import React from "react";
import {  Route, Routes, Link } from "react-router-dom";
import Figma from "./figma";
import FigmaFlyre from "./figmaflyredesign";
import FigmaBoardDesign from "./figmaBoard";
export default function FigmaDesigns() {

 

    const Fif2 = () => {
        return <h1>hello 333</h1>;
    }
    return (
        <>
            <div className="fig-design">
                <div className=" container projects">
                    <h4 className="proj-heading">Designs in Figma </h4>
                   
                        <ul className="routeBar">
                            <li><Link to="/" className="rolinks">Figma Design</Link></li>
                            <li><Link to="/flyres" className="rolinks">Figma Flyre Design</Link></li>
                            <li><Link to="/boarddesign" className="rolinks">Board Design</Link></li>
                        </ul>

                        <Routes>
                            <Route path="/" element={<Figma/>} />
                            <Route path="/flyres" element={<FigmaFlyre/>} />
                            <Route path="/boarddesign" element={<FigmaBoardDesign/>} />
                        </Routes>
                   



                    {/* <div className="projdetail row">
                        <div className="col-lg-4 col-sm-12 mb-4"></div>
                        <div className="col-lg-4 col-sm-12 mb-4" > </div>
                        <div className="col-lg-4 col-sm-12 mb-4" > </div>
                        <div className="col-lg-4 col-sm-12 mb-4" ></div>
                    </div> */}

                </div>
            </div>
        </>
    )

}