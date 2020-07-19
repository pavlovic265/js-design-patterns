import ObserverList from "./ObserverList";
import { ObserverType } from "./Observer";

export interface SubjectType {
  addObserver(observer: ObserverType): void;
  removeObserver(observer: ObserverType): void;
  notify(context: unknown): void;
}

export function getSubject(): SubjectType {
  const observers: ObserverList = new ObserverList();

  function addObserver(observer: ObserverType): void {
    observers.add(observer);
  }

  function removeObserver(observer: ObserverType): void {
    observers.removeAt(observers.indexOf(observer, 0));
  }

  function notify(context: unknown): void {
    const observerCount = observers.count();
    for (let i = 0; i < observerCount; i++) {
      observers.get(i).update(context);
    }
  }

  return { addObserver, removeObserver, notify } as SubjectType;
}

interface SubjectElementType extends HTMLInputElement, SubjectType {}
export function extendElementWithSubject(element: HTMLInputElement): SubjectElementType {
  const subject = getSubject();

  return Object.assign(element, subject);
}
