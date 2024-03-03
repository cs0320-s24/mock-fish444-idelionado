import { Dispatch, SetStateAction } from 'react';
import { mockView } from '../MockView';


export function viewHandler(url: string) {
  return mockView(url)
}