import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from  'react-router'
import About from './components/about'
import APP from './components/App'
import Repo from './components/repo'
import Home from './components/home'
import Repos from './components/Repos'
ReactDOM.render((
  <Router  history={hashHistory}>
     <Route  path='/'  component={APP}>
        <IndexRoute component={Home}/>
        <Route  path='/about' component={About}></Route>
        <Route  path='/repo' component={Repo}>
          <Route path='/Repos/:name/:repo' component={Repos}/>
        </Route>


     </Route>

  </Router>
) ,document.getElementById('root')
)
