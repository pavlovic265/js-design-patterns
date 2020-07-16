import { ObserverType } from './Observer';

class ObserverList {
  observerList: ObserverType[] = [];

  add(obj: ObserverType): void {
    this.observerList.push(obj);
  }

  count(): number {
    return this.observerList.length;
  }

  get(index: number): ObserverType {
    if (index > -1 && index < this.observerList.length && this.observerList[index]) {
      return this.observerList[index];
    }
  }

  indexOf(obj: ObserverType, startIndex: number): number {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  }

  removeAt(index: number): void {
    this.observerList.splice(index, 1);
  }
}

export default ObserverList;
