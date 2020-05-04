import React from "react";
import "./HomePage.style.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">All</h1>
            <span className="title">Mayon Products</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Products</h1>
            <span className="title">Mayon Products</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Protect</h1>
            <span className="title">Mayon Products</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Maintain</h1>
            <span className="title">Mayon Products</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Accessories</h1>
            <span className="title">Mayon Products</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
