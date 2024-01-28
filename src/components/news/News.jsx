import React from "react";
import "./news.scss";

import pic1 from "../../assets/news/news1.jpg";
import pic2 from "../../assets/news/news2.jpg";
import pic3 from "../../assets/news/news3.jpg";
import pic4 from "../../assets/news/news4.jpg";
import pic5 from "../../assets/news/news5.jpg";
import pic6 from "../../assets/news/news6.jpg";
import pic7 from "../../assets/news/news7.jpg";
import pic8 from "../../assets/news/news8.jpg";

export default function News() {
  return (
    <div className="newsWrapper">
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic1} alt="news1" />
              </div>
              <div className="cardHeading">
                <h6>MARVEL</h6>
              </div>
              <div>
                <h5>Old and new comics</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis magnam reiciendis perferendis tempore eum illum
                  architecto! Ipsum non.
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic2} alt="news2" />
              </div>
              <div className="cardHeading">
                <h6>Vintage comics</h6>
              </div>
              <div>
                <h5>Read comics online</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                  blanditiis eveniet sit dolorem illo quas quo vitae, doloribus
                  ex quod.
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic3} alt="news3" />
              </div>
              <div>
                <h6 className="cardHeading">DC</h6>
              </div>
              <div>
                <h5>Old and new comics</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  assumenda quidem magni porro ipsum error?
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic4} alt="news4" />
              </div>
              <div>
                <h6 className="cardHeading">Kids</h6>
              </div>
              <div>
                <h5>Best comics for kids</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                  magni pariatur sunt dolorem vitae soluta?
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic5} alt="news5" />
              </div>
              <div>
                <h6 className="cardHeading">Events</h6>
              </div>
              <div>
                <h5>Upcoming events</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  deleniti ullam commodi perspiciatis placeat tempora?
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic6} alt="news6" />
              </div>
              <div>
                <h6 className="cardHeading">Comics caravan</h6>
              </div>
              <div>
                <h5>Where are we?</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  mollitia modi veniam nam ipsam fugiat.
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic7} alt="news7" />
              </div>
              <div>
                <h6 className="cardHeading">Comic point</h6>
              </div>
              <div>
                <h5>See all our places</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi, reprehenderit.
                </p>
              </div>

              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
            <div className="newsHolder col-10 col-sm-6 col-md-4 col-lg-3">
              <div className="newsPic">
                <img src={pic8} alt="news8" />
              </div>
              <div>
                <h6 className="cardHeading">Festival</h6>
              </div>
              <div>
                <h5>Festival dates</h5>
              </div>
              <div className="cardPHolder">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur sit provident saepe. Modi, consequuntur esse?
                </p>
              </div>
              <div className="readHolder">
                <h5>read more...</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
