import * as EnglishLang from "../langs/english.json";

class Lang{
    public lang: string;
    constructor(lang: string){
        this.lang = lang;
    }

    get(): any{
        switch(this.lang){
          case "english":
            return EnglishLang;
        }
      }
}

export default Lang;