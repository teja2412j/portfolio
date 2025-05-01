import React from "react";
import MMgfront from "./assets/images/MMG front.jpg";
import MMgback from "./assets/images/MMG back.jpg";
import govfront from "./assets/images/MMG GOVERNMENT FRONT.jpg";
import govback from "./assets/images/MMG GOVERNMENT BACK.jpg"
export default function FigmaFlyre() {


  const FlyreBlock = (props) => {

    const { flyHead, flyImg1, flyImg2 } = props;

    return (
      <div className="flyre-block">
        <h3 className="flyre-heading">{flyHead}</h3>
        <div className="row">
          {/* column one  */}
          <div className="col-sm-6 mt-2">
            <img src={flyImg1} alt="mmg design image" className="flyre-img" />
          </div>
          {/* column two  */}
          <div className="col-sm-6 mt-2">
            <img src={flyImg2} alt="mmg design image" className="flyre-img" />
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {/* flyres design block  */}
      <FlyreBlock flyHead="MMG Vakratund Gruha Nirmana" flyImg1={MMgfront} flyImg2={MMgback} />
      <FlyreBlock flyHead="MMG Anugraha Enclave" flyImg1={govfront} flyImg2={govback} />
      {/* flyres design block end */}
    </>
  )
}