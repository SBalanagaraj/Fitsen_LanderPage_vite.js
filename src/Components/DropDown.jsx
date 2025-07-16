import React from "react";
import { FaSortDown } from "react-icons/fa";

function DropDown({ titles = "", altStyle = {}, dropdownArray = [] }) {
  return (
    <div className="dropDownParent" style={altStyle}>
      <div className="customDropDown">
        <span>{titles}</span>
        <FaSortDown color="#8c8c8c" size={18} />
      </div>
      <div className="dropDownContent">
        {dropdownArray &&
          dropdownArray.length > 0 &&
          dropdownArray.map((data, index) => {
            return (
              <a key={index} href="" style={altStyle}>
                {data}
              </a>
            );
          })}
      </div>
    </div>
  );
}

export default DropDown;
