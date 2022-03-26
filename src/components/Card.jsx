import React from "react";
import PropTypes from "prop-types";

import "./cards.css";

function Card({ title, imageSource, url }) {
  return (
    <>
      <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={imageSource} alt="" className="card-img-top" />
        </div>
        <div className="card-body text-light">
          <h4 className="card-tittle">{title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            impedit laboriosam dignissimos quidem sint. Quod veniam libero quo
            aspernatur? Sunt, accusantium aspernatur animi eos at vel rerum id
            nobis quam.
          </p>
          <a href={url} className="btn btn-outline-secondary btn-lg" target="blank">
            Sitio Web
          </a>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
};

export default Card;
