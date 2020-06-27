import * as React from "react";
import * as ReactDOM from "react-dom";
import { ipcRenderer } from "electron";
import { Button, Row, Col } from "react-materialize";
import Language from "../../langs/index"; 

const lang = new Language("english");

class Cooker extends React.Component {
  public state: {};
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    ipcRenderer.on("test-reply", (event: any, arg: any) => {
      console.log(arg); // prints "pong"
    });
  }

  render() {
    return (
      <div className="main">
        Cooker
      </div>
    );
  }
}

export default Cooker;
