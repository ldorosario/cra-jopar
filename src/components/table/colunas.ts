interface FieldHeader {
  field: string;
  header: string;
}
export const colunasEntradaSaida: FieldHeader[] = [
  { field: "data", header: "Data" },
  { field: "tipo", header: "Tipo" },
  { field: "descricao", header: "Descrição" },
  { field: "valor", header: "Valor" },
];
