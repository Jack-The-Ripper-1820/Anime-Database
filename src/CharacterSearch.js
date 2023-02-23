import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function CharacterSearch() {
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
                characters (search: $search) {
                  id
                  name {
                    full
                  }
                  image {
                    large
                  }
                  description
                  favourites
                  media {
                    nodes {
                      title {
                        romaji
                      }
                      type
                    }
                  }
                }
              }
            }
          `,
          variables: { search: searchText }
        }
      );

      const characterResults = result.data.data.Page.characters.map((character) => ({
        id: character.id,
        name: character.name.full,
        image: character.image.large,
        description: character.description,
        favorites: character.favourites,
        media: character.media.nodes.map((node) => ({
          title: node.title.romaji,
          type: node.type
        }))
      }));
      setSearchResults(characterResults);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const toggleDetails = (index) => {
    setSearchResults((prevResults) =>
      prevResults.map((result, i) => {
        if (i === index) {
          return {
            ...result,
            showDetails: !result.showDetails
          };
        }
        return result;
      })
    );
  };

  return (
    <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh'}}>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchText} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {searchResults.map((result, index) => (
            <li key={result.id} style={{ margin: '1em 0', border: '1px solid black', borderRadius: '5px', padding: '1em', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                {result.name}
              </h3>
              <img onClick={() => toggleDetails(index)} src={result.image} alt={result.name} style={{ cursor: 'pointer' }} />
              {result.showDetails && (
                <div>
                  <p>{result.description}</p>
                  <p>Favorites: {result.favorites}</p>
                  <p>Appeared in:</p>
                  <ul>
                    {result.media.map((media) => (
                      <li key={media.title}>{media.title} ({media.type})</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CharacterSearch;


