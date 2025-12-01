import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

import { testimonials } from "../data"

function Test() {
          return (
                    <section className=" mt-5 test testimonials-section py-5" id="ts">
                              <div className="container ">
                                        <Swiper
                                                  modules={[Navigation, Pagination, Autoplay]}
                                                  autoplay={{
                                                            delay: 3900,
                                                            disableOnInteraction: true,
                                                  }}
                                                  loop={true}
                                                  slidesPerView={1}
                                                  navigation

                                                  className="mySwiper"
                                        >
                                                  {testimonials.map((item) => (
                                                            <SwiperSlide key={item.name}>
                                                                      <div className="text-center text-light">


                                                                                <div className="quote-icon mb-4" data-aos="zoom-out" data-aos-duration="3000">
                                                                                          <FormatQuoteIcon style={{ color: "#f5c542", fontSize: "50px" }} />
                                                                                </div>


                                                                                <p className="lead mx-auto w-75" data-aos="fade-left">
                                                                                          {item.text}
                                                                                </p>


                                                                                <div className="profile-wrapper mt-4">
                                                                                          <img src={item.image} className=" container-fluide test-img" alt="" data-aos="zoom-in" />
                                                                                </div>


                                                                                <h4 className="mt-3" data-aos="zoom-in-left">{item.name}</h4>
                                                                                <p className="role" data-aos="zoom-in-right">{item.post}</p>
                                                                      </div>
                                                            </SwiperSlide>
                                                  ))}
                                        </Swiper>
                              </div>
                    </section>
          )
}
export default Test;