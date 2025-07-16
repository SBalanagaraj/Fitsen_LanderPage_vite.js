import Carousel from "react-bootstrap/Carousel";
import { useRef, useState } from "react";

import sliderImg from "../assets/images/hero_Banner1.png";
import sliderImg2 from "../assets/images/hero_Banner2.png";
import sliderImg3 from "../assets/images/hero_Banner_3.png";

import videos from "../assets/Videos/cycleDrive.mp4";
import InputComponent from "../Components/InputComponent";
import { FaPlay } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import "../Styles/Home.css";

import {
  textContent,
  carosal1Content,
  carosal2Content,
  carosal3Content,
} from "../utiles/Datas";
import { CarosalBlock } from "../Components/CarosalBlock";
import Buttons from "../Components/Buttons";
import DropDown from "../Components/DropDown";

function Home() {
  const tabBtnText = ["Hotels", "fiets huren", "fietsroutes"];
  const [playVid, setPlayVid] = useState(false);
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // HeroBanner
  const HeroBanner = ({ data = {}, banner2 = false }) => {
    return (
      <>
        <div
          data-aos="zoom-in"
          data-aos-duration="400"
          className="heroSection2"
          style={{
            backgroundImage: `url(${data.banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div
            className="hoverBanner"
            style={{
              backgroundColor: banner2
                ? "rgb(244 146 82 /60%)"
                : "rgb(45 44 40 /75%)",
            }}
          />
          <div className="container">
            <div className="hero2Block">
              <h1>{data.title}</h1>
              <p>{data.subTitle}</p>
              <button
                style={{
                  backgroundColor: banner2 ? "#ffffff" : "#ff873a",
                  color: banner2 ? "#ff873a" : "#ffffff",
                }}
              >
                {data.btnTitle}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* ----------------------- Hero Carosal 1 ------------------- */}
      <div>
        <Carousel indicators={false} className="hero1" data-bs-theme="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg} alt="First slide" />
            <Carousel.Caption className="captions">
              <h5>Fietsen in tirol</h5>
              <p>tours, e-bikes, fietsverhuur en routes online</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg2} alt="First slide" />
            <Carousel.Caption className="captions">
              <h5>Fietsen in tirol</h5>
              <p>tours, e-bikes, fietsverhuur en routes online</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sliderImg3} alt="First slide" />
            <Carousel.Caption className="captions">
              <h5>Fietsen in tirol</h5>
              <p>tours, e-bikes, fietsverhuur en routes online</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ----------------------- Tab Menu Section ---------------- */}
      <div className="tabBlock">
        <div className="container">
          <div className="tabBarContainer">
            <div className="tabBtns">
              {tabBtnText.map((data, index) => {
                const active = index == activeTab;
                return (
                  <button
                    style={{
                      backgroundColor: active ? "#ff873a" : "#363437",
                      color: !active ? "#8c8c8c" : "#ffffff",
                    }}
                    onClick={() => {
                      setActiveTab(index);
                    }}
                  >
                    {data}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div id="hotel" className="tabContents">
          <div className="container">
            {/* tab1 */}
            {activeTab == 0 && (
              <form action="" className="tanForms">
                <InputComponent
                  type="search"
                  placeholder={"Zoek op plaats, hotel, etc..."}
                  iconcomponent={<IoSearch size={18} color={"#8c8c8c"} />}
                />
                <InputComponent
                  type="search"
                  placeholder={"Check-in"}
                  iconcomponent={<FaCalendarAlt size={18} color={"#8c8c8c"} />}
                />
                <InputComponent
                  // altStyle={{ width: "12.5%" }}
                  type="search"
                  placeholder={"Check-out"}
                  iconcomponent={<FaCalendarAlt size={18} color={"#8c8c8c"} />}
                />
                <DropDown
                  // altStyle={{ width: "12.5%" }}
                  titles="Type."
                  dropdownArray={[
                    "testing",
                    "lorem ipsum dollar",
                    "currency value",
                  ]}
                />
                <Buttons titles="Hotel vinden" />
              </form>
            )}
            {/* tab2 */}
            {activeTab == 1 && (
              <form action="" className="tanForms">
                <InputComponent
                  altStyle={{ width: "30%" }}
                  type="search"
                  placeholder={"Zoek op plaats, hotel, etc..."}
                  iconcomponent={<IoSearch size={18} color={"#8c8c8c"} />}
                />
                <InputComponent
                  altStyle={{ width: "17%" }}
                  type="search"
                  placeholder={"Check-in"}
                  iconcomponent={<FaCalendarAlt size={18} color={"#8c8c8c"} />}
                />

                <Buttons titles="fiets vinden" />
              </form>
            )}
            {/* tab3 */}
            {activeTab == 2 && (
              <form action="" className="tanForms">
                <DropDown
                  altStyle={{ width: "40%" }}
                  titles="Gebied, plaats, etc."
                  dropdownArray={[
                    "testing",
                    "lorem ipsum dollar",
                    "currency value",
                  ]}
                />

                <DropDown
                  altStyle={{ width: "20%" }}
                  titles="Type."
                  dropdownArray={[
                    "testing",
                    "lorem ipsum dollar",
                    "currency value",
                  ]}
                />
                <Buttons titles="Route zoeken" />
              </form>
            )}
          </div>
        </div>
      </div>
      {/* ------------------------- Video Section ------------------- */}
      <div className="videoSection">
        <div className="container">
          <div className="videoBlock">
            <div
              data-aos="flip-left"
              data-aos-delay="600"
              data-aos-anchor=".example-selector"
              className="leftBlock"
            >
              <div>
                <h4>
                  <span>Over</span> fietsen in tirol
                </h4>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  rtione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem ipsum quia dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="1000"
              data-aos-anchor=".example-selector"
              className="rightBlock"
            >
              <div>
                <video
                  ref={videoRef}
                  src={videos}
                  controls={playVid}
                  onClick={() => {
                    if (playVid) {
                      videoRef.current.pause();
                    } else {
                      videoRef.current.play();
                    }
                    setPlayVid(!playVid);
                  }}
                  onEnded={() => {
                    setPlayVid(false);
                  }}
                  onPause={() => {
                    setPlayVid(false);
                  }}
                />
                {!playVid && (
                  <button
                    onClick={() => {
                      console.log("---its work");
                      setPlayVid(!playVid);
                      videoRef.current.play();
                    }}
                  >
                    <FaPlay className="play" color="#363437" size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------Text Suggestion Block ----------- */}
      <div className="textSuggestion">
        <div className="container">
          <div className="textWrapper">
            <div className="top">
              <h2>Hoe het werkt</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              </p>
            </div>
            <div className="bottom">
              {textContent.map((data, index) => {
                const slNo = index + 1;
                return (
                  <div className="card">
                    <p className="sideHead">
                      <span>{slNo}</span>
                      {data.sidehead}
                    </p>
                    <p className="content">{data.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------Carosal1 Block ----------------- */}
      <CarosalBlock
        sideHead="Meest populaire hotels"
        data={carosal1Content}
        car1={true}
        sliderPerPage={4}
      />

      {/* -------------------------- heroSec2 ---------------------- */}
      <HeroBanner
        data={{
          banner: sliderImg2,
          title: "De beste fietsroutes",
          subTitle:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
          btnTitle: "vind ze hier",
        }}
      />
      {/* --------------------------Carosal2 Block ----------------- */}
      <CarosalBlock
        sideHead="Populairste fietsverhuurders"
        data={carosal2Content}
        sliderPerPage={3}
      />
      {/* ------------------------- heroSec3 ----------------------- */}
      <HeroBanner
        banner2={true}
        data={{
          banner: sliderImg3,
          title: "Adverteren?",
          subTitle:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut",
          btnTitle: "contact",
        }}
      />
      {/* --------------------------Carosal3 Block ----------------- */}
      <CarosalBlock
        sideHead="Laatste beoordelingen"
        data={carosal3Content}
        car3={true}
        sliderPerPage={3}
      />
    </>
  );
}

export default Home;
