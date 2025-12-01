import React from "react"
import { project } from "../data"

//yarn or npm add react-countup

export function Counter() {
          return (
                    <>
                              <footer className="text-center py-4" style={{ background: "#1f1f1f" }}>
                                        <div className="container">
                                                  {/* Social Icons */}
                                                  <div className="mb-3" data-aos="fade-up">
                                                            <i className="fab fa-facebook-f mx-2" style={{ color: "#f4c10f", fontSize: "20px" }}></i>
                                                            <i className="fab fa-twitter mx-2" style={{ color: "#f4c10f", fontSize: "20px" }}></i>
                                                            <i className="fab fa-instagram mx-2" style={{ color: "#f4c10f", fontSize: "20px" }}></i>
                                                            <i className="fab fa-youtube mx-2" style={{ color: "#f4c10f", fontSize: "20px" }}></i>
                                                  </div>

                                                  {/* Copyright */}
                                                  <p style={{ color: "#ccc", fontSize: "14px" }} >
                                                            All Right Reserved 2026
                                                  </p>
                                        </div>
                              </footer>

                    </>
          )
}