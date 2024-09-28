import { Menubar } from "primereact/menubar";
import React from "react";
import { items } from "./items";

export const MenuBarComponent : React.FC = () => {
    return (
        <div className="card">
        <Menubar model={items} />
    </div>
    )
}