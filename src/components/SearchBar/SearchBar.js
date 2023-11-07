import TextField from '@material-ui/core/TextField';
import debounce from 'lodash.debounce';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './responsive.css';
import './SearchBar.css';

const SearchBar = ({ searchYelp }) => {
  const {
    register,
    handleSubmit,
    getValues,
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

  const handleSortByChange = (sortOptionKey) => {
    const sortValue = sortOptions[sortOptionKey];
    setSortBy(sortValue);

    const values = getValues(); // Obtem os valores atuais do formulário
    const term = values.term;
    const location = values.location;

    // Certifica-se de que os campos de termo e localização estão preenchidos
    if (term && location) {
      searchYelp(term, location, sortValue);
    }
  };

  const handleSearch = (data) => {
    searchYelp(data.term, data.location, sortBy);
  };

  // Debouncing da pesquisa para evitar chamadas excessivas à API enquanto o usuário digita
  const debouncedSearchHandler = debounce(handleSearch, 300);

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {Object.keys(sortOptions).map((sortOptionKey) => {
            return (
              <li
                className={getSortByClass(sortOptionKey)}
                key={sortOptions[sortOptionKey]}
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
          error={!!errors.term}
          helperText={errors.term?.message}
        />
        <TextField
          placeholder="New York, NY, etc."
          {...register('location', { required: 'Location is required' })}
          error={!!errors.location}
          helperText={errors.location?.message}
        />
      </div>
      <div className="SearchBar-submit">
        <button type="submit" onClick={handleSubmit(debouncedSearchHandler)}>
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
