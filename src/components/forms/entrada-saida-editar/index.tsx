import React, { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import ApiService from "../../../service/api";

interface Tipo {
  name: string;
  code: string;
}
interface CategoriaEntrada {
  name: string;
  code: string;
}
interface CategoriaSaida {
  name: string;
  code: string;
}

interface EntradaSaida {
  tipo: Tipo[];
  valor: number | null;
  data: Date | null;
  categoriaEntrada: CategoriaEntrada[];
  categoriaSaida: CategoriaSaida[];
  tipoSelecionado: string;
  descricaoSelecionado: string;
}

interface TransacaoEntradaSaidaProps {
  dados: any;
  editarDados: (body: Record<string, any>) => void;
  onHide: () => void;
  excluirDados: (id: number) => void;
}

const EditarEntradaSaidaComponent: React.FC<TransacaoEntradaSaidaProps> = ({
  dados,
  editarDados,
  onHide,
  excluirDados,
}) => {
  const [state, setState] = useState<EntradaSaida>({
    tipo: [
      { name: "Entrada", code: "Entrada" },
      { name: "Saida", code: "Saida" },
    ],
    valor: dados.valor,
    data: new Date(dados.data),
    categoriaEntrada: [
      { name: "Receb. à vista", code: "Receb. à vista" },
      { name: "Receb. a prazo", code: "Receb. a prazo" },
      { name: "Receb. de cartões", code: "Receb. de cartões" },
      { name: "Receb. de governos", code: "Receb. de governos" },
      { name: "Rendimentos de aplicação", code: "Rendimentos de aplicação" },
    ],
    categoriaSaida: [
      { name: "Pag. fixos", code: "Pag. fixos" },
      { name: "Folha de pag.", code: "Folha de pag." },
      { name: "Taxas bancárias", code: "Taxas bancárias" },
      { name: "Taxas governamentais", code: "Taxas governamentais" },
      { name: "Impostos", code: "Impostos" },
      { name: "Pag. diversos", code: "Pag. diversos" },
      { name: "Multas", code: "Multas" },
      { name: "Financiamentos", code: "Financiamentos" },
    ],
    tipoSelecionado: dados.tipo,
    descricaoSelecionado: dados.descricao,
  });

  return (
    <div>
      <h2>Formulário para editar entrada e saída</h2>
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="type">Tipo</label>
          <Dropdown
            onChange={(e: any) =>
              setState({ ...state, tipoSelecionado: e.value.name })
            }
            options={state.tipo}
            value={state.tipo.find((t) => t.name === state.tipoSelecionado)}
            optionLabel="name"
            placeholder="Selecione o tipo"
            className="w-full md:w-31rem"
          />
        </div>
        <br></br>
        <div className="p-field">
          <label htmlFor="type">Descrição</label>
          <Dropdown
            onChange={(e: any) =>
              setState({ ...state, descricaoSelecionado: e.value.name })
            }
            options={
              state.tipoSelecionado === "Entrada"
                ? state.categoriaEntrada
                : state.categoriaSaida
            }
            value={
              state.tipoSelecionado === "Entrada"
                ? state.categoriaEntrada.find(
                    (t) => t.name === state.descricaoSelecionado
                  )
                : state.categoriaSaida.find(
                    (t) => t.name === state.descricaoSelecionado
                  )
            }
            optionLabel="name"
            placeholder="Selecione a descrição"
            className="w-full md:w-31rem"
            disabled={state.tipoSelecionado === ""}
          />
        </div>
        <br></br>
        <div className="p-field">
          <label htmlFor="value">Valor</label>
          <InputNumber
            minFractionDigits={2}
            onChange={(e: any) => setState({ ...state, valor: e.value })}
            value={state.valor}
          />
        </div>
        <br></br>
        <div className="p-field">
          <label htmlFor="date">Data</label>
          <Calendar
            dateFormat="dd/mm/yy"
            id="date"
            onChange={(e: any) =>
              setState((prev) => ({ ...prev, data: new Date(e.value) }))
            }
            showIcon
            value={state.data ? new Date(state.data) : null}
          />
        </div>
        <br></br>

        <br></br>
        <Button
          type="submit"
          label="Atualizar"
          onClick={() => {
            editarDados({
              id: dados.id,
              tipo: state.tipoSelecionado,
              valor: state.valor,
              data: state.data?.toLocaleDateString("pt-BR"),
              descricao: state.descricaoSelecionado,
            });
            setState((prev) => ({
              ...prev,
              tipoSelecionado: "",
              descricaoSelecionado: "",
              valor: null,
              data: null,
            }));
            onHide();
          }}
        />
      </div>
      <br></br>
      <Button
        severity="danger"
        type="submit"
        label="Excluir"
        onClick={() => {
          excluirDados(dados.id);
          onHide();
        }}
      />
    </div>
  );
};

export default EditarEntradaSaidaComponent;
