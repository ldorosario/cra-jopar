import React, { useEffect, useState } from "react";
import { FieldSetComponent } from "../../../components/fieldset";
import { TableComponent } from "../../../components/table";

import { colunasEntradaSaida } from "../../../components/table/colunas";
import ApiService from "../../../service/api";

const apiService = new ApiService();

export const EntradaSaidaContainer: React.FC = () => {
  const [dados, setDados] = useState([]);

  function handleSalvarDados(body: Record<string, any>) {
    apiService.criarDados(body).then((response: any) => {
      console.log(response);
      fetchDados();
    });
  }

  function handleAtualizarDados(body: Record<any, any>) {
    apiService.atualizarDados(body.id, body).then((response: any) => {
      console.log(response);
      fetchDados();
    });
  }

  function excluirDados(id: number) {
    apiService.excluirDados(id).then((response: any) => {
      console.log(response);
      fetchDados();
    });
  }

  function fetchDados() {
    apiService.buscarDados().then((response: any) => {
      setDados(response);
    });
  }

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <FieldSetComponent
      legend="Entradas e Saidas"
      salvarDados={handleSalvarDados}
      component={
        <TableComponent
          data={dados}
          colunas={colunasEntradaSaida}
          editarDados={handleAtualizarDados}
          excluirDados={excluirDados}
        />
      }
    />
  );
};
