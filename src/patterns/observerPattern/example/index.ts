import Subject from '../impl/Subject'
import Observer from '../impl/Observer'

// Extend an object with an extension
function extend(obj, extension) {
  for (const key in extension) {
    obj[key] = extension[key];
  }
}

// References to our DOM elements

const controlCheckbox = document.getElementById('mainCheckbox');
const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');

// Concrete Subject

// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject());

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function () {
  // @ts-ignore
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver;

// Concrete Observer

function addNewObserver() {
  // Create a new checkbox to be added
  const check = document.createElement('input');
  check.type = 'checkbox';

  // Extend the checkbox with the Observer class
  extend(check, new Observer());

  // Override with custom update behaviour
  // @ts-ignore
  check.update = function (value) {
    this.checked = value;
  };

  // Add the new observer to our list of observers
  // for our main subject
  // @ts-ignore
  controlCheckbox.addObserver(check);

  // Append the item to the container
  container.appendChild(check);
}
