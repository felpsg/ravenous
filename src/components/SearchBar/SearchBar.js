import React, { useState } from 'react';
import './SearchBar.css';

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
                onClick={handleSortByChange.bind(this, sortOptionKey)}
              >
                {sortOptionKey}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={handleTermChange} />
        <input placeholder="Where?" onChange={handleLocationChange} />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
