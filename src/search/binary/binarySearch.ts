import { NO_MATCH } from "../common";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const binarySearch = (items: any[], item: any): number => {
  return NO_MATCH;
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
