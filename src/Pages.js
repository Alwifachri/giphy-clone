import About from "./components/about";
import Intro from "./components/home";
import Navigation from "./components/navbar";
import Search from "./components/search";
import Trending from "./components/trending";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Intro />
      <About />
      <Trending />
      <Search />
    </div>
  );
};

export default Home;
