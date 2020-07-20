type TopicFunc = (topic: string, args: any) => any;

type Topic = {
  token: string;
  func: TopicFunc;
};

type Topics = {
  [key: string]: Topic[];
};

type PubSub = {
  publish: (topic: string, args: any) => boolean;
  subscribe: (topic: string, func: TopicFunc) => string;
  unsubscribe: (topic: string, token: string) => boolean;
};

const topics: Topics = {};
let subUid = -1;

export function publish(topic: string, args: any): boolean {
  if (!topics[topic]) {
    return false;
  }
  const subscribers = topics[topic];

  subscribers.forEach((subscriber) => subscriber.func(topic, args));
  return true;
}

export function subscribe(topic: string, func: (topic: string, args: any) => any): string {
  if (!topics[topic]) {
    topics[topic] = [];
  }
  const token = (++subUid).toString();
  topics[topic].push({
    token: token,
    func: func,
  });
  return token;
}

export function unsubscribe(topic: string, token: string): boolean {
  if (!topics[topic]) {
    return false;
  }
  topics[topic] = topics[topic].filter((item) => item.token !== token);

  return true;
}
