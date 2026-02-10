import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import connectDB from './configs/database.config.js';
import blogRoutes from './routes/blog.route.js';
import contactRoutes from './routes/contact.route.js';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('Blogs SERVER is running...');
});

app.use('/api/v1/blogs-mela', blogRoutes);
app.use('/api/v1/blogs-mela', contactRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
