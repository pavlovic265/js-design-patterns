// Another simple message handler
import * as pubsub from "./index";

const TOPIC_NEW_MESSAGE = "inbox/newMessage";

// A simple message logger that logs any topics and data received through our
// subscriber
function messageLogger1(topics, data) {
  console.log("1: " + topics + ": " + data);
}
function messageLogger2(topics, data) {
  console.log("2: " + topics + ": " + data);
}

// Subscribers listen for topics they have subscribed to and
// invoke a callback function (e.g messageLogger) once a new
// notification is broadcast on that topic
const subscription1 = pubsub.subscribe(TOPIC_NEW_MESSAGE, messageLogger1);
pubsub.subscribe(TOPIC_NEW_MESSAGE, messageLogger2);

// Publishers are in charge of publishing topics or notifications of
// interest to the application. e.g:

pubsub.publish(TOPIC_NEW_MESSAGE, "hello world!");

// or
pubsub.publish(TOPIC_NEW_MESSAGE, ["test", "a", "b", "c"]);

// or
pubsub.publish(TOPIC_NEW_MESSAGE, {
  sender: "hello@google.com",
  body: "Hey again!",
});

// We can also unsubscribe if we no longer wish for our subscribers
// to be notified
pubsub.unsubscribe(TOPIC_NEW_MESSAGE, subscription1);

// Once unsubscribed, this for example won't result in our
// messageLogger being executed as the subscriber is
// no longer listening
pubsub.publish(TOPIC_NEW_MESSAGE, "Hello! are you still there?");
