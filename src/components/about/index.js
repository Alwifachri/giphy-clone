import "./index.css";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "XdvqZIbgTZzEwBPaqHqUJBjLNMVYuEHJ",
          q: "welcome",
          limit: 10,
        },
      });
      console.log(result);
      setData(result.data.data);
    };
    fetchdata();
  }, []);

  function Carousel1() {
    return (
      <Carousel className="car69">
        {data.map((i) => (
          <Carousel.Item key={i.id}>
            <img
              className="car-img"
              src={i.images.fixed_height.url}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }

  return (
    <div className="container">
      <div className="about-container" id="about">
        <h1 className="about">ABOUT</h1>
        {/* <div className="GIPHY">{renderGif()}</div> */}
        <div className="carousel">{Carousel1()}</div>
        <h3 className="desc-about">
          GIPHY is your top source for the best & newest GIFs & Animated
          Stickers online. Find everything from funny GIFs, reaction GIFs,
          unique GIFs and more
        </h3>
      </div>
    </div>
  );
};

export default About;
