// import express from 'express';
// import cors from 'cors';
// import 'dotenv/config';
// import connectDB from './configs/mongodb.js';
// import { clerkWebhooks } from './controllers/webhooks.js';
// import { clerkMiddleware } from '@clerk/express';
// import connectCloudinary from './configs/Cloudinary.js';
// import educatorRouter from './routes/educatorRouter.js';
// import courseRouter from './routes/courseRoute.js';
// import userRouter from './routes/userRoutes.js';

// const app = express();

// // Connect to DB & Cloudinary
// await connectDB();
// await connectCloudinary();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(clerkMiddleware());

// // Routes
// app.get('/', (req, res) => res.send('API WORKING'));
// app.post('/clerk', clerkWebhooks);
// app.use('/api/educator', express.json(),educatorRouter);
// app.use('/api/course',express.json(),courseRouter);
// app.use('/api/user',express.json(),userRouter);

// // Port
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js';
import { clerkMiddleware } from '@clerk/express';
import connectCloudinary from './configs/Cloudinary.js';
import educatorRouter from './routes/educatorRouter.js';
import courseRouter from './routes/courseRoute.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// Connect to DB & Cloudinary
await connectDB();
await connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.get('/', (req, res) => res.send('API WORKING'));
app.post('/clerk', clerkWebhooks);
app.use('/api/educator', educatorRouter);
app.use('/api/course', courseRouter);
app.use('/api/user', userRouter);
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route Not Found', path: req.originalUrl });
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
