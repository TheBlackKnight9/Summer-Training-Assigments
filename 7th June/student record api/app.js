// import express from 'express';
// import mongoose from 'mongoose';
// import studentRouter from './routes/students.js';

// const app = express();
// mongoose.connect('mongodb+srv://Prerak_2:anpr0925@cluster0.c4xnq.mongodb.net/')
//   .then(() => console.log('MongoDB Connected'))
//   .catch((err) => console.error(' MongoDB connection error:', err));


// app.use(express.json()); 
// app.use(express.urlencoded({ extended: false })); 

// app.use('/api/students', studentRouter);

// app.listen(PORT, 'localhost', () => {
//   console.log(`🚀 Server is running on http://localhost:3000`);
// });
import express from 'express';
import mongoose from 'mongoose';
import users from './routes/users.js';

const app = express();

mongoose.connect('mongodb+srv://Prerak_2:anpr0925@cluster0.c4xnq.mongodb.net/')
  .then(() => console.log(' MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRouter);

app.listen(3000, 'localhost', () => {
  console.log('Server running on http://localhost:3000');
});

