import React from "react";
import "./shoppingCart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeFromCart } from "../../app/features/slices/cartSlice";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="shopBannerHolder">
        <div className="shopBanner">
          <h3>SHOPPING CART</h3>
        </div>
      </div>
      <div className="cart-container">
        {cart.cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/shop">
                <i className="fa-solid fa-arrow-left"></i>{" "}
                <span>Start shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <div className="serialNumber">
                <h6>#</h6>
              </div>
              <div className="product">
                <h6>PRODUCT</h6>
              </div>
              <div className="quantity">
                <h6>QTY</h6>
              </div>
              <div className="total">
                <h6>TOTAL</h6>
              </div>
            </div>
            <div className="cart-items">
              {cart.cart?.map((cartItem, index) => (
                <div className="cart-item" key={index}>
                  <h6>{index + 1}</h6>
                  <div className="cart-product">
                    <div className="cart-product-pic-div">
                      <img src={cartItem.img} alt={cartItem.id} />
                    </div>

                    <div className="cart-product-details">
                      <h6>{cartItem.hero}</h6>
                      <p>{cartItem.episode}</p>
                      <p>${cartItem.price}</p>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(cartItem));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="detailQty">{cartItem.qty}</div>
                  <div className="cart-product-total-price">
                    ${cartItem.amount}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-stuff">
                <div className="addToCart">
                  <button
                    onClick={() => {
                      dispatch(clearCart());
                    }}
                  >
                    CLEAR CART
                  </button>
                </div>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cart.totalPrice}</span>
                  </div>
                  <div className="addToCart">
                    {" "}
                    <button>CHECK OUT</button>
                  </div>
                  <div className="start-shopping">
                    <Link to="/shop">
                      <i className="fa-solid fa-arrow-left"></i>{" "}
                      <span>Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
