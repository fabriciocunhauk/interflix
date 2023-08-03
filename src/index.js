import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import CadastroVideo from './components/pages/cadastro/Video/CadastroVideo';
import CadastroCategoria from './components/pages/cadastro/Categoria/Categoria';
import './index.css';

const root = createRoot(document.getElementById('root'));

// React router DOM

const page404 = () => (<div>Page 404</div>)

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={page404} />
    </Routes>
  </BrowserRouter>
);
