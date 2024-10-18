import express from "express";
import zipcodeRoutes from "./routes/zipCodeRoutes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

export const URL = process.env.ZIP_API_URL;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", zipcodeRoutes);

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});

export default app;
