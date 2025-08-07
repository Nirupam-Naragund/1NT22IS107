// routes/shortUrlRoutes.js
import express from 'express';
import { ShortUrl } from '../models/shortUrl.js';
import { Log } from '../../Backend Test Submission/logger.js';
import { nanoid } from 'nanoid';

const router = express.Router();
const HOST = 'https://custom'; 

router.post('/shorturls', async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;

  try {
    // Validate URL
    if (!url || !/^https?:\/\/\S+$/i.test(url)) {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    // Check for shortcode conflict
    let finalCode = shortcode || nanoid(6);
    const existing = await ShortUrl.findOne({ shortcode: finalCode });
    if (existing) {
      if (shortcode) {
        return res.status(409).json({ error: 'Shortcode already in use' });
      }
      finalCode = nanoid(6); 
    }


    const expiry = new Date(Date.now() + validity * 60 * 1000);

   
    const shortUrl = new ShortUrl({ originalUrl: url, shortcode: finalCode, expiry });
    await shortUrl.save();

   
    await Log('', 'INFO', 'ShortenerService', `Shortened URL for ${url}`, process.env.LOG_TOKEN);

    return res.status(201).json({
      shortLink: `${HOST}/short/${finalCode}`,
      expiry: expiry.toISOString(),
    });
  } catch (err) {
    await Log(err.stack, 'ERROR', 'ShortenerService', err.message, process.env.LOG_TOKEN);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
