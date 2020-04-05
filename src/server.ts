import express from 'express';
import UsersRoutes from './routes/users.routes';
const app = express();

// Middelwares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/users/', UsersRoutes);

export default app;