import mongoose from 'mongoose';

const connectionString = process.env.DATABASE as string;

if (!connectionString) {
  console.error("Database connection string is not defined in the environment variables.");
  process.exit(1);
}

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB Atlas successfully connected ");
  })
  .catch((err: Error) => {
    console.error(`MongoDB connection failed!!! Error: ${err.message}`);
  });
