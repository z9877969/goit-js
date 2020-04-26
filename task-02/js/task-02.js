"use strict";

const body = document.querySelector("body");
const taskTwo = document.createElement("div");
taskTwo.setAttribute("id", "task-02");
body.append(taskTwo);

const createDomElement = ({
  tagName,
  classNameArr,
  atributesObj,
  dataAtributesArr,
  content,
}) => {
  const element = document.createElement(tagName);

  if (classNameArr) {
    element.classList.add(...classNameArr);
  }

  if (atributesObj) {
    Object.entries(atributesObj).forEach((atribute) => {
      const [atributeKey, atributeValue] = atribute;
      element.setAttribute(atributeKey, atributeValue);
    });

    if (dataAtributesArr) {
      const [dataKey, dataValue] = dataAtributesArr;
      element.dataset[dataKey] = dataValue;
    }
  }

  if (content) {
    element.textContent = content;
  }

  return element;
};

// === controls wrapper
const controls = document.createElement("div");
controls.setAttribute("id", "controls");
taskTwo.append(controls);

// = input
const setInput = {
  tagName: "input",
  classNameArr: ["js-input"],
  atributesObj: {
    type: "number",
    min: "0",
    max: "100",
    step: "1",
  },
};
const input = createDomElement(setInput);

// = buttons
const setButtonCreate = {
  tagName: "button",
  atributesObj: {
    type: "button",
  },
  dataAtributesArr: ["action", "create"],
  content: "Создать",
};
const buttonCreate = createDomElement(setButtonCreate);

const setButtonDestroy = {
  ...setButtonCreate,
  dataAtributesArr: ["action", "destroy"],
  content: "Очистить",
};
const buttonDestroy = createDomElement(setButtonDestroy);

controls.append(input);
controls.append(buttonCreate);
controls.append(buttonDestroy);

// === boxes wrapper
const setBoxes = {
  tagName: "div",
  atributesObj: {
    id: "boxes",
  },
};
const boxes = createDomElement(setBoxes);

taskTwo.append(boxes);

const getRandomValue = () => Math.ceil(Math.random() * 255);
const getRandomColor = () =>
  `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;

const createBoxes = (amount) => {
  boxes.children.length > 0 && destroyBoxes();
  for (let i = 0; i < amount; i += 1) {
    let boxSet = {
      tagName: "div",
      atributesObj: {
        style: `background: ${getRandomColor()}; width: ${
          30 + i * 10
        }px; height: ${30 + i * 10}px`,
      },
    };
    let box = createDomElement(boxSet);
    boxes.append(box);
  }
};

const destroyBoxes = () => [...boxes.children].forEach((el) => el.remove());

// handlers
const handlerButton = (e) => {
  const { action } = e.target.dataset;

  if (action === "create" && input.value) {
    const amount = input.valueAsNumber;

    createBoxes(amount);
    input.value = "";
  } else if (action === "destroy") {
    destroyBoxes();
  }
};

controls.addEventListener("click", handlerButton);
