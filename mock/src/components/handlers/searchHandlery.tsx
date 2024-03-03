import { Dispatch, SetStateAction } from 'react';


export function LoginButton(column: number, value: string) {

  if ((column == null) && (value == null)) {
    return "not found"
  }

  if ((column == 2) && (value == "English")) {
    return ["Tom", "21", "English"]
  }
  if ((column  == 3) && (value == "red")) {
    return ["cherries", "red", "$3.00"]
  }

  
}