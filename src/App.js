import React, { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinnesList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';
import 'whatwg-fetch';
import Footer from './components/Footer/footer';
import ThemeToggle from './ThemeToggle';

const business = {
  imageSrc:
    'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Bráz Pizzaria',
  address: 'R. Graúna, 125',
  city: 'São Paulo',
  state: 'SP',
  zipCode: '04513-000',
  category: 'Pizza',
  rating: 4.7,
  reviewCount: 1500,
};

const businesses = Array.from({ length: 9 }, () => business);

function App() {
  const [businessesState, setBusinessesState] = useState(businesses);

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((businesses) => {
      console.log(businesses);
      setBusinessesState(businesses);
    });
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businessesState} />
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
