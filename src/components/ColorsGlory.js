import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './Home'

class ColorGlory extends Component{
  render(){
    return(  
      <div 
        style={{background: this.props.match.params.id}} className="ColorsGlory">

          <h1>THIS IS {(this.props.match.params.id.toUpperCase())}</h1>
          <h1>ISN'T IT BEAUTIFUL?</h1>
        <Link to="/colors">GO BACK</Link>
        <Route path="/colors" Component= {<Home />} />
      </div>
        )
      }
    } 
        

export default ColorGlory;