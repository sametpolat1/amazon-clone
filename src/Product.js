import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <StarIcon className="starIcon" />
          <StarIcon className="starIcon" />
          <StarIcon className="starIcon" />
        </div>
      </div>
      <img src="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg" alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
