import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productsRoutes from './routes/productsRoutes.js';
const app = express();
dotenv.config();
connectDB();
app.get('/', (req, res) => {
  res.send('app is running .....');
});
app.use('/api/products', productsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server is running  in ${process.env.NODE_ENV} mode  on Port ${PORT}`
  )
);
