
import mongoose from 'mongoose';

const shortUrlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortcode: { type: String, required: true, unique: true },
  expiry: { type: Date, required: true },
});

export const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);
