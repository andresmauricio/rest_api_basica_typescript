import express from 'express';
import UsersRoutes from './routes/users.routes';
const app = express();

// Routes
app.use('/api/users/', UsersRoutes);

export default app;