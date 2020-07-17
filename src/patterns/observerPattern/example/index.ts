import { extendElementWithSubject } from "../impl/Subject";
import { extendElementWithObserver } from "../impl/Observer";

const $mainCheckbox = <HTMLInputElement>document.getElementById("mainCheckbox");
const $addNewObserverButton = <HTMLButtonElement>document.getElementById("addNewObserver");
const $observersContainerDiv = <HTMLDivElement>document.getElementById("observersContainer");

const controlCheckbox = extendElementWithSubject($mainCheckbox);

function handleCheckboxClick() {
  controlCheckbox.notify(controlCheckbox.checked);
}
controlCheckbox.onclick = handleCheckboxClick;

function addNewObserver() {
  const $input = document.createElement("input");
  $input.type = "checkbox";

  const check = extendElementWithObserver($input);

  check.update = function (value) {
    this.checked = value;
  };

  controlCheckbox.addObserver(check);

  $observersContainerDiv.appendChild(check);
}
$addNewObserverButton.onclick = addNewObserver;
