import React from "react";
import "./contact.scss";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import message from "../../assets/message.svg";

export default function Contact() {
  return (
    <div className="contactWrapper">
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contactHeading">
              <h1>GET IN TOUCH WITH US!</h1>
            </div>
            <div className="contactPart  col-12 col-lg-4">
              <div className="partImg">
                <img src={location} alt="location" />
              </div>
              <div className="contactSub">
                <h4>ADDRESS</h4>
              </div>
              <div className="contactSmallHed">
                <h6>Soldotna, Alabama</h6>
                <div className="partText">
                  <p>35433 Kenai Spur Hwy</p>
                </div>
              </div>

              <div className="contactSmallHed">
                <h6>Vallejo, California</h6>
                <div className="partText">
                  <p>515 Tennessee St</p>
                </div>
              </div>

              <div className="contactSmallHed">
                <h6>Buena Vista, Colorado</h6>
                <div className="partText">
                  <p>708 U.S. 24</p>
                </div>
              </div>
            </div>
            <div className="contactPart col-12 col-lg-4">
              <div className="partImg">
                <img src={phone} alt="phone" />
              </div>
              <div className="contactSub">
                <h4>PHONE</h4>
              </div>
              <div className="contactSmallHed">
                <h6>Soldotna, Alabama</h6>
                <div className="partText">
                  <p>719 395-9998</p>
                </div>
              </div>

              <div className="contactSmallHed">
                <h6>Vallejo, California</h6>
                <div className="partText">
                  <p>484 494-8926</p>
                </div>
              </div>

              <div className="contactSmallHed">
                <h6>Buena Vista, Colorado</h6>
                <div className="partText">
                  <p>407 733-0275</p>
                </div>
              </div>
            </div>
            <div className="contactPart col-12 col-lg-4">
              <div className="partImg">
                <img src={message} alt="message" />
              </div>
              <div className="contactSub">
                <h4>MESSAGE</h4>
              </div>
              <div className="contactSmallHed">
                <h6>Soldotna, Alabama</h6>
                <div className="partText">
                  <p>contactgraylog.al@bmail.com</p>
                </div>
              </div>

              <div className="contactSmallHed">
                <h6>Vallejo, California</h6>
                <div className="partText">
                  <p>contactgraylog.cal@bmail.com</p>
                </div>
              </div>

              <div className="contactSmallHed">
                <h6>Buena Vista, Colorado</h6>
                <div className="partText">
                  <p>contactgraylog.col@bmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
