import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.css';

class Home extends Component {
    
  render(){    
    return (
      <div className="App">
        <div className="App-header">
          <p>Welcome to the color factor</p>

          <h3><Link to="/colors/new">Add A Color</Link></h3>
        </div>
      <section>
        <h2> Please Select a color </h2>
        <ul>
          {this.props.reduxStateAsProp.colors.map((color)=>{
            return (
              <li key={color.id}>
                <Link to={"/colors/"+color.value}>
                  {color.value.toUpperCase()}
                </Link>
              </li>)
          })}
        </ul>
      </section>
    </div> 
  );
}}

const mapStateToProps = (state)=>{ return {reduxStateAsProp: state

  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps , mapDispatchToProps)(Home);

