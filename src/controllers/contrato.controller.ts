import { Request, Response } from "express";
import { contratoTemplate } from "../services/contratoTemplate";

export const gerarContrato = async (req: Request, res: Response) => {
  try {
    const dados = req.body;
    await contratoTemplate(dados);
    console.log("DADOS RECEBIDOS NO BODY:", dados);
    return res.status(201).json({ message: "Contrato gerado com sucesso!" });
  } catch (error) {
    console.error("Erro ao gerar contrato:", error);
    return res.status(500).json({
      error: "Erro ao gerar contrato",
      detail: (error as Error).message || error,
    });
  }
};
