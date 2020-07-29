import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home/Home';
import CadastroVideo from './components/pages/cadastro/Video/CadastroVideo';
import CadastroCategoria from './components/pages/cadastro/Categoria/Categoria';

// React router DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const page404 = () => (<div>Page 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
