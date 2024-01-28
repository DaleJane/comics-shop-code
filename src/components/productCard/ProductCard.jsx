import React from "react";
import "./productCard.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSingleComic } from "../../app/features/slices/singleProductSlice";

export default function ProductCard({
  id,
  img,
  edition,
  episodeNumber,
  price,
  hero,
  episode,
  numberOfPages,
  dateOfPublication,
  format,
}) {
  const dispatch = useDispatch();
  return (
    <div className="productWrapper col-6 col-sm-6 col-md-4 col-lg-3">
      <div className="cardHolder">
        <Link
          to={`singleProduct/${hero}+${edition}+${episode}+${episodeNumber}`}
          onClick={() =>
            dispatch(
              changeSingleComic({
                id: id,
                img: img,
                edition: edition,
                episodeNumber: episodeNumber,
                price: price,
                hero: hero,
                episode: episode,
                numberOfPages: numberOfPages,
                dateOfPublication: dateOfPublication,
                format: format,
              })
            )
          }
        >
          <img src={img} alt="slika" />
        </Link>
        <h6>
          {edition} {episodeNumber}
        </h6>
        <p>{price}$</p>
      </div>
    </div>
  );
}
