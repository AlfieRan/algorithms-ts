import { Console } from "winston/lib/winston/transports";
import { NO_MATCH } from "../common";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const binarySearch = (items: any[], item: any): number => {
  let completed: boolean = false;
  let pointer = Math.floor(items.length / 2);
  console.log(items);
  let finalPointer = pointer;
  let editedList = [...items];
  let result: number = 0;
  let runs = 0;
  let maxRuns = 25;

  while (!completed) {
    runs++;
    if (runs > maxRuns) {
      console.log("Infinite loop :(");
      completed = true;
    }

    if (item === items[finalPointer]) {
      result = finalPointer;
      console.log(result);
      completed = true;
    } else if (item < editedList[pointer]) {
      editedList = editedList.splice(0, pointer);
      pointer = Math.floor(editedList.length / 2);
      finalPointer -= pointer;
    } else if (item > editedList[pointer]) {
      editedList = editedList.splice(pointer);
      pointer = Math.floor(editedList.length / 2);
      finalPointer += pointer;
    } else {
      console.log("pain and suffering");
      return NO_MATCH;
      completed = true;
    }
    console.log(
      `item:${item}\nlist:${items}\npointer:${pointer}\nfinal-pointer:${finalPointer}\npointer-item:${items[finalPointer]}\nedited-list:${editedList}`
    );
  }
  console.log(`This should be the returned value??? ${result}`);
  return result;
};

function LetToNum(letter: string) {
  let num = alphabet.indexOf(letter);
  return num;
}

function NumToLet(number: number) {
  let letter: string = alphabet[number];
  return letter;
}

export default binarySearch;
