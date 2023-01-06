import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Col } from "react-bootstrap";
import "./index.css";

const Trending = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "XdvqZIbgTZzEwBPaqHqUJBjLNMVYuEHJ",
          limit: 20,
        },
      });
      console.log(result);
      setData(result.data.data);
    };
    fetchdata();
  }, []);

  const renderGif = () => {
    return data.map((i) => {
      return (
        <Col className="card-gif" key={i.id}>
          <Card>
            <Card.Img
              className="card-img"
              variant="top"
              src={i.images.fixed_height.url}
              alt="gifs"
            />
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="container">
      <div className="trending-container" id="tren">
        <h1 className="tren">TRENDING GIFs</h1>
        <div className="GIPHY">{renderGif()}</div>
      </div>
    </div>
  );
};

export default Trending;
