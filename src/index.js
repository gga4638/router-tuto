import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './routes/Expenses';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';
import { InvoiceProvider } from './InvoiceContext';

ReactDOM.render(
  <InvoiceProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an invoice</p>
                </main>
              } 
            />
            <Route path=":invoiceId" element={<Invoice />}></Route>
          </Route>
          <Route path="*" element={
              <main>
                <p>페이지를 찾을 수 없습니다!</p>
              </main>
            } 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </InvoiceProvider>,
  document.getElementById('root')
);
