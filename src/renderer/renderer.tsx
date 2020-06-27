import * as React from "react";
import * as ReactDOM from "react-dom";
import "@public/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "./Main/Main";
import Reciper from "./Reciper/Reciper";
import Cooker from "./Cooker/Cooker";
import Header from "./modules/Header";
import Rafiner from "./Rafiner/Rafiner";

import globalState from "../GlobalState";

class Renderer extends React.Component {
  private routes: {
    main: string;
    reciper: string;
    cooker: string;
    rafiner: string;
  };

  public state: any;

  constructor(props: any) {
    super(props);

    this.state = {
      route: "/",
    };

    this.routes = {
      main: "/",
      reciper: "/reciper",
      cooker: "/cooker",
      rafiner: "/rafiner",
    };

    this.Route = this.Route.bind(this);
    this.routeChange = this.routeChange.bind(this);
    globalState.set({hi: "there"});
    console.log(globalState.get());
  }

  Route(props: { route: string }) {
    switch (props.route) {
      case this.routes.main:
        return <Main />;
      case this.routes.reciper:
        return <Reciper />;
      case this.routes.cooker:
        return <Cooker />;
      case this.routes.rafiner:
        return <Rafiner />;
      default:
        return <div>ANOTHER</div>;
    }
  }

  routeChange(path: string) {
    console.log("Path: ", path);
    this.setState({ route: path });
  }

  render() {
    return (
      <div>
        <Header changeRoute={this.routeChange} />
        <this.Route route={this.state.route} />
      </div>
    );
  }
}

ReactDOM.render(<Renderer />, document.getElementById("app"));
