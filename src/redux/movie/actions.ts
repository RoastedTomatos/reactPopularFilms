import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./types";

export const doIncrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
}

export const doDecrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
}