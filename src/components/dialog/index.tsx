import { Dialog } from "primereact/dialog";

import React, { useState } from "react";

interface DialogProps {
  visible: boolean;
  onHide: () => void;
  component: React.ReactNode;
}

export const DialogComponent: React.FC<DialogProps> = ({
  visible,
  onHide,
  component,
}) => {
  return (
    <Dialog
      visible={visible}
      modal
      className="p-fluid"
      style={{ width: "auto", height: "auto" }}
      onHide={() => {
        onHide();
      }}
    >
      {component}
    </Dialog>
  );
};
