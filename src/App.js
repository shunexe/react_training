import React,{Component} from 'react';
import Rect from './Rect';
import './App.css';
import _ from 'lodash'

class App extends Component {
  data =[];
  msgStyle = {
    fontSize:"20pt",
    color:"#900",
    margin:"20px 0px",
    padding:"5px",
  }
  area ={
    width:"500px",
    height:"500px",
    border:"1px solid blue"
  }

  constructor(props){
    super(props);
    this.state={
      list:this.data
    };
    this.doAction=this.doAction.bind(this);
  }
  doAction(e){
    let x=e.pageX;
    let y=e.pageY;
    let newData = _.cloneDeep(this.state.list)
    newData.push({x:x,y:y});//参照渡しになってる→値渡し　
    this.setState(({
      list:newData
    }));
  }

  draw(d){
    let s={
      position:"absolute",
      left:(d.x-25)+"px",
      top:(d.y-25)+"px",
      width:"50px",
      height:"50px",
      backgroundColor:"#66f3"
    };
    return <div style={s}></div>;
  }

  render(){
    return <div>
      <h1>React</h1>
      <h2 style={this.msgStyle}>show rect.</h2>
      <div style={this.area} onClick={this.doAction}>
        {this.state.list.map((value)=>this.draw(value))}
      </div>
    </div>;
  }
}

export default App;
