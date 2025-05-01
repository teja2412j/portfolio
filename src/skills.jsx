import React from "react";
import './mainPage.css'
import SkillComp from "./components/skillComp";

import skill1 from './assets/images/skill(1).png';
import skill2 from './assets/images/skill(2).png';
import skill3 from './assets/images/skill(3).png';
import skill4 from './assets/images/skill(4).png';
import skill5 from './assets/images/skill(5).png';
import skill6 from './assets/images/skill(6).png';

export default function Skills() {
    return (
        <>

            <div style={{ backgroundColor: "#36E3D9", height: "2px",marginBlock:"10px" }}></div>
            <h2 className="headings">SKILLS</h2>
            <div className="skill">

                <div className="skillBox">
                    <SkillComp src1={skill1} />
                    <SkillComp src1={skill2} />
                    <SkillComp src1={skill3} />
                    <SkillComp src1={skill4} />
                    <SkillComp src1={skill5} />
                    <SkillComp src1={skill6} />
                </div>
            </div>
            <div style={{ backgroundColor: "#36E3D9", height: "2px",marginBlock:"20px" }}></div>
        </>
    )

}