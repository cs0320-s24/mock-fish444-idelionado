import { REPLFunction } from "./REPLFunction";


const commandMap = new Map<string, REPLFunction>();
const commandName : string

const CommandHandler = () -> {
    handleCommand
    addCommand

} //may not need

function handleCommand(commandMap: Map<string, REPLFunction>, commandName: string, args: Array<string>){
    const commandFunction = commandMap.get(commandName);
    if(commandFunction){
        return commandFunction(args);
    }else{
        return "Error: Command not found"
    }
}

function addCommand(commandMap: Map<string, REPLFunction>, commandName: string, commandFunction: REPLFunction){
    commandMap.add(commandName,commandFunction);
}

export{CommandHandler}
