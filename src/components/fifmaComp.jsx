import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function FigmaComponent({figmaLink,figmaImg}) {
    return (
        <>
           <div class="card fig-img" style={{width:"100%",color:"#999"}}>
                           <img src={figmaImg} class="card-img-top fig-image" alt="Figma Images" />
                           <div class="card-body">
                               {/* <p class="card-text tx1">{imgDetail} </p> */}
                               <a href={figmaLink} className="figma-para"><FaExternalLinkAlt style={{color:"#166cc5"}}/> Figma Link</a>
                           </div>
                       </div>
        </>
    )

}