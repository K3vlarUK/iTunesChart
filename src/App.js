import React from 'react';
import './App.css';
import ChartContainer from './containers/ChartContainer';

class App extends React.Component {
  render(){
    return (
    <div className="App">
      <h1>iTunes UK Top 20</h1>
      <ChartContainer />
    </div>
    );
  }
}
  
  export default App;
  