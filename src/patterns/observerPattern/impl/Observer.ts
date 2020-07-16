export interface ObserverType {
  update: (context: unknown) => void;
}

class Observer implements ObserverType {
  update(context: unknown): void {
    console.log('hello from Observer', context);
  }
}

export default Observer;
