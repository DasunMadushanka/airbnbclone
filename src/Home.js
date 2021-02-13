import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
          price="LKR 2000/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
          price="LKR 6000/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
          price="LKR 3000/night"
        />
          <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Home"
          description="this place is peaceful and have joyful environment"
          price="LKR 3000/night"
        />
      </div>
    </div>
  );
}

//some time dom is not work so -> npm cache clean --force
//Create link --->npm i react-router-dom   

export default Home;
