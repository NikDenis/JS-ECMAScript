// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число
//  в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment
//  и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать
//   значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = () => {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    }
  };
};
const count = createCounter();
console.log(count.getCount());
count.increment();
console.log(count.getCount());
count.decrement();
console.log(count.getCount());


// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
//  класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(element, className) {
  if (element.classList.contains(className)) {
    return element;
  }

  for (let i = 0; i < element.children.length; i++) {
    const foundElement = findElementByClass(element.children[i], className);
    if (foundElement !== null) {
      return foundElement;
    }
  }

  return null;
}
const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, "my-class");
console.log(targetElement);
