import React, { useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { DialogComponent } from "../dialog";
import EditarEntradaSaidaComponent from "../forms/entrada-saida-editar";

interface Product {
  id: string;
  data: string;
  tipo: string;
  descricao: string;
  valor: number;
}

interface TableProps {
  data: Product[];
  colunas: Colunas[];
  editarDados: (body: Record<any, any>) => void;
  excluirDados: (id: number) => void;
}

interface Colunas {
  field: string;
  header: string;
}

export const TableComponent: React.FC<TableProps> = ({
  data,
  colunas,
  editarDados,
  excluirDados,
}) => {
  const [itemSelecionado, setItemSelecionado] = useState<any>([]);
  const [visibleDialog, setVisibleDialog] = useState(false);

  const formatValor = (valor: number) => {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  function formataItemSelecionado(item: any) {
    const itemMap = item.map((item: any) => {
      const dataParts = item.data.split("/");
      const novaData = new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
      return {
        ...item,
        data: novaData
          .toISOString()
          .replace("T", " ")
          .replace("Z", " GMT-0300 (Hora padrão de Brasília)"),
      };
    });
    return itemMap;
  }

  return (
    <div style={{ height: "900px" }}>
      <DataTable
        value={data}
        scrollable
        scrollHeight="850px"
        style={{ minWidth: "50rem" }}
        size="large"
        selectionMode="single"
        onSelectionChange={(e: any) => {
          console.log(e.value);
          setItemSelecionado(e.value);
          setVisibleDialog(true);
        }}
        paginator
        rows={50}
        rowsPerPageOptions={[10, 20, 30, 50]}
        stripedRows
        showGridlines
      >
        {colunas.map((headerItem) => (
          <Column
            key={headerItem.field}
            field={headerItem.field}
            header={headerItem.header}
            filter={true}
            sortable
            body={(rowData: Product) =>
              headerItem.field === "valor"
                ? formatValor(rowData.valor)
                : rowData[headerItem.field as keyof Product]
            }
          />
        ))}
      </DataTable>
      <DialogComponent
        visible={visibleDialog}
        onHide={() => setVisibleDialog(false)}
        component={
          <EditarEntradaSaidaComponent
            dados={itemSelecionado}
            editarDados={editarDados}
            excluirDados={excluirDados}
            onHide={() => setVisibleDialog(false)}
          />
        }
      />
    </div>
  );
};
