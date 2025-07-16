import "../Styles/Home.css";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import { IoLocationOutline } from "react-icons/io5";
import { MdStar } from "react-icons/md";

// carosal Component
export const CarosalBlock = ({
  sideHead = "",
  data = [],
  car1 = false,
  car3 = false,
  sliderPerPage = 1,
}) => {
  return (
    <>
      {data.length > 0 && (
        <div className="carosal1Section">
          <div className="container">
            <div className="carosalContainer">
              <div className="topHead">
                <p>{sideHead}</p>
                <div className="directionBtns"></div>
              </div>
              <div className="bottomBlock">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  loop={true}
                  spaceBetween={25}
                  slidesPerView={sliderPerPage}
                  navigation={{ enabled: true }}
                  autoplay={{ delay: 3500 }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    // when window width is >= 480px
                    480: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }}
                >
                  {car3 ? (
                    <>
                      {data.map((data, index) => {
                        return (
                          <SwiperSlide>
                            <div
                              data-aos="zoom-in"
                              data-aos-offset="200"
                              data-aos-easing="ease-in-sine"
                              data-aos-duration={index * 700}
                              className="ratingcard"
                            >
                              <span className="ratingTag">{data.tagName}</span>
                              <div className="bottomContent">
                                <p className="sideHead">{data.title}</p>
                                <p className="body">{data.content}</p>
                                <div className="ratingStar">
                                  <div className="leftRating">
                                    {Array.from({ length: data.ratings }).map(
                                      (data) => {
                                        return (
                                          <MdStar size={28} color="#ec561a" />
                                        );
                                      }
                                    )}
                                  </div>
                                  <p>{data.rating}</p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {data.map((data, index) => {
                        return (
                          <SwiperSlide
                            style={{ backgroundColor: "transparent" }}
                          >
                            <div
                              data-aos="zoom-in-up"
                              data-aos-offset="200"
                              data-aos-easing="ease-in-sine"
                              data-aos-duration={index * 500}
                              className="card"
                            >
                              <div className="imgWrapper">
                                <div className="hoverContent">
                                  {car1 ? (
                                    <button>Boek Nu</button>
                                  ) : (
                                    <img className="hovImg" src={data.logo} />
                                  )}
                                </div>
                                <img src={data.picture} alt="" />
                              </div>
                              <p className="content">{data.title}</p>
                              <p className="location">
                                {car1 && (
                                  <span>
                                    <IoLocationOutline />
                                  </span>
                                )}
                                {data.subTitle}
                              </p>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </>
                  )}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
