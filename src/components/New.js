import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addColor, inputChange, inputName} from '../actions';



class New extends Component{
   
  handleSubmit = ()=>{
   const value = this.props.reduxStateAsProp.newValue;
   const name = this.props.reduxStateAsProp.newName;
   
  
   console.log(value, name);
    this.props.addColor(value, name)
  }

  handleInputName=(event)=>{
  let value = event.target.value
   this.props.inputName(value)
  }
  handleInputChange=(event)=>{
    let value = event.target.value  
    this.props.inputChange(value)
    }

render() {
  return (
    <div className="newColor">
      <form>
      <label> Color Pickier: 
          <input 
            type="color"
            onChange ={this.handleInputChange}
            value ={this.props.newValue}
          />
        </label>
          <label> Color name: 
          <input 
            type="text"
            onChange ={this.handleInputName}
            value ={this.props.newName}
          />
        </label>
       
        <Link to="/colors" onClick={this.handleSubmit}>Add Color</Link>
        
        </form>
      
    </div>
  );
}
}
const mapStateToProps = (state)=>{ return {reduxStateAsProp: state
  }
}

const mapDispatchToProps = {inputName, inputChange, addColor}

export default connect(mapStateToProps , mapDispatchToProps)(New);
