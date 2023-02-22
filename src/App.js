// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AnimeSearch from './AnimeSearch';
// import CharacterSearch from './CharacterSearch';
// import MangaSearch from './MangaSearch';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/anime">Anime</Link>
//             </li>
//             <li>
//               <Link to="/manga">Manga</Link>
//             </li>
//             <li>
//               <Link to="/characters">Characters</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/anime" element={<AnimeSearch />} />
//           <Route path="/manga" element={<MangaSearch />} />
//           <Route path="/characters" element={<CharacterSearch />} />
//           <Route path="/" element={<h1>Welcome to My App</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import AnimeSearch from './AnimeSearch';
// import CharacterSearch from './CharacterSearch';
// import MangaSearch from './MangaSearch';

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/anime">Anime</Link>
//             </li>
//             <li>
//               <Link to="/manga">Manga</Link>
//             </li>
//             <li>
//               <Link to="/characters">Characters</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/anime" element={<AnimeSearch />} />
//           <Route path="/manga" element={<MangaSearch />} />
//           <Route path="/characters" element={<CharacterSearch />} />
//           <Route path="/" element={<div><h1>Welcome to Otaku Database</h1><ul><li><Link to="/anime">Anime</Link></li><li><Link to="/manga">Manga</Link></li><li><Link to="/characters">Characters</Link></li></ul></div>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
// import AnimeSearch from './AnimeSearch';
// import CharacterSearch from './CharacterSearch';
// import MangaSearch from './MangaSearch';

// function Navbar() {
//   const location = useLocation();
//   if (location.pathname === '/') {
//     return (
//       <nav style={{ display: 'flex', justifyContent: 'center' }}>
//         <ul>
//           <li>
//             <Link to="/anime">Anime</Link>
//           </li>
//           <li>
//             <Link to="/manga">Manga</Link>
//           </li>
//           <li>
//             <Link to="/characters">Characters</Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   } else {
//     return (
//       <nav>
//         <ul>
//           <li>
//             <Link to="/anime">Anime</Link>
//           </li>
//           <li>
//             <Link to="/manga">Manga</Link>
//           </li>
//           <li>
//             <Link to="/characters">Characters</Link>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />

//         <Routes>
//           <Route path="/anime" element={<AnimeSearch />} />
//           <Route path="/manga" element={<MangaSearch />} />
//           <Route path="/characters" element={<CharacterSearch />} />
//           <Route path="/" element={<h1>Welcome to My App</h1>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AnimeSearch from './AnimeSearch';
import CharacterSearch from './CharacterSearch';
import MangaSearch from './MangaSearch';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li style={{ marginRight: '20px' }}>
              <Link to="/anime">Anime</Link>
            </li>
            <li style={{ marginRight: '20px' }}>
              <Link to="/manga">Manga</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/anime" element={<AnimeSearch />} />
          <Route path="/manga" element={<MangaSearch />} />
          <Route path="/characters" element={<CharacterSearch />} />
          <Route path="/" element={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
              <div>
                <h1 style={{ textAlign: 'center' }}>Welcome to Otaku Database</h1>
                <h2 style={{ textAlign: 'center' }}>Place to find all your info on Anime, Manga and Characters.</h2>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


