import React from "react";
import FigmaComponent from "./components/fifmaComp";
import vypre from './assets/images/Vy-Prameya 1.png';
import ragav from './assets/images/RAGAVS DIAGNOSTIC 1.png';
import greenheritage from './assets/images/Green Palace Heritage 1.png';

export default function Figma() {
    return (
        <>
 {/* figma  project design  */}
            <div className="projdetail row">
                <div className="col-lg-4 col-sm-12 col-md-4 mb-4">
                    <FigmaComponent figmaLink="https://www.figma.com/design/lVBdnFohCUZVNm6i7p4HkE/Untitled?node-id=0-1&t=8XASuyCrmPIgGctB-1" figmaImg={vypre}/>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-4 mb-4" >
                    <FigmaComponent figmaLink="https://www.figma.com/design/lVBdnFohCUZVNm6i7p4HkE/Untitled?node-id=0-1&t=8XASuyCrmPIgGctB-1" figmaImg={ragav} />
                </div>
                <div className="col-lg-4 col-sm-12 col-md-4 mb-4" >
                    <FigmaComponent figmaLink="https://www.figma.com/design/lVBdnFohCUZVNm6i7p4HkE/Untitled?node-id=0-1&t=8XASuyCrmPIgGctB-1" figmaImg={greenheritage} />
                </div>
            </div>
 {/* figma  project design end */}
        </>
    )

}