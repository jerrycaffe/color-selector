import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {addColor, colorValue} from '../actions'
import Home from './Home'


class New extends Component{
   
  handleSubmit = ()=>{
   const value = this.props.reduxStateAsProp.colorValue
   const id = Math.floor(Math.random()*1000)
   const newVal = {id, value}
    this.props.addColor(newVal)
     
  }

   handleChange=(event)=>{
  let value = event.target.value
   this.props.colorValue(value)
  }

render() {
  return (
    <div className="newColor">
      <form>
          <label htmlFor="colorName"> Color name: 
          <input 
            type="text" 
            onChange ={this.handleChange}
            value ={this.props.value}
          />
        </label>
       
        <Link to="/colors" onClick={this.handleSubmit}>Add Color</Link>
        <Route path="/colors" Component= {<Home />} />
        </form>
      
    </div>
  );
}
}
const mapStateToProps = (state)=>{ return {reduxStateAsProp: state
  }
}

const mapDispatchToProps = {addColor, colorValue}

export default connect(mapStateToProps , mapDispatchToProps)(New);
