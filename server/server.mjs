import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

app.use(cors()); 

app.get('/yelp/businesses/search', async (req, res) => {
  const { term, location, sort_by } = req.query;

  try {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      },
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
