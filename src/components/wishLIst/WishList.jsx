import React from "react";
import "./wishList.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../app/features/slices/wishListSlice";

export default function WishList() {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.wishListAll);
  return (
    <div className="wishListWrapper">
      <div className="wishListHolder">
        <div className="shopBannerHolder">
          <div className="shopBanner">
            <h3>WISH LIST</h3>
          </div>
        </div>
        {wishList.length === 0 ? (
          <div className="wish-empty">
            <h4>Your wish list is currently empty</h4>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              {wishList.map((wishItem) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                  key={wishItem.id}
                >
                  <div className="wishListPicHolder">
                    <div className="wishPic">
                      <img src={wishItem.img} alt={wishList.id} />
                    </div>
                    <div className="wishPicBlack">
                      <div
                        className="wishPicBlackX"
                        onClick={() => {
                          dispatch(removeFromWishList(wishItem));
                        }}
                      >
                        <i className="fa-regular fa-circle-xmark"></i>
                      </div>
                    </div>
                  </div>
                  <div className="wishListDetails">
                    <h6>
                      {wishItem.hero} {wishItem.episodeNumber}
                    </h6>
                    <h6>{wishItem.edition}</h6>
                    <h6>{wishItem.episode}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
