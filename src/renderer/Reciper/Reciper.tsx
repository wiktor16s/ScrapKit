import * as React from "react";
import * as ReactDOM from "react-dom";
import { ipcRenderer } from "electron";
import { Button, Row, Col } from "react-materialize";
import Language from "../../langs/index"; 

const lang = new Language("english");

class Reciper extends React.Component {
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
        Reciper
      </div>
    );
  }
}

export default Reciper;
