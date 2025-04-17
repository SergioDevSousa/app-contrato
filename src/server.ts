import express from "express";
import cors from "cors";
import contratoRoutes from "./routes/contrato.routes"; // Caminho certo?

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contrato/", contratoRoutes); // vai responder em /api/contrato/gerar

app.get("/", (req, res) => {
  res.send("API de Geração de Contratos está online!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
