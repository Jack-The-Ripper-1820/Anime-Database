// import React, { useState } from 'react';
// import axios from 'axios';

// function AnimeSearch() {
//   const [searchText, setSearchText] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post(
//         'https://graphql.anilist.co',
//         {
//           query: `
//             query ($search: String) {
//               Page {
//                 media (search: $search, type: ANIME) {
//                   id
//                   title {
//                     english
//                   }
//                   coverImage {
//                     extraLarge
//                   }
//                   description
//                   averageScore
//                   genres
//                   favourites
//                 }
//               }
//             }
//           `,
//           variables: { search: searchText }
//         }
//       );

//       const animeResults = result.data.data.Page.media.map((media) => ({
//         id: media.id,
//         title: media.title.english || media.title.romaji,
//         summary: media.description.replace(/(<([^>]+)>)/gi, ''),
//         image: media.coverImage.extraLarge,
//         score: media.averageScore,
//         genres: media.genres.join(', '),
//         favourites: media.favourites
//       }));
//       setSearchResults(animeResults);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input type="text" value={searchText} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       {searchResults.length > 0 && (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>
//               <h3>{result.title}</h3>
//               <img src={result.image} alt={result.title} />
//               <p>{result.summary}</p>
//               <p>Average Score: {result.score}</p>
//               <p>Genres: {result.genres}</p>
//               <p>Favourites: {result.favourites}</p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default AnimeSearch;


// import React, { useState } from 'react';
// import axios from 'axios';

// function AnimeSearch() {
//   const [searchText, setSearchText] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       const result = await axios.post(
//         'https://graphql.anilist.co',
//         {
//           query: `
//             query ($search: String) {
//               Page {
//                 media (search: $search, type: ANIME) {
//                   id
//                   title {
//                     english
//                   }
//                   coverImage {
//                     extraLarge
//                   }
//                   description
//                   averageScore
//                   genres
//                   favourites
//                 }
//               }
//             }
//           `,
//           variables: { search: searchText }
//         }
//       );

//       const animeResults = result.data.data.Page.media.map((media) => ({
//         id: media.id,
//         title: media.title.english || media.title.romaji,
//         summary: media.description.replace(/(<([^>]+)>)/gi, ''),
//         image: media.coverImage.extraLarge,
//         score: media.averageScore,
//         genres: media.genres.join(', '),
//         favourites: media.favourites
//       }));
//       setSearchResults(animeResults);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   const [expandedId, setExpandedId] = useState(null);

//   const handleToggle = (id) => {
//     setExpandedId((prevExpandedId) => (prevExpandedId === id ? null : id));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input type="text" value={searchText} onChange={handleInputChange} />
//         <button type="submit">Search</button>
//       </form>
//       {searchResults.length > 0 && (
//         <ul>
//           {searchResults.map((result) => (
//             <li key={result.id}>
//               <div className="search-result">
//                 <img src={result.image} alt={result.title} />
//                 <div className="search-result-info">
//                   <h3 onClick={() => handleToggle(result.id)}>{result.title}</h3>
//                   <div
//                     className={`search-result-details ${
//                       expandedId === result.id ? 'expanded' : ''
//                     }`}
//                   >
//                     <p>{result.summary}</p>
//                     <p>Average Score: {result.score}</p>
//                     <p>Genres: {result.genres}</p>
//                     <p>Favourites: {result.favourites}</p>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       <style jsx>{`
//         .search-result {
//           display: flex;
//           align-items: center;
//         }
//         .search-result img {
//           width: 100px;
//           height: 140px;
//           object-fit: cover;
//           margin-right: 1rem;
//         }
//         .search-result h3 {
//           margin: 0;
//           cursor: pointer;
//         }
//         .search-result-details {
//           display: none;
//           margin-top: 1rem;
//         }
//         .search-result-details.expanded {
//           display: block;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default AnimeSearch;

import React, { useState } from 'react';
import axios from 'axios';

function AnimeSearch() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(
        'https://graphql.anilist.co',
        {
          query: `
            query ($search: String) {
              Page {
                media (search: $search, type: ANIME) {
                  id
                  title {
                    english
                  }
                  coverImage {
                    extraLarge
                  }
                  description
                  averageScore
                  genres
                  favourites
                }
              }
            }
          `,
          variables: { search: searchText }
        }
      );

      const animeResults = result.data.data.Page.media.map((media) => ({
        id: media.id,
        title: media.title.english || media.title.romaji,
        summary: media.description.replace(/(<([^>]+)>)/gi, ''),
        image: media.coverImage.extraLarge,
        score: media.averageScore,
        genres: media.genres.join(', '),
        favourites: media.favourites
      }));
      setSearchResults(animeResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleTitleClick = (index) => {
    const newResults = [...searchResults];
    newResults[index].showDetails = !newResults[index].showDetails;
    setSearchResults(newResults);
  };

  const handleImageClick = (index) => {
    const newResults = [...searchResults];
    newResults[index].showDetails = !newResults[index].showDetails;
    setSearchResults(newResults);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column' }}>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchText} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <ul style={{ listStyleType: 'none', paddingTop: 0 }}>
          {searchResults.map((result, index) => (
            <li key={result.id} style={{ margin: '1em 0', border: '1px solid black', borderRadius: '5px', padding: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ cursor: 'pointer' }} onClick={() => handleTitleClick(index)}>
                {result.title}
              </h3>
              <img style={{ cursor: 'pointer' }} onClick={() => handleImageClick(index)} src={result.image} alt={result.title} />
              {result.showDetails && (
                <div style={{ marginTop: '1em' }}>
                  <p>{result.summary}</p>
                  <p>Average Score: {result.score}</p>
                  <p>Genres: {result.genres}</p>
                  <p>Favourites: {result.favourites}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AnimeSearch;