import React,{Component} from 'react';
import Rect from './Rect';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super();
  //   this.title=props.title;
  //   this.message=props.message;
  // }
  render(){
    return <div>
      <h1>React</h1>
      <Rect x="50" y="50" w="150" h="150" c="cyan" r="50"/>
      <Rect x="150" y="100" w="150" h="150" c="magenta" r="75" />
      <Rect x="100" y="150" w="150" h="150" c="black" r="25"/>
    </div>;
  }
}

export default App;
