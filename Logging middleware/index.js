
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import shortUrlRoutes from './routes/shortUrlRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', shortUrlRoutes);

const PORT = 3000;

mongoose
  .connect("mongodb+srv://nishniru1127:8pdRPu5UEt2kmH9w@cluster0.tzulktr.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
