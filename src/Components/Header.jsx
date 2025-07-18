import React from "react";
import "../Styles/header.css";
import logo from "/public/images/logo_fitsen.png";
import { FaCaretDown } from "react-icons/fa6";
import { Flag } from "semantic-ui-react";
import { RiMenu3Fill } from "react-icons/ri";

export const Header = () => {
  const flagRenderer = (item) => <Flag name={item.countryCode} />;
  const country = [
    { name: "Afghanistan", countryCode: "af" },
    { name: "Aland Islands", countryCode: "ax" },
    { name: "Albania", countryCode: "al" },
    { name: "Algeria", countryCode: "dz" },
  ];

  const dropdown = [
    "Fietsen in Tirol",
    "Meest gestelde vragen",
    "Lid worden",
    "Hoe het werkt",
  ];

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="headerLeft">
            <img src={logo} />
          </div>
          <div className="headerRight">
            <div className="top">
              <p>Email : info@fietsenintirol.nl</p>
              <div className="flagDrop">
                <Flag name="al" className="flag" />
                <FaCaretDown color="#8c8c8c" />
              </div>
            </div>
            <div className="bottom">
              <ul>
                <li>Home</li>
                <li>over ons</li>
                <li>gebied</li>
                <li>Hotels</li>
                <div className="dropBtn">
                  <div className="btnParent">
                    <span>Informatie</span>
                    <FaCaretDown className="dropIcon" />
                  </div>
                  <div className="dropDownContent">
                    {dropdown.map((data, index) => {
                      return (
                        <a key={index} href="">
                          {data}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="responsiveMenu">
            <div className="flagDrop">
              <Flag name="al" className="flag" />
              <FaCaretDown color="#8c8c8c" />
            </div>
            <RiMenu3Fill className="menuIcon" size={28} color="#8c8c8c" />
          </div>
        </div>
      </div>
    </div>
  );
};
