import { Request, Response } from "express";
import { contratoTemplate } from "../services/contratoTemplate";;

export const gerarContrato = async (req: Request, res: Response) => {
  try {
    const dados = req.body;

    // Gera o buffer do documento Word
    const buffer = await contratoTemplate(dados);

    // Define o cabeçalho para download
    res.setHeader("Content-Disposition", "attachment; filename=contrato.docx");
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");

    // Envia o buffer como resposta
    res.send(buffer);
  } catch (error) {
    console.error("Erro ao gerar contrato:", error);
    res.status(500).json({ message: "Erro ao gerar contrato" });
  }
};