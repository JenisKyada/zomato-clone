import React from "react";
import Slider from "react-slick";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";

const topBrandList = [
  {
    id: 1,
    name: "La Pino'z Pizza",
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160258.png",
  },
  {
    id: 2,
    name: "McDonald's",
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165256.png",
  },
  {
    id: 3,
    name: "Burger King",
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188400.png",
  },
  {
    id: 4,
    name: "Jalaram Khichdi",
    time: "34 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/001615df47b9d5b51cc23f19e0e819d5_1688644215.png",
  },
  {
    id: 5,
    name: "Radhe Dhokla",
    time: "26 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/33817818ed447c69423bfaf01f633a29_1617972828.png",
  },
  {
    id: 6,
    name: "Kailash Sweets & Snacks",
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2217dcd3642b3cdd25f1408b4dbff5f1_1605077969.png",
  },
  {
    id: 7,
    name: "Mahalaxmi Juice & Fastfood Corner",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/391ef4a08c761310e9460008c2acaeee_1571919223.png",
  },
  {
    id: 8,
    name: "Mahesh Pav Bhaji",
    time: "27 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c57f22bdf13844d8a566f26c5753ef5d_1611306689.png",
  },
  {
    id: 9,
    name: "Domino's Pizza",
    time: "38 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806960.png",
  },
  {
    id: 10,
    name: "Trishiv Chinese Corner",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/8acd3229db5ca430a6be045a0fdb3724_1583389614.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  alt={brand.name}
                  className="top-brands-image"
                />
              </div>
              <div>
                <div className="topbrand-item-title">{brand.name}</div>
                <div>{brand.time}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
