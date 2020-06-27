interface state {
    data: any;
    set(newData: any): any;
    get(): any;
}

const globalState: state = {
    data:{},
    set: ()=>{},
    get: ()=>{}
}
globalState.set = (newData)=>{
    globalState.data = newData;
}
globalState.get = () => {
    return globalState.data;
}

export default globalState;