import React, { useState } from "react";
import { portfolio } from "./data/data.js";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"


function Portfolio() {
  const allCategories = ["all", ...new Set(portfolio.map((item) => item.category))];
  const [category, setCategory] = useState(allCategories);
  const [list, setList] = useState(portfolio);


  const filterItems = (cat) => {
    if (cat === "all") {
      setList(portfolio);
    } else {
      const newList = portfolio.filter((item) => item.category === cat);
      setList(newList);
    }
  };
  function add(event) {

    document.querySelectorAll(".btn-me").forEach(btn => btn.classList.remove("activ"));

    event.currentTarget.classList.add("activ");
  }


  return (
    <div className=" alinge-items-center mt-5 pt-5 text-center  d-flex flex-column ps-lg-5 pe-lg-5" id="porti">
      <div className="d-flex justify-content-between flex-wrap gap-3 p-5 psm-2 text-center ps-5  pe-5 alinge-items-center w-lg-75 ms-auto me-auto">
        {category.map((cat) => (
          <div data-aos="zoom-out-down" data-aos-duration="500">
            <button

              key={cat}
              className="btn-me p-lg-2 ps-lg-5 pe-lg-5 p-2 ps-1 pe-1 "
              onClick={(e) => { filterItems(cat); add(e); }}

            >
              {cat}
            </button>
          </div>))}
      </div>

      <div className="ms-2  container row alinge-items-center">
        {list.map((item) => (
          <div className="col-lg-4 port-box col-md-5 position-relative col-sm-6 ms-auto me-auto mt-3" key={item.id} data-aos="fade-up">
            <div className="container-fluid " data-aos="zoom-in"  >
              <img src={item.cover} alt={item.title} className="container-fluid w-100" />
            </div>
            <div className="overlay  d-flex  flex-column position-absolute ">
              <h3 className="mt-3">{item.title}</h3>
              <span className="mt-3">{item.name}</span>
              <span> <VisibilityOutlinedIcon /></span>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Portfolio;
