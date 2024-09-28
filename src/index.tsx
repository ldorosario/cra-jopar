import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'primereact/resources/themes/mira/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { locale, addLocale } from 'primereact/api';
import { MenuBarComponent } from './components/menubar';
import { EntradaSaidaContainer } from './containers/financeiro/entradas-saidas';
import { pt } from './pt';

const router = createBrowserRouter([
  {
    path: "/financeiro/entrada-saida",
    element: <EntradaSaidaContainer/>
  },

]); 

addLocale("pt", pt);
locale("pt");
ReactDOM.render(
  <React.StrictMode>  
    <MenuBarComponent/>
     <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
