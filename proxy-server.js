const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Make sure it's node-fetch v2 for require()

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/api/movies', async (req, res ) => {
    // Use provided URL param or default to the base Filimo URL
    const filimoUrl = req.query.url || 'https://www.filimo.com/api/fa/v1/movie/movie/list/tagid/1';


    try {
        const response = await fetch(filimoUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/json',
                'JsonType': 'simple',
            }
        });



        // Check for HTTP errors
        if (!response.ok) {
            console.error(`❌ Filimo API responded with status ${response.status}`);
            return res.status(response.status).json({ error: 'Failed to fetch from Filimo API' });
        }

        const data = await response.json();
        console.log(`✅ Data fetched from Filimo: ${filimoUrl}`);
        res.json(data);
    } catch (error) {
        console.error('❌ Error fetching from Filimo:', error);
        res.status(500).json({ error: 'Failed to fetch from Filimo API' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
});
