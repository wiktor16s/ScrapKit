import * as React from "react";
import * as ReactDOM from "react-dom";
import { ipcRenderer } from "electron";
import { Button, Row, Col } from "react-materialize";
import Language from "../../langs/index"; 
import globalState from "../../GlobalState";

const lang = new Language("english");

class Rafiner extends React.Component {
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

  componentWillUnmount(){
    ipcRenderer.removeAllListeners("test-reply");
  }

  render() {
    return (
      <div className="main">
        Rafiner
      </div>
    );
  }
}

export default Rafiner;
