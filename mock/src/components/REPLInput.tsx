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

    function modeHandler (args: Array<string>) : String | String[][] {
      const newMode = !props.mode
        setMode(newMode)
        setCommandString('')
        return ""
    }
    addCommand("mode", modeHandler)

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

    
    
    function searchHandler (args: Array<string>) : String | String[][] {
      //const stringArr1 = arr[1].toString
      //const stringArr2 = arr[2].toString
      
      if ((args[1] === "2") && args[2] === "English") {
        props.setHistory([...props.history, mockSearch(args[1]!, args[2]!)])
        setCommandString('')
      }
      return ''
      
 
    }
    addCommand("view", searchHandler)
    




    

    
    
    // This function is triggered when the button is clicked.
    function handleSubmit(commandString:string) {

      // handle if statement for mode
      setCount(count+1);

      let arr = commandString.split(' ');

      //commandString.split(/(\s+)/)


      //commandString === "mode"
      //commandString === "load_file"

      
      /** 
      if ((arr[0] === "mode")) {
        console.log("test")
        const newMode = !props.mode
        setMode(newMode)
        setCommandString('')
        return newMode
      } else if (arr[0] === "load_file") {
        //props.holdURL = arr[1]
        const newHoldURL = arr[1]
        setHoldURL(newHoldURL)
        //setHoldURL(props.holdURL = arr[1])
        console.log("test load")
        console.log(holdURL)
        props.setHistory([...props.history,  "successfully loaded"])
        setCommandString('')

      }else if(arr[0] == "view") {
        if (arr.length == 1) {
          console.log("array is length 1")
          if (holdURL != "") {
            console.log("does just view work")
            console.log(holdURL)
            props.setHistory([...props.history, mockView(holdURL)])
            setCommandString('')
          } else {
            props.setHistory([...props.history, mockView("Did not load CSV")])
          }
          }

        if (arr[1] != holdURL) {
          console.log("does this print")
          console.log(arr[1])
          props.setHistory([...props.history, mockView(arr[1])])
          //props.setHistory([...props.history, "doea view work"])
          setCommandString('')
        } else {
          console.log("should print url2")
          props.setHistory([...props.history, mockView(holdURL)])
          setCommandString('')

        }
      

      } else {
          props.setHistory([...props.history,  commandString])
          setCommandString('')
      }
      */

      
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
