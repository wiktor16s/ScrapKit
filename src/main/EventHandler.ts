import { ipcMain } from "electron";
import JsonValider from "./jsonValider/JsonValider";

class EventHandler {
  constructor() {}

  start() {
    ipcMain.on("openDialogForJson", (event: any, arg: any) => {
      JsonValider.openDialog(event);
    });
  }

  stop() {
    ipcMain.removeAllListeners("");
  }
}

export default EventHandler;
