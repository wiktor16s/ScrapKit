
const LANG: string = "english";


import { app, BrowserWindow } from "electron";
import * as path from "path";
import * as url from "url";
import EventHandler from "./EventHandler";
import Language from "../langs/index";

let mainWindow: Electron.BrowserWindow | null;

function createWindow(): void {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      webSecurity: false,
      devTools: process.env.NODE_ENV === "production" ? false : true,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "./index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });


  const eventHandler = new EventHandler();
  eventHandler.start();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

