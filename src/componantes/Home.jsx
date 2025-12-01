import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Home() {
          const el = useRef(null);

          useEffect(() => {

                    const typed = new Typed(el.current, {
                              strings: ["mo sobhy ", "frontEnd desigen ", "clean code", 'responsive desigene '],
                              typeSpeed: 40,
                              backSpeed: 50,
                              loop: true,
                    });


                    return () => {
                              typed.destroy();
                    };
          }, []);

          return (
                    <div className="home" id="hero">
                              <div className="home overflow-hidden container p-1 mt-5 flex-column d-flex justify-content-center ">
                                        <h4 data-aos="fade-right" className="text-center mb-2 mt-3">
                                                  Hello, I am
                                        </h4>

                                        <h1 data-aos="fade-left" className="text-center mt-2 mb-2 w-100" >
                                                  <span className="mainTitle" ref={el}></span>
                                                  <p className="ms-lg-5 me-lg-5 ps-lg-5 pe-lg-5"><p data-aos="fade-right" className="text-center  mt-2 mb-2 ps-3 pe-3 ms-lg-5 me-lg-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, veniam reiciendis maxime eos ipsum nam suscipit atque architecto unde quaerat repellendus fuga deleniti quam animi nostrum totam</p></p>

                                        </h1>
                                        <div data-aos="fade-up"> </div> <button className=" btn-me p-3 ms-auto me-auto mt-3 " > desigen your web </button>
                              </div> </div >
          );

}

export default Home;
