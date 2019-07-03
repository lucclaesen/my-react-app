import React from 'react';
import './App.css';
import ResizablePane from "./ResizablePane"

export default class App extends React.Component{

  render() {
    return (
      <div id="app">
        <ResizablePane>
          <div>
            Pane content comes here ...
          </div>
        </ResizablePane>
      </div>
    );  
  }
}
