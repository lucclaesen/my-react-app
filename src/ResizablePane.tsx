import React from "react";


type Props =  {
  clientX: number;
  propagateMouseMoves: (ev: boolean) => void
}

export default class ResizablePane extends React.Component<Props> {

  render() {
    return (
      <div className="resizable-pane" 
        style={{width: this.props.clientX}}
>
        <div className="resize-handle" 
          onMouseDown={this.onMouseDown}>
        </div>
      </div>
    );
  }

  onMouseDown = () => {
    console.log("MouseDown event received");
    this.props.propagateMouseMoves(true);
  } 
}