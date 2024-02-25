import { Dispatch, SetStateAction } from 'react';

/**
 * true is brief and false is verbose
 */

interface ModeProps {
  isMode: true 
  setIsModeIn: Dispatch<SetStateAction<boolean>>
}

export function ModeButton(props: ModeProps) {

  const authenticate = () => {
    const newValue = !props.isMode
    props.setIsModeIn(newValue)
    return newValue
  }

  if (props.isMode) {
    return (
      <button aria-label='Brief' onClick={authenticate}>Brief</button>
    )
  } else {
    return (
      <button aria-label='Verbose' onClick={authenticate}>Verbose</button>
    )
  }
}