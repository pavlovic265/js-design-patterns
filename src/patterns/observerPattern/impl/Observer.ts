export interface ObserverType {
  update: (context: unknown) => void;
}

function getObserver(): ObserverType {
  function update(context: ObserverType): void {
    console.log("hello from Observer", context);
  }

  return { update } as ObserverType;
}

interface ObserverElementType extends HTMLInputElement, ObserverType {}
export function extendElementWithObserver(element: HTMLInputElement): ObserverElementType {
  const observer = getObserver();

  return Object.assign(element, observer);
}
