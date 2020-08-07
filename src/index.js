import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './Pages/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './Pages/cadastro/video'
import CadastroCategoria from './Pages/cadastro/categoria'
import PageNotFound from './Pages/Page404'

ReactDOM.render(
 <BrowserRouter>
  <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={PageNotFound}/>
  </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);
