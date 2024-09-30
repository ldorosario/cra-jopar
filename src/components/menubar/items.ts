export const items = [
  {
    label: "Home",
    icon: "pi pi-home",
    url: "/",
  },
  {
    label: "Financeiro",
    icon: "pi pi-wallet",
    items: [
      {
        label: "Livro caixa",
        icon: "pi pi-book",
        items: [
          {
            label: "Entradas / Saidas",
            icon: "pi pi-arrows-v",
            url: "/financeiro/entrada-saida",
          },
        ],
      },
    ],
  },
];
