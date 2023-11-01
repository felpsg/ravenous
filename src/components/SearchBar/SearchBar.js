import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import './responsive.css';
import './SearchBar.css';

const SearchBar = ({ searchYelp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

  const debouncedSearchYelp = useMemo(
    () =>
      debounce(
        (term, location, sortBy) => searchYelp(term, location, sortBy),
        300,
      ),
    [searchYelp],
  );

  const onSubmit = (data) => {
    if (data.term.trim() && data.location.trim()) {
      debouncedSearchYelp(data.term, data.location, sortBy);
    }
  };

  const handleSortByChange = (sortOptionKey) => {
    setSortBy(sortOptions[sortOptionKey]);
    if (errors.term && errors.location) {
      debouncedSearchYelp(
        errors.term.value,
        errors.location.value,
        sortOptions[sortOptionKey],
      );
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
        <TextField
          placeholder="Pizza, sushi, etc."
          {...register('term', { required: 'Term is required' })}
          aria-label="Search term"
          error={!!errors.term}
          helperText={errors.term?.message}
          inputProps={{ style: { color: 'black' } }}
          FormHelperTextProps={{ style: { color: 'white', fontSize: '14px' } }}
        />
        <TextField
          placeholder="New York, NY, etc."
          {...register('location', { required: 'Location is required' })}
          aria-label="Location"
          error={!!errors.location}
          helperText={errors.location?.message}
          inputProps={{ style: { color: '#fff' } }}
          FormHelperTextProps={{ style: { color: 'white', fontSize: '14px' } }}
        />
      </div>
      <div className="SearchBar-submit">
        <button onClick={handleSubmit(onSubmit)} aria-label="Search">
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
