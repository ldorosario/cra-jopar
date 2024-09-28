import React from "react";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { DialogComponent } from "../dialog";
import NovaEntradaSaidaComponent from "../forms/entrada-saida";

interface FieldSetProps {
  legend: string;
  component: React.ReactNode;
  salvarDados: (body: Record<string, any>) => void;
}
export const FieldSetComponent: React.FC<FieldSetProps> = ({
  legend,
  component,
  salvarDados,
}) => {
  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const legendTemplate = (
    <div className="flex align-items-center gap-2 px-2">
      <span className="font-bold">{legend}</span>
      <Button severity="secondary" onClick={() => setVisibleDialog(true)}>
        +
      </Button>
    </div>
  );

  return (
    <div className="card" style={{ marginTop: "1rem" }}>
      <Fieldset legend={legendTemplate}>{component}</Fieldset>
      <DialogComponent
        visible={visibleDialog}
        onHide={() => setVisibleDialog(false)}
        component={<NovaEntradaSaidaComponent salvarDados={salvarDados} />}
      />
    </div>
  );
};
