import React from "react";
import ReactDOM from "react-dom";
import Carousel from './../src/carousel';
import './../src/carousel.css'
import "semantic-ui-css/semantic.min.css";
import { Image } from "semantic-ui-react";

const App = () => {
  let elements = [
    {
      render: () => {
        return (
          <Image src="https://i.pinimg.com/originals/09/6d/f0/096df0eb195b8f0d9475924f9a1e9425.jpg" />
        );
      }
    },
    {
      render: () => {
        return <Image src="https://i.imgur.com/0eRe75Y.jpg" />;
      }
    },
    {
      render: () => {
        return (
          <Image src="https://flipwallpapers.com/wallpapers/anime-wallpaper-hd-resolution-For-desktop-Wallpaper.jpg" />
        );
      }
    }
  ];
  return (
    <div style={{ width: 500 }}>
      <Carousel
        elements={elements}
        duration={3000}
        animation="slide left"
        showNextPrev={false}
        showIndicators={true}
      />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
