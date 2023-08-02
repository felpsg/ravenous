import React, { useState } from 'react';
import './SearchBar.css';
import './responsive.css';


const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortOptionKey) => {
    if (sortBy === sortOptions[sortOptionKey]) {
      return 'active';
    }
    return '';
  };

  const handleSortByChange = (sortOptionKey) => {
    setSortBy(sortOptions[sortOptionKey]);
    if (term && location) {
      searchYelp(term, location, sortOptions[sortOptionKey]);
    }
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchYelp(term, location, sortBy);
      event.preventDefault();
    }
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {Object.keys(sortOptions).map((sortOptionKey) => {
            let sortByOptionValue = sortOptions[sortOptionKey];
            return (
              <li
                className={getSortByClass(sortOptionKey)}
                key={sortByOptionValue}
                onClick={() => handleSortByChange(sortOptionKey)}
              >
                {sortOptionKey}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search...ex: bar"
          onChange={handleTermChange}
          onKeyPress={handleKeyPress}
        />
        <input
          placeholder="Location... ex: New York"
          onChange={handleLocationChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
