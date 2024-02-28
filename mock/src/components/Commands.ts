import { REPLFunction } from "./REPLFunction";


const commandMap = new Map<string, REPLFunction>();
const commandName : string

const CommandHandler = () -> {
    handleCommand
    addCommand

}

function handleCommand(commandMap, commandName, args){
    const commandFunction = commandMap.get(commandName);
    if(commandFunction){
        return commandFunction(args);
    }else{
        return "Error: Command not found"
    }
}

function addCommand(commandMap, commandName, commandFunction){
    commandMap.add(commandName,commandFunction);
}

export{CommandHandler}
