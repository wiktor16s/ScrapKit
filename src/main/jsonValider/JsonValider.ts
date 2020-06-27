import { dialog } from "electron";
import { ipcMain } from "electron";
import Language from "../../langs/index";
import * as fs from 'fs';

const lang = new Language("english");

const listOfJsons = {
  craftbot: "/Survival/CraftingRecipes/craftbot.json",
  cookbot: "/Survival/CraftingRecipes/cookbot.json",
  rafinery: "/Survival/CraftingRecipes/refinery.json",
  itemNames: "/Survival/CraftingRecipes/item_names.json",
}

class JsonValider {
  getSingleJson(path: string) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        const dataArray = data.split("\n");
        const searchKeyword = "//";
        let lastIndex = -1;

        for (let index = 0; index < dataArray.length; index++) {
          if (dataArray[index].includes(searchKeyword)) {
            lastIndex = index;
            break;
          }
        }
        dataArray.splice(lastIndex, 1);
        const updatedData = dataArray.join("\n");
        const JSO = JSON.parse(updatedData);
        resolve(JSO);
      });
    });
  }

  getJsons(path: string) {
    this.getSingleJson(path+listOfJsons.craftbot).then(data=>{
      console.log(data);
    })
  }

  openDialog(event: any) {
    dialog.showOpenDialog(
      {
        properties: ["openDirectory"],
        message: lang.get().selectScrapDirector,
      },
      (selectedFolder) => {
        this.getJsons(selectedFolder[0]);
      }
    );
  }
}

export default new JsonValider();
