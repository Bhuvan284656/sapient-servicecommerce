import React from "react";
import companyImg from "../images/gsk-logo.jpg";
import { IconContext } from "react-icons";
import { FaAngleDown, FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = props => {
  return (
    <header>
      <div className="header-logo">
        <div className="circular-image"></div>
        <h3>Commerce Intelligenc</h3>
        <img className="comapny-logo" alt="GSK" src={companyImg}></img>
        <div className="header-filters">
          <div className="filter">
            USA{" "}
            <IconContext.Provider
              value={{ className: "react-icons-arrow-down" }}
            >
              <IoIosArrowDown></IoIosArrowDown>
            </IconContext.Provider>
          </div>
          <div className="filter filter-product">
            Amazon{" "}
            <IconContext.Provider
              value={{ className: "react-icons-arrow-down" }}
            >
              <IoIosArrowDown></IoIosArrowDown>
            </IconContext.Provider>
          </div>
          <FaRegBell></FaRegBell>
        </div>
      </div>
    </header>
  );
};

export default Header;
