import { withRouter } from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ipcRenderer } from "electron";
import { Button, Row, Col } from "react-materialize";
import Language from "../../langs/index";
import "./Header.scss";

const lang = new Language("english");

class Header extends React.Component {
  public state: {};
  public props: {
    changeRoute(path: string): void;
  };

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  

  render() {
    return (
      <Row className="body">
        <Col className="bodyCol center" s={12}>
          <Row className="wrapper">
            <Col className="Reciper" s={3}>
              <Button
                className="kitButton"
                onClick={() => {
                  this.props.changeRoute("/reciper");
                }}
              >
                Reciper
              </Button>
            </Col>
            <Col className="Cooker" s={3}>
              <Button
                className="kitButton"
                onClick={() => {
                  this.props.changeRoute("/cooker");
                }}  
              >
                Cooker
              </Button>
            </Col>
            <Col className="Rafiner" s={3}>
              <Button
                className="kitButton"
                onClick={() => {
                  this.props.changeRoute("/rafiner");
                }}
              >
                Rafiner
              </Button>
            </Col>
            <Col className="Another" s={3}>
              <Button
                className="kitButton"
                onClick={() => {
                  this.props.changeRoute("/");
                }}
              >
                Main
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Header;
