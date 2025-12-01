import React from "react"
import logo from "./image/logo.png"

function NaveBar() {
          return (
                    <>
                              <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                                        <div className="container-fluid container">
                                                  <img
                                                            className="me-5 ms-5"
                                                            src={logo}
                                                            alt=""
                                                            data-aos="zoom-in-right"
                                                  />
                                                  <button
                                                            className="navbar-toggler"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#navbarScroll"
                                                            aria-controls="navbarScroll"
                                                            aria-expanded="false"
                                                            aria-label="Toggle navigation"
                                                  >
                                                            <span className="navbar-toggler-icon"></span>
                                                  </button>
                                                  <div className="collapse navbar-collapse" id="navbarScroll">
                                                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-between w-100 pe-5 ps-5 ms-5 me-2">
                                                                      <li className="nav-item">
                                                                                <a className="nav-link active" aria-current="page" href="#hero">
                                                                                          Home
                                                                                </a>
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <a className="nav-link" href="#about">
                                                                                          About
                                                                                </a>

                                                                      </li>

                                                                      <li className="nav-item">
                                                                                <a className="nav-link" href="#porti">
                                                                                          portifolio
                                                                                </a>
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <a className="nav-link" href="#serv">
                                                                                          services
                                                                                </a>
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <a className="nav-link" href="#ts">
                                                                                          Testimonials
                                                                                </a>
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <a className="nav-link" href="#blog">
                                                                                          Blog
                                                                                </a>
                                                                      </li>
                                                                      <li className="nav-item">
                                                                                <a className="nav-link" href="#contact">
                                                                                          Contact
                                                                                </a>
                                                                      </li>
                                                            </ul>
                                                  </div>
                                        </div>
                              </nav>
                    </>
          )
}

export default NaveBar
