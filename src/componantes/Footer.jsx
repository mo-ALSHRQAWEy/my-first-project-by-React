import React from "react";
import { contact } from "../data";
import 'aos/dist/aos.css';
import AOS from "aos";
import { useEffect } from "react";

function Footer() {

          useEffect(() => {
                    AOS.init({ duration: 1700 });
          }, []);

          return (
                    <>
                              <footer className="py-5" id="contact">
                                        <div className="container">
                                                  <div className="row justify-content-between mt-5">

                                                            <h1 className="text-center mb-4 c-pr" >
                                                                      Keep In Touch
                                                            </h1>
                                                            <div className="col-sm-11 col-md-5 col-lg-5 mt-5">
                                                                      <form>


                                                                                <div className="d-flex gap-3 mb-3">
                                                                                          <input
                                                                                                    type="text"
                                                                                                    className="form-control"
                                                                                                    placeholder="Name"
                                                                                                    data-aos="flip-left"
                                                                                          />
                                                                                          <input
                                                                                                    type="email"
                                                                                                    className="form-control"
                                                                                                    placeholder="Email"
                                                                                                    data-aos="flip-right"
                                                                                          />
                                                                                </div>

                                                                                <input
                                                                                          type="text"
                                                                                          className="form-control mb-3"
                                                                                          placeholder="Subject"
                                                                                          data-aos="flip-up"
                                                                                />

                                                                                <textarea
                                                                                          rows="7"
                                                                                          className="form-control mb-3"
                                                                                          placeholder="Message"
                                                                                          data-aos="flip-down"
                                                                                ></textarea>

                                                                                <button

                                                                                          className="btn-me activ w-100 fw-bold"
                                                                                          data-aos="zoom-in-up"
                                                                                >
                                                                                          Submit
                                                                                </button>
                                                                      </form>
                                                            </div>

                                                            {/* Right Side - Contact Info */}
                                                            <div className="col-sm-11 col-md-5 col-lg-4 mt-5">
                                                                      {contact.map((item, i) => (
                                                                                <div
                                                                                          key={i}
                                                                                          className="d-flex align-items-start mb-3 p-3 rounded"
                                                                                          style={{
                                                                                                    background: "#252525",
                                                                                                    color: "#fff",
                                                                                                    gap: "15px"
                                                                                          }}
                                                                                          data-aos="zoom-in"
                                                                                >
                                                                                          <i style={{ fontSize: "22px" }}>{item.icon}</i>
                                                                                          <div>
                                                                                                    <p className="m-0">{item.text1}</p>
                                                                                                    <p className="m-0">{item.text2}</p>
                                                                                          </div>
                                                                                </div>
                                                                      ))}
                                                            </div>

                                                  </div>
                                        </div>
                              </footer>
                    </>
          );
}

export default Footer;
