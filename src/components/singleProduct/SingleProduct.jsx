import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./singleProduct.scss";
import { Link } from "react-router-dom";
import pdf from "../../assets/peek/comicpeek.pdf";
import {
  addToCart,
  decreaseQty,
  increaseQty,
} from "../../app/features/slices/cartSlice";
import { addToWishList } from "../../app/features/slices/wishListSlice";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const dataComic = useSelector((state) => state.singleComic.comic);
  const wishList = useSelector((state) => state.wishList.wishListAll);
  const [kol, setKol] = useState(1);
  const increase = () => {
    setKol((prev) => prev + 1);
    if (kol > 6) {
      setKol(7);
    }
  };

  const decrease = () => {
    setKol((prev) => prev - 1);
    if (kol < 2) {
      setKol(1);
    }
  };

  const alreadyInWishList = wishList.find(
    (product) => product.id === dataComic.id
  );

  return (
    <div className="singleProductWrapper">
      <div className="bannerHolder">
        <div className="banner"></div>
      </div>
      <div className="singleProductHolder">
        <div className="singlePreviewHolder">
          <div className="singleComicImage">
            <div className="singleImgHolder">
              <img src={dataComic.img} alt={dataComic.episode} />
            </div>
          </div>
          <div className="singleComicDetails">
            <div className="singleDetailHolder">
              <div className="detailHeading">
                <h3>{dataComic.edition}</h3>
              </div>
              <div className="detailPrice">
                <h4>{dataComic.price}$</h4>
              </div>
              <div className="detailQtyAdd">
                <div className="qtyAddHolder">
                  <div className="detailQty">
                    <input
                      className="minus"
                      type="button"
                      value="-"
                      onClick={() => {
                        decreaseQty();
                        decrease();
                      }}
                    />
                    <input
                      type="number"
                      value={kol}
                      onChange={() => {
                        decreaseQty();
                        increaseQty();
                      }}
                    />
                    <input
                      className="plus"
                      type="button"
                      value="+"
                      onClick={() => {
                        increaseQty();
                        increase();
                      }}
                    />
                  </div>
                  <div className="addToCart">
                    {" "}
                    <button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            id: dataComic.id,
                            edition: dataComic.edition,
                            episodeNumber: dataComic.episodeNumber,
                            hero: dataComic.hero,
                            episode: dataComic.episode,
                            img: dataComic.img,
                            numberOfPages: dataComic.numberOfPages,
                            dateOfPublication: dataComic.dateOfPublication,
                            format: dataComic.format,
                            price: dataComic.price,
                            qty: kol,
                          })
                        );
                      }}
                    >
                      + ADD TO CART
                    </button>
                  </div>
                </div>
                <div
                  className="addToWishList"
                  onClick={() =>
                    dispatch(
                      addToWishList({
                        id: dataComic.id,
                        edition: dataComic.edition,
                        episodeNumber: dataComic.episodeNumber,
                        hero: dataComic.hero,
                        episode: dataComic.episode,
                        img: dataComic.img,
                        price: dataComic.price,
                      })
                    )
                  }
                >
                  {alreadyInWishList ? (
                    <p>
                      <i className="fa-solid fa-heart"></i> Added to Wish LIst
                    </p>
                  ) : (
                    <p>
                      <i className="fa-regular fa-heart"></i> Add to Wish List
                    </p>
                  )}
                </div>{" "}
                <div className="detailTable">
                  <table>
                    <tbody>
                      <tr>
                        <td className="tableDescription">HERO</td>
                        <td>{dataComic.hero}</td>
                      </tr>
                      <tr>
                        <td className="tableDescription">EPISODE NUMBER</td>
                        <td>{dataComic.episodeNumber}</td>
                      </tr>
                      <tr>
                        <td className="tableDescription">EPISODE</td>
                        <td>{dataComic.episode}</td>
                      </tr>
                      <tr>
                        <td className="tableDescription">NUMBER OF PAGES</td>
                        <td>{dataComic.numberOfPages}</td>
                      </tr>
                      <tr>
                        <td className="tableDescription">
                          DATE OF PUBLICATION
                        </td>
                        <td>{dataComic.dateOfPublication}</td>
                      </tr>
                      <tr>
                        <td className="tableDescription">FORMAT</td>
                        <td>{dataComic.format}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="peek">
                  <Link to={pdf} target="_blank" rel="noreferrer">
                    <button>Peek</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
