import React from "react";

type State = {
  captureMouseMoves: boolean,
  clientX?: number;
};

type Props = {
  children: React.ReactNode
};

export default class ResizablePane extends React.Component<Props, State> {

  readonly state: State = {
    captureMouseMoves: false,
  }

  render() {
    return (
      <div className="resizable-pane" 
        style={{width: this.state.clientX}}>
        <div className="resize-handle" 
          onMouseDown={this.onMouseDown}>
        </div>
        {this.props.children}
      </div>
    );
  }

  componentDidUpdate(_: any, previousState: State) {
    if (previousState.captureMouseMoves === this.state.captureMouseMoves) {
      return;
    }

    if (this.state.captureMouseMoves) {
      window.addEventListener("mouseup", this.onMouseUp);
      window.addEventListener("mousemove", this.onMouseMove);
    }
    else {
      window.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("mouseup", this.onMouseUp);
    }
  }

  onMouseDown = () => {
    console.log("MouseDown event received");
    this.setState(() => ({captureMouseMoves: true}));
  } 

  onMouseUp = () => {
    console.log("MouseUp received on window");
    this.setState(() => ({captureMouseMoves: false}));
  }

  onMouseMove = (ev: MouseEvent) => {
    console.log("MouseMove event received");
    this.setState(() => ({clientX: ev.clientX}));
  }
}