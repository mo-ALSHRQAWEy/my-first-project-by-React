import React from "react";
import imgABOUT from "./image/man.png"

function About() {
          return (
                    <>
                              <div className="about row overflow-hidden pe-3 ps-3 container p-2 pt-5 mt-5 mt-2 pb-5" id="about">
                                        <div className="col-md-5  col-lg-5 col-sm-7 align-items-center ps-lg-5 ms-lg-3 ImageRight pt-5  mt-4 "> <img src={imgABOUT} className="container-fluid" alt="" data-aos="fade-right" data-aos-easing="ease-in-back" data-aos-duration="500" data-aos-delay="5" /></div>
                                        <div className="col-sm-12 col-md-4 col-lg-6 col-sm-10 imfoLeft pt-5 mt-3">
                                                  <h2 className=" mb-4" data-aos="zoom-in" > About me </h2>
                                                  <p data-aos="fade-left" data-aos-easing="ease-in-back"
                                                            data-aos-duration="1000" data-aos-delay="15">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>

                                                  <p data-aos="fade-right" data-aos-easing="ease-in-back"
                                                            data-aos-duration="1100" data-aos-delay="20">magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
                                                  <div className="btnCvCreat d-flex justify-content-between w-lg-75 " >
                                                            <div className="  ps-sm-3 ps-2 ms-2" data-aos="zoom-left"></div>  <button className="btn-me activ   ps-sm-3 ps-3 ms-2 p-3">  download cv</button>
                                                            <div className=" p-2  ps-sm-3 ps-3 ms-2" data-aos="zoom-in-right"> <button className="btn-me  p-2  ps-sm-3 ps-3 ms-2 p-3"  >  creat your web</button></div>

                                                  </div>
                                        </div>
                              </div>

                    </>
          )
}

export default About;