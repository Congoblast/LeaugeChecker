// server.ts (Node.js with Express using CommonJS)

import * as express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3001; // Set the port according to your preference
const RIOT_API_KEY = 'YOUR_RIOT_API_KEY'; // Replace with your Riot API key

app.use(express.json());

// Define a route that proxies requests to the Riot Games API
app.get('/api/champion-masteries/:encryptedSummonerId', async (req, res) => {
  const { encryptedSummonerId } = req.params;

  try {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}?api_key=${RIOT_API_KEY}`
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
