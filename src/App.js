import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimeSearch from './AnimeSearch';
import CharacterSearch from './CharacterSearch';
import MangaSearch from './MangaSearch';
import './App.css';
import animeImage from './images/anime.jpg';
import mangaImage from './images/manga.jpg';
import charactersImage from './images/characters.jpg';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/Otaku-Database" className="nav-link">
                <h2 className="nav-title">Otaku Database</h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Otaku-Database/anime" className="nav-link">
                <h3 className="nav-subtitle">Anime</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Otaku-Database/manga" className="nav-link">
                <h3 className="nav-subtitle">Manga</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Otaku-Database/characters" className="nav-link">
                <h3 className="nav-subtitle">Characters</h3>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/Otaku-Database/anime" element={<AnimeSearch />} />
          <Route path="/Otaku-Database/manga" element={<MangaSearch />} />
          <Route path="/Otaku-Database/characters" element={<CharacterSearch />} />
          <Route path="/Otaku-Database" element={
            <div className="home">
              <div className="home-content">
                <h1 className="home-title">Welcome to The Otaku Database</h1>
                <p className="home-subtitle">Place to find all the info on your favorite Anime, Manga and Characters.</p>
                <div className="home-links">
                  <Link to="/Otaku-Database/anime" className="home-link">
                    <img src={animeImage} alt="Anime" className="home-image" />
                    <h3 className="home-link-text">Anime</h3>
                  </Link>
                  <Link to="/Otaku-Database/manga" className="home-link">
                    <img src={mangaImage} alt="Manga" className="home-image" />
                    <h3 className="home-link-text">Manga</h3>
                  </Link>
                  <Link to="/Otaku-Database/characters" className="home-link">
                    <img src={charactersImage} alt="Characters" className="home-image" />
                    <h3 className="home-link-text">Characters</h3>
                  </Link>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
