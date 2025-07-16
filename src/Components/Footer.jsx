import React from "react";
import footerLogo from "../assets/images/Fotter_Logo.png";
import { TbSend } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import "../Styles/footer.css";
import InputComponent from "./InputComponent";

function Footer() {
  return (
    <>
      {/* -------------------------- Footer Block ---------------- */}
      <div className="footerBg">
        <div className="container">
          <div className="footerBlock">
            <div className="topBlock">
              <div className="leftBlock">
                <img src={footerLogo} alt="footerLogo" />
              </div>
              <div className="rightBlock">
                <ul>
                  <li>Informatie</li>
                  <li>Over ons</li>
                  <li>Visie en missie</li>
                  <li>Gebied</li>
                  <li>Hotels</li>
                  <li>Verhuurders</li>
                  <li>Contact</li>
                </ul>
                <ul>
                  <li>Voorwaarden</li>
                  <li>Website regels</li>
                  <li>Visie en missie</li>
                  <li> Boekingen bij hotels</li>
                  <li>Boekingen bij rentals</li>
                  <li> Privacy Policy</li>
                  <li>Algemene voorwaarden</li>
                </ul>
                <div className="newsBrief">
                  <h3>nieuwsbrief</h3>
                  <p>Ontvang wekelijks het nieuwste aanbod!</p>
                  <InputComponent
                    placeholder={"Vul uw e-mailadres in..."}
                    iconcomponent={<TbSend size={25} color="#363437" />}
                  />
                  <div className="AffiliateBlock">
                    <div>
                      <span>
                        <ImFacebook color="#8c8c8c" size={20} />
                      </span>
                      <span>
                        <FaTwitter color="#8c8c8c" size={20} />
                      </span>
                      <span>
                        <TiSocialGooglePlus color="#8c8c8c" size={20} />
                      </span>
                    </div>
                    <button>Affiliate login</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottomBlock">
              <p>
                © 2017 Fietsen in Tirol. Alle rechten voorbehouden. Gerealiseerd
                door <b>iBrandz Media</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="container">
          <div className="footerContainer">
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores
            </p>
            <div className="rightBlock">
              <button>Accepteren</button>
              <button className="btnClose">
                <IoCloseSharp color="#fff" size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
