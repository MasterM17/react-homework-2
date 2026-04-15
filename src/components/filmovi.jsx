import React from "react";
import PropTypes from "prop-types";

export const Filmovi = ({ filmovi }) => {
  return (
    <div id="filmovi">
      {filmovi.map((film) => (
        <div id="card" key={film.id} className="card-filmovi">
          <img src={film.imgUrl} alt={film.name} />
          <h2>
            {film.name} {film.date}
          </h2>
          <p>Genre: {film.genre}</p>
          <a href={film.imdbLink} target="_blank">
            View on IMDb
          </a>
        </div>
      ))}
    </div>
  );
};

Filmovi.PropTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  imbdLink: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
