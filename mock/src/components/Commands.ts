import { REPLFunction } from "./REPLFunction";


const commandMap = new Map<string, REPLFunction>();

export function handleCommand(commandName: string, args: Array<string>){
    const commandFunction = commandMap.get(commandName);
    if(commandFunction){
        return commandFunction(args);
    }else{
        return "Error: Command not found"
    }
}

export function addCommand(name: string, commandFunction: REPLFunction){
    commandMap.set(name,commandFunction);
}

//might need a return type 
//export{CommandHandler}

