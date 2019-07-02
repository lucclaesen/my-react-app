import React from 'react';
import './App.css';
import ResizablePane from "./ResizablePane"

type State = {
  propagateMouseMoves: boolean;
  clientX: number;
}

export default class App extends React.Component<{}, State> {

  readonly state = { 
    propagateMouseMoves: false,
    clientX: 500
  };

  render() {
    return (
      <div id="app" 
        onMouseMove={this.onMouseMove} 
        onMouseUp={() => this.propagateMouseMoves(false)}>
        
        <ResizablePane 
            propagateMouseMoves={this.propagateMouseMoves}
            clientX = {this.state.clientX}
            />
      
      </div>
    );  
  }

  onMouseMove = (ev: React.MouseEvent) => {
    if (this.state.propagateMouseMoves) {
      const clientX = ev.clientX;
      this.setState((currentState) => ({
        ...currentState,
        clientX
      }));
    }
  };

  propagateMouseMoves = (ev: boolean) => {
    console.log(`About to ${ev? "start" : "stop"} following the mouse position.`);
    this.setState(() => ({propagateMouseMoves: ev}));
  }
}
