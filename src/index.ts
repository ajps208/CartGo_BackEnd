import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Import database connection
import './DB/connection'; // Adjust the path if necessary

// Import routes
import routes from './Routers/routes';  // Make sure this is correctly imported

// Initialize the Express app
const app: Application = express();

// Configure CORS
app.use(cors())

// Middleware
app.use(express.json());
app.use('/uploads', express.static('./uploads'));

// Use the routes
app.use('/', routes);  

// Define the port
const PORT: number = Number(process.env.PORT) || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server started at ${PORT} and waiting for client requests!`);
});

// Root route
app.get('/', (req: Request, res: Response) => {
  res.send('<h1>SERVER STARTED</h1>');
});
