import React from "react";
import bannerImg from './assets/images/111.png';
import './mainPage.css'
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Resume from './pdf/Tejas_H_CV.pdf'
function BannerDetails() {

     
 
      return (
            <>
        {/* --------------------  main banner ----------------------- */}
                  <div className=" mainbanner">
                        <div className="row main_details container m-auto">
                              <div className="col-lg-7 col-md-7 col-sm-12 d-flex flex-column main_block1">
                                    <div>
                                          <h1 className="heading1">FRONTEND</h1>

                                          <div className="dev-paras ">
                                                <h2 className="heading2">DE</h2>
                                                <div>
                                                      <p className="paras">VELOPER</p>
                                                      <p className="paras">SIGNER</p>
                                                </div>
                                          </div>

                                          <p className="main_para">
                                                I am <span>Tejas</span> web-developer with a passion of
                                                designing and developing responsive websites.
                                          </p>
                                          <button className="view_work_btn btn"><a href={Resume} target="_blank"  style={{textDecoration:"none",color:"#15DCFF"}}>View Resume</a></button>

                                    </div>
                              </div>
                              <div className="col-lg-5 col-md-5 col-sm-12  profile_img">
                                    <img src={bannerImg} alt="" />
                              </div>
                        </div>

                  </div>
                   {/* --------------------  main banner end----------------------- */}
            </>
      )
}

export default BannerDetails;