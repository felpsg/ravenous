const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `http://localhost:3001/yelp/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorResponse) => {
            console.error('API error:', errorResponse);
            throw new Error('API error');
          });
        }
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0]?.title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        } else {
          console.log('No businesses found', jsonResponse);
        }
      })
      .catch((error) => {
        console.error('Error fetching and parsing data', error);
      });
  },
};

export default Yelp;
