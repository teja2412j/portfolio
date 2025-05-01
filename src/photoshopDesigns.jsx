import React from "react";

import img1 from './assets/images/psDesigns/MMG UGADI.png';
import img2 from './assets/images/psDesigns/PAUL WALKER.jpg';
import img3 from './assets/images/psDesigns/Ugadi gtrac1.png';
import img4 from './assets/images/psDesigns/Untitled-1.png';
import img5 from './assets/images/psDesigns/govrn final front (3).jpg';
import img6 from './assets/images/psDesigns/mmg SHIVARATRI.png';
import img7 from './assets/images/psDesigns/ugadi jayblues.png';



function PhotoshopDesigns() {

    const psdImage = [
        { img: img6 },
        { img: img1 },
        { img: img3 },
        { img: img2 },
        { img: img4 },
        { img: img5 },
        { img: img7 },
    ]


    return (
        <>
            <div className="fig-design">
                <div className=" container projects">
                    <h4 className="proj-heading">Photoshop Poster Designs </h4>
                    <div className="psdDsignImages">
                        {
                            psdImage.map((image) => {
                                return <div>
                                    <img src={image.img} className="psimg" alt="photoshop design" />
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhotoshopDesigns;