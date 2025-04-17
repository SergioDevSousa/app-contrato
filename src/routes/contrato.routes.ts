import { Router } from "express";
import { gerarContrato } from "../controllers/contrato.controller"; // <- aqui é importação nomeada

const router = Router();

router.post("/gerar", gerarContrato); // <- função, não objeto

export default router;
