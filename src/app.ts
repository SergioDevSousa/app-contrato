import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contratoRoutes from "./routes/contrato.routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//rotas
app.use("/api/contrato", contratoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

export default app;
