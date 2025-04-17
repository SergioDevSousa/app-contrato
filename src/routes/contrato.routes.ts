import { Router } from "express";
import { gerarContrato } from "../controllers/contrato.controller";  

const router = Router();

router.post("/gerar", gerarContrato);

export default router;