import React, { Component } from "react";
import Slider from "react-slick";
import TeamCarousal from "../Components/TeamCarousal";
// import { Img1 } from "../assets/projects/cyberverse.jpg";
import TeamData from "../TeamData";

export default class Fade extends Component {
  render() {
    const settings = {
      autoplay: true,
      fade: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <h2>Fade</h2>
        <Slider {...settings}>
          {TeamData.map((data) => (
            <div>
              <TeamCarousal
                key={data.id}
                name={data.name}
                designation={data.designation}
                description={data.description}
                img={data.img}
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
