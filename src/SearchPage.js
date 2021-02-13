import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SerachResults from "./SearchResults";

function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="searchPage_info">
        <p>21 guests · 13 bedrooms · 2 bed · 28 February 2021</p>
        <h1>Stay nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place </Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">more filters</Button>
      </div>
      <SerachResults
        img="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
        location="Galle"
        title="Entire Home in Galle"
        description="this place is peaceful and have joyful environment"
        star={4.66}
        price="LKR 3000/night"
        total="LKR 5000"
      />
       <SerachResults
        img="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
        location="Galle"
        title="Entire Home in Galle"
        description="this place is peaceful and have joyful environment"
        star={4.66}
        price="LKR 3000/night"
        total="LKR 5000"
      /> <SerachResults
        img="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
        location="Galle"
        title="Entire Home in Galle"
        description="this place is peaceful and have joyful environment"
        star={4.66}
        price="LKR 3000/night"
        total="LKR 5000"
      /> <SerachResults
        img="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
        location="Galle"
        title="Entire Home in Galle"
        description="this place is peaceful and have joyful environment"
        star={4.66}
        price="LKR 3000/night"
        total="LKR 5000"
      />
    </div>
  );
}

export default SearchPage;
