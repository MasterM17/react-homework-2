import React from "react";
import { Filmovi } from "./components/filmovi";
import "./App.css";

export function App() {
  const movies = [
    {
      id: 1,
      name: "The Shawshank Redemption",
      date: 1994,
      genre: "Drama",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      imdbLink: "https://www.imdb.com/title/tt0111161/",
      imgUrl:
        "https://m.media-amazon.com/images/I/81genfBsRvL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "The Godfather",
      date: 1972,
      genre: "Crime, Drama",
      plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      imdbLink: "https://www.imdb.com/title/tt0068646/",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      name: "Inception",
      date: 2010,
      genre: "Action, Sci-Fi",
      plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
      imdbLink: "https://www.imdb.com/title/tt1375666/",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: 4,
      name: "The Dark Knight",
      date: 2008,
      genre: "Action, Crime",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
      imdbLink: "https://www.imdb.com/title/tt0468569/",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
    {
      id: 5,
      name: "Pulp Fiction",
      date: 1994,
      genre: "Crime, Drama",
      plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      imdbLink: "https://www.imdb.com/title/tt0110912/",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
  ];
  return (
    <div id="app" className="main-container">
      <h1>IMDb top Filmovi</h1>
      <Filmovi filmovi={movies}></Filmovi>
    </div>
  );
}
