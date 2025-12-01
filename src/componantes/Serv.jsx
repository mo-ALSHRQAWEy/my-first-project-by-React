import React from "react";
import { services } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const Services = () => {
          return (
                    <section id="serv" className="services w-100 overflow-hidden mt-5" >
                              <div className="container w-100">
                                        <h1 className="text-center pt-2 pb-1" data-aos="zoom-in"> Services</h1>
                                        <div className="  row container p-3   gap-5 w-100 align-items-center ps-md-2" >

                                                  {services.map((item, index) => (
                                                            <div className="mslg-auto  col-sm-12 bg-bl col-md-7 ms-lg-auto col-lg-3 align-items-center " data-aos="flip-left" key={index}>
                                                                      <h1> <i>{item.icon}</i></h1>
                                                                      <h3 className="c-w">{item.title}</h3>
                                                                      <p>{item.desc}</p>
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    </section>
          );
};

export default Services;
