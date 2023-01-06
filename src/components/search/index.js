import "./index.css";
import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Col } from "react-bootstrap";

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  const getData = async () => {
    const result = await axios("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: query,
        api_key: "XdvqZIbgTZzEwBPaqHqUJBjLNMVYuEHJ",
        limit: 20,
      },
    });
    setData(result.data.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleInput = (e) => {
    getData();
  };

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
      <div className="search-container" id="search">
        <h1 className="search">SEARCH</h1>
        <div>
          <form className="search-gif" onSubmit={handleSubmit}>
            <input
              className="input-gif"
              placeholder="SEARCH YOUR FAVORITE GIFS"
              type="text"
              name="query"
              value={query}
              onChange={handleChange}
            />
            <input className="submit-gif" type="submit" value="Search" />
          </form>
          {/* <div className="button-group" onClick={handleInput}>
            <Button variant="secondary" value={query}>
              Sport
            </Button>
            <Button variant="secondary">Game</Button>
            <Button variant="secondary">Anime</Button>
            <Button variant="secondary">Film</Button>
            <Button variant="secondary">Animals</Button>
            <Button variant="secondary">Entertainment</Button>
          </div> */}
          <div className="GIPHY">{renderGif()}</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
