import React from "react";
import "./diningOut.css";
import Collection from "../common/collection";
import { diningOut } from "../../data/diningOut";
import Filters from "../common/filters";
import ExploreSection from "../common/exploreSection";

const collectionList = [
  {
    id: 1,
    title: "13 Unmissable Gujarati Delicacies",
    cover:
      "https://b.zmtcdn.com/data/collections/4531ccbcfd8b86011b48929470daee3e_1686316381.png?output-format=webp",
    places: "11 places",
  },
  {
    id: 2,
    title: "11 Great Cafes",
    cover:
      "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1687781175.jpg?output-format=webp",
    places: "15 places",
  },
  {
    id: 3,
    title: "9 Local Favorite Places",
    cover:
      "https://b.zmtcdn.com/data/collections/92aaa9b449d0e05e0d118b5a0fa8fadd_1682856493.png?output-format=webp",
    places: "8 places",
  },
  {
    id: 4,
    title: "7 Serene Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/293255cbfe49f4ebdb244c1bfc3a0f74_1687783029.jpg?output-format=webp",
    places: "6 places",
  },
  {
    id: 5,
    title: "8 Premium Coffee Shopes",
    cover:
      "https://b.zmtcdn.com/data/collections/b3c25f31e72bfefcfbbaba04ffc81f30_1687877898.png?output-format=webp",
    places: "8 places",
  },
  {
    id: 6,
    title: "9 Bingeworthy Desserts",
    cover:
      "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043047.png?output-format=webp",
    places: "8 places",
  },
];

const diningFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Greet Offers",
  },
];

const diningList = diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={diningFilters} />
      </div>
      <ExploreSection
        list={diningList}
        collectionName="Trending dining restaurants in Surat"
      />
    </div>
  );
};

export default DiningOut;
