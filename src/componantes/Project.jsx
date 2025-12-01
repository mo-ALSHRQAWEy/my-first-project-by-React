import React from "react";
import { project } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Project() {

          return (
                    <>
                              <div className="cointainer overflow-hidden pro">

                                        <div className="  row container p-1   w-100 align-items-center " >
                                                  {project.map((item, index) => (
                                                            <div className=" col-sm-6 mt-5 col-md-4 ms-lg-auto col-lg-2 d-flex flex-column align-items-center " data-aos="zoom-in" key={index}>
                                                                      <h1 className="c-w text-align-center "> <i className="text-align-center fs-4 ">{item.icon} </i></h1>
                                                                      <h3 className="c-pr">{item.num}</h3>
                                                                      <p className=" ">{item.title}</p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>


                    </>
          )
}

export default Project;