import ObserverList from './ObserverList';
import { ObserverType } from './Observer';

class Subject {
  observers: ObserverList = new ObserverList();

  addObserver(observer: ObserverType): void {
    this.observers.add(observer);
  }

  removeObserver(observer: ObserverType): void {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  notify(context: unknown): void {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

export default Subject;
