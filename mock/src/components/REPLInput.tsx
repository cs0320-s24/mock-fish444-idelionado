import { Dispatch, SetStateAction, useState } from 'react';
import '../styles/main.css';
import { ControlledInput } from './ControlledInput';
import{ mockView } from './MockView';
import { addCommand, handleCommand } from './Commands';
import { mockSearch } from './MockSearchBasic';

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  // CHANGED
  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>,
  //brief is true
  mode: true


  
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    // TODO WITH TA : add a count state
    const [count, setCount] = useState<number>(0);

    const [mode, setMode] = useState<Boolean>(true);

    const [holdURL, setHoldURL] = useState<string>('');


    /**
     * function that contains the mode logic and goes to the command map
     * @param args contains the command line
     * @returns empty list
     */
    function modeHandler (args: Array<string>) : String | String[][] {
      const newMode = !props.mode
        setMode(newMode)
        setCommandString('')
        return ""
    }
    addCommand("mode", modeHandler)


    /**
     * function that has the load logic in it and gets inputted to the command map
     * @param args have the command line in it
     * @returns empty list
     */
    function loadHandler (args: Array<string>) : String | String[][] {
      const newHoldURL = args[1]
        setHoldURL(newHoldURL)
        //setHoldURL(props.holdURL = arr[1])
        props.setHistory([...props.history,  "successfully loaded"])
        setCommandString('')
        return "successfully loaded"
      
    }
    addCommand("load_file", loadHandler)

    function viewHandler (args: Array<string>) : String | String[][] {
      if (args.length == 1) {
        if (holdURL != "") {
          props.setHistory([...props.history, mockView(holdURL)])
          setCommandString('')
        } else {
          props.setHistory([...props.history, mockView("Did not load CSV")])
        }
      }
      return ""
      
 
    }
    addCommand("view", viewHandler)

      
    /**
     * function contains the logic of search and inputs into the command map
     * @param args contains the command line
     * @returns 
     */
    function searchHandler (args: Array<string>) : String | String [][]  {
    
      if ((args[1] === "2") && args[2] === "English") {
        console.log(holdURL)
        const result = mockSearch(holdURL, args[1]!, args[2]!);
        props.setHistory([...props.history, result instanceof Array ? result[0]: result])
        setCommandString('')
      } else if ((args[1] == "3")  && (args[2] == "red")) {
        const result = mockSearch(holdURL, args[1]!, args[2]!);
        props.setHistory([...props.history, result instanceof Array ? result[0]: result])
        setCommandString('')

      }
      return " ";
  
 
    }
    addCommand("search", searchHandler)
    


    
  
  
    
    // This function is triggered when the button is clicked.
    function handleSubmit(commandString:string) {

      // handle if statement for mode
      setCount(count+1);

      let arr = commandString.split(' ');


      
      if ((arr[0] === "mode") || (arr[0] == "view") || (arr[0] == "search") || (arr[0] === "load_file")) {
        handleCommand(arr[0], arr)
      } else {
        props.setHistory([...props.history,  commandString])
        setCommandString('')
      }
        
    }
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button onClick={() => handleSubmit(commandString)}>Submitted {count} times</button>
        </div>
    );
  }