import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimeSearch from './AnimeSearch';
import CharacterSearch from './CharacterSearch';
import MangaSearch from './MangaSearch';

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
              <Link to="/" className="nav-link">
                <h2 className="nav-title">Otaku Database</h2>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/anime" className="nav-link">
                <h3 className="nav-subtitle">Anime</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manga" className="nav-link">
                <h3 className="nav-subtitle">Manga</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/characters" className="nav-link">
                <h3 className="nav-subtitle">Characters</h3>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/anime" element={<AnimeSearch />} />
          <Route path="/manga" element={<MangaSearch />} />
          <Route path="/characters" element={<CharacterSearch />} />
          <Route path="/" element={
            <div className="home">
              <div className="home-content">
                <h1 className="home-title">Welcome to Otaku Database</h1>
                <p className="home-subtitle">Place to find all your info on Anime, Manga and Characters.</p>
                <div className="home-links">
                  <Link to="/anime" className="home-link">
                    <img src={animeImage} alt="Anime" className="home-image" />
                    <h3 className="home-link-text">Anime</h3>
                  </Link>
                  <Link to="/manga" className="home-link">
                    <img src={mangaImage} alt="Manga" className="home-image" />
                    <h3 className="home-link-text">Manga</h3>
                  </Link>
                  <Link to="/characters" className="home-link">
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
