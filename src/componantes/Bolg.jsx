import React from 'react';
import { blog } from "../data"

function Bolg() {
          return (
                    <div className='mt-5 blog ' id='blog'>
                              <div className="container mt-5 ">
                                        <h1 data-aos="zoom-out" data-aos-duration="1301" className=' ms-auto me-auto text-center mt-5'>  Blog</h1>

                                        <div className="row mt-5 container p-3  justify-content-between overflow-hidden">

                                                  {blog.map((item, inK) => <div data-aos="zoom-in" className="col-sm-5 col-md-3 col-lg-3 bg-c blog-box overflow-hidedn p-0 mt-4" key={inK}>
                                                            <img src={item.cover} data-aos="zoom-in" alt="" className='container-fluide blog-img w-100 mb-3' />
                                                            <h5 className='c-w ms-2' data-aos="fade-left"> {item.author}</h5>
                                                            <h6 className=' ms-2 mb-2' data-aos="zoom-out">{item.date}</h6>
                                                            <p className='ms-2 mt-3 pe-2' data-aos="fade-right"> {item.desc}</p>
                                                  </div>)}
                                        </div>
                              </div>
                    </div>
          )
}

export default Bolg;
