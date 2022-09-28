import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42864220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
            rating={5}
          />
          <Product />

          {/*Product*/}
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
