import { NO_MATCH } from "../common";

const linearSearch = (items: any[], item: any): number => {
  for (let index = 0; index < items.length; index++) {
    if (items[index] === item) {
      return index;
    }
  }

  return NO_MATCH;
};

export default linearSearch;
