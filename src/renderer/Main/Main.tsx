import * as React from "react";
import * as ReactDOM from "react-dom";
import { ipcRenderer } from "electron";
import { Button, Row, Col } from "react-materialize";
import Language from "../../langs/index";

import "./Main.scss";

const lang = new Language("english");

class Main extends React.Component {
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

  componentWillUnmount() {
    ipcRenderer.removeAllListeners("test-reply");
  }

  openJsonDialog() {
    return (
      new Promise((resolve) => {
        ipcRenderer.send("openDialogForJson");
        ipcRenderer.once("jsons", (event: any, data: any)=>{
          resolve(data);
        })
      })
    )
  }

  render() {
    return (
      <Row className="mainRow">
        <Col className="mainCol" s={12}>
          <h1 className="center-align">ScrapKit</h1>
          <ol>
            <li>Click select button.</li>
            <li>
              Select Scrap Mechanic location. For example: C:\Program Files
              (x86)\Steam\steamapps\common\Scrap Mechanic.
            </li>
            <li>Modify Recipes and dont forget to save.</li>
            <li>
              Share modified recipes with your friends to make it works in
              survival multiplayer.
            </li>
            <li>You can load recipes from received folder.</li>
            <li>If something goes wrong, you can load last saved folder, or delete all changes.</li>
            <li>Have fun!</li>
          </ol>
          <Row className="center-align">
            <Col s={3}>
              <Button
                onClick={() => {
                  this.openJsonDialog().then(e=>{
                    console.log(e);
                  });
                }}
              >
                Select
              </Button>
            </Col>
            <Col s={3}>
              <Button
                onClick={() => {
                  this.openJsonDialog();
                }}
              >
                Share
              </Button>
            </Col>
            <Col s={3}>
              <Button
                onClick={() => {
                  this.openJsonDialog();
                }}
              >
                Load
              </Button>
            </Col>
            <Col s={3}>
              <Button
                onClick={() => {
                  this.openJsonDialog();
                }}
              >
                RESTORE
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Main;
