import React from "react";
import { Card } from "primereact/card";

export default function ExibeCaixaComponent() {
  return (
    <div className="flex justify-content-center">
      <div
        className="flex flex-wrap justify-content-center"
        style={{ width: "100%" }}
      >
        <div className="col-4" style={{ padding: "1em" }}>
          <Card title="Total em Caixa" style={{ backgroundColor: "#87ceeb" }}>
            <p
              className="m-0"
              style={{ fontSize: "24px", color: "#333", fontWeight: "bold" }}
            >
              $10.000,00
            </p>
          </Card>
        </div>
        <div className="col-4" style={{ padding: "1em" }}>
          <Card title="Entradas" style={{ backgroundColor: "#C6F4D6" }}>
            <p
              className="m-0"
              style={{ fontSize: "24px", color: "#34C759", fontWeight: "bold" }}
            >
              $5.000,00
            </p>
          </Card>
        </div>
        <div className="col-4" style={{ padding: "1em" }}>
          <Card title="Saidas" style={{ backgroundColor: "#F7D2C4" }}>
            <p
              className="m-0"
              style={{ fontSize: "24px", color: "#FF3737", fontWeight: "bold" }}
            >
              -$3.000,00
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
