import React from 'react'
import Home from './components/Home'
import New from './components/New';
import ColorGlory from './components/ColorsGlory';
import {Route, Switch, Redirect} from 'react-router-dom';

const App = ()=>{
  return (
    <Switch>
      <Route path="/colors/new" component={New} />
      <Route path="/colors/:id" render={(props)=><ColorGlory          {...props}/>} />
      <Route path="/colors" component= {(props)=> <Home {...props}    />} />
      <Redirect to="/colors" />
    </Switch>
  )
}



export default App;
