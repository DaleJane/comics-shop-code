import React from "react";
import "./imageSlider.scss";
import { sliderData } from "../../app/data/dataAll";
import { Link } from "react-router-dom";
import { nextSlide, prevSlide } from "../../app/features/slices/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import bcgr from "../../assets/sliderBackground.jpg";
import bcgrSmall from "../../assets/sliderBackgroundSmall.jpg";
import logo1 from "../../assets/bzzzsection/obojeniprogramlogo.png";
import logo2 from "../../assets/bzzzsection/odabraneprice.png";
import logo3 from "../../assets/bzzzsection/zslogo2.png";
import logo4 from "../../assets/logoslider/logomali3.png";
import logo5 from "../../assets/logoslider/logomali8.png";
import logo6 from "../../assets/logoslider/logomali13.png";
import logo7 from "../../assets/logoslider/logomali15.png";

export default function ImageSlider() {
  const slideIndex = useSelector((state) => state.slider.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="sliderWrapper">
        <img className="big" src={bcgr} alt="bcgr" />
        <img className="small" src={bcgrSmall} alt="bcgr" />
        <div className="sliderHolder">
          {sliderData.map((item, index) => (
            <div className="textPicHolder" key={item.id}>
              <div
                className={
                  parseInt(item.id) === slideIndex
                    ? "activeSlide"
                    : "inactiveSlide"
                }
              >
                <div className="sliderText">
                  {parseInt(item.id) === slideIndex && <h1>{item.heading}</h1>}
                  {parseInt(item.id) === slideIndex && <p>{item.text}</p>}
                </div>
                <div className="sliderPic">
                  {parseInt(item.id) === slideIndex && (
                    <img src={item.img} alt={item.heading}></img>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div
            className="prev"
            onClick={() => dispatch(prevSlide(slideIndex - 1))}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div
            className="next"
            onClick={() => dispatch(nextSlide(slideIndex + 1))}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
      <div className="homeIcons">
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo1} alt="logo1" />
          </Link>
        </div>
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo2} alt="logo2" />
          </Link>
        </div>
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo3} alt="logo3" />
          </Link>
        </div>
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo4} alt="logo4" />
          </Link>
        </div>
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo5} alt="logo5" />
          </Link>
        </div>
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo6} alt="logo6" />
          </Link>
        </div>
        <div className="smallLogoHolder col-12">
          <Link to="/">
            <img src={logo7} alt="logo7" />
          </Link>
        </div>
      </div>
    </div>
  );
}
