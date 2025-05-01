import React from "react";
import { FaLink } from "react-icons/fa6";
export default function ProjectComp({imgSrc,imgDetail,imgLink,linkName}) {
    return (
        <>
            <div class="card proj-block" style={{width:"100%",backgroundColor:"#323434",color:"#fff"}}>
                <img src={imgSrc} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text tx1">{imgDetail} </p>
                    <a href={imgLink} className="proj-para"><FaLink /> {linkName}</a>
                </div>
            </div>
        </>
    )

}