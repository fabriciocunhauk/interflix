import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/pages/Home/Home.js';
import CadastroVideo from './components/pages/cadastro/Video/CadastroVideo.js';
import CadastroCategoria from './components/pages/cadastro/Categoria/Categoria.js';

// React router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Page404 = () => (<div>Page 404</div>)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);
