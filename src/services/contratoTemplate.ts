import {
    Document,
    Packer,
    Paragraph,
    TextRun,
    AlignmentType,
    Header,
    Footer,
    Table,
    TableRow,
    TableCell,
    WidthType,
  } from "docx";
  
  type DadosContrato = {
    contratado: string;
    contratante: string;
    servico: string;
    valor: string;
    data: string;
    cidade: string;
  };
  
  export const contratoTemplate = async (dados: DadosContrato): Promise<Buffer> => {
    const doc = new Document({
      sections: [
        {
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: "CONTRATO DE PRESTAÇÃO DE MICRO SERVIÇOS",
                      font: "Arial",
                      bold: true,
                      size: 28,
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  children: [new TextRun("Página ")],
                  alignment: AlignmentType.RIGHT,
                }),
              ],
            }),
          },
          children: [
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({ text: "CONTRATANTE: ", font: "Arial", bold: true }),
                new TextRun(dados.contratante),
              ],
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({ text: "CONTRATADO: ", font: "Arial", bold: true }),
                new TextRun(dados.contratado),
              ],
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "OBJETO DO CONTRATO",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Este contrato tem como objeto a prestação de micro serviço referente a ${dados.servico}.`,
                  font: "Arial",
                  size: 20,
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "PRAZO E CRONOGRAMA",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: `O prazo para execução dos serviços será por tempo limitado e sua finalização se dará com a entrega dos documentos ${dados.servico} em PDF, com início da aceitação deste termo.`,
                  font: "Arial",
                  size: 20,
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "REMUNERAÇÃO",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Serviço")],
                      width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                    new TableCell({
                      children: [new Paragraph("Valor")],
                      width: { size: 50, type: WidthType.PERCENTAGE },
                    }),
                  ],
                }),
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph(dados.servico)] }),
                    new TableCell({ children: [new Paragraph(dados.valor)] }),
                  ],
                }),
              ],
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "OBRIGAÇÕES DO CONTRATADO (A)",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            ...[
              "Desenvolver o microserviço conforme especificações acordadas;",
              "Garantir a integridade e a confidencialidade das informações fornecidas pela CONTRATANTE;",
              "Garantir a efetividade da entrega dos documentos finalizando o microserviço.",
            ].map(
              (item) =>
                new Paragraph({
                  children: [new TextRun({ text: item, font: "Arial", size: 20 })],
                  bullet: { level: 0 },
                  alignment: AlignmentType.JUSTIFIED,
                })
            ),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "OBRIGAÇÕES DO CONTRATANTE (A)",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            ...[
              "Fornecer todas as informações e recursos necessários para o desenvolvimento do microserviço;",
              "Efetuar os pagamentos nas condições estabelecidas neste contrato.",
            ].map(
              (item) =>
                new Paragraph({
                  children: [new TextRun({ text: item, font: "Arial", size: 20 })],
                  bullet: { level: 0 },
                  alignment: AlignmentType.JUSTIFIED,
                })
            ),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "DISPOSIÇÕES GERAIS",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca de ${dados.cidade}. Por estarem de pleno acordo com os termos deste contrato, as partes assinam o presente instrumento em duas vias de igual teor.`,
                  font: "Arial",
                  size: 20,
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "CONFIDENCIALIDADE",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Ambas as partes comprometem-se a manter sigilo sobre todas as informações trocadas durante e após a vigência deste contrato.",
                  font: "Arial",
                  size: 20,
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
            }),
            new Paragraph("\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: "RECISÃO",
                  font: "Arial",
                  bold: true,
                  size: 20,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n"),
            ...[
              "Descumprimento de qualquer cláusula contratual;",
              "Rescisão antecipada, mediante notificação com de antecedência.",
            ].map(
              (item) =>
                new Paragraph({
                  children: [new TextRun({ text: item, font: "Arial", size: 20 })],
                  bullet: { level: 0 },
                  alignment: AlignmentType.JUSTIFIED,
                })
            ),
            new Paragraph("\n\n"),
            new Paragraph("\n\n"),
            new Paragraph({
              children: [
                new TextRun({
                  text: `${dados.cidade}/PB, ${dados.data}, pelas partes abaixo assinadas.`,
                  font: "Arial",
                  size: 20,
                }),
              ],
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph("\n\n"),
            new Paragraph("\n\n"),
            new Paragraph({
              children: [new TextRun("_________________________")],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph({
              children: [new TextRun(`CONTRATANTE: ${dados.contratante}`)],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph("\n\n"),
            new Paragraph("\n\n"),
            new Paragraph({
              children: [new TextRun("_________________________")],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph({
              children: [new TextRun(`CONTRATADO: ${dados.contratado}`)],
              alignment: AlignmentType.LEFT,
            }),
          ],
        },
      ],
    });
  
    return await Packer.toBuffer(doc);
  };
  