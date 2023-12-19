// Задание 1
function calculateVolumeAndArea(sideLength) {
  // Проверяем, является ли аргумент числом, положительным и целым
  if (typeof sideLength !== "number" || sideLength <= 0 || !Number.isInteger(sideLength)) {
    return "При вычислении произошла ошибка";
  }

  // Вычисляем объем куба
  const volume = Math.pow(sideLength, 3);

  // Вычисляем площадь всей поверхности куба
  const surfaceArea = 6 * Math.pow(sideLength, 2);

  // Форматируем результат в виде строки
  return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
}

console.log(calculateVolumeAndArea(5));    // 'Объем куба: 125, площадь всей поверхности: 150'
console.log(calculateVolumeAndArea(15));   // 'Объем куба: 3375, площадь всей поверхности: 1350'
console.log(calculateVolumeAndArea(15.5)); // 'При вычислении произошла ошибка'
console.log(calculateVolumeAndArea('15')); // 'При вычислении произошла ошибка'
console.log(calculateVolumeAndArea(-15));  // 'При вычислении произошла ошибка'


// Задание 2
function getCoupeNumber(seatNumber) {
  // Проверяем, является ли аргумент числом и целым
  if (typeof seatNumber !== "number" || !Number.isInteger(seatNumber)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }
  // Проверяем, является ли номер места от 1 до 36
  if (seatNumber <= 0 || seatNumber >= 36) {
    return "Таких мест в вагоне не существует";
  }

  // Вычисляем номер купе
  const coupeNumber = Math.ceil(seatNumber / 4);
  return coupeNumber

}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));


// Задание 3
const data = [5, 10, "Shopping", 20, "Homework"]; //инициализация массива

for (let i = 0; i < data.length; i++) {
  // Проверка типа текущего элемента: число или нет
  if (typeof data[i] === "number") {
    // Если элемент является числом, умножаем его на 2
    data[i] *= 2;
  } else if (typeof data[i] === "string") {
    // Если элемент является строкой добавляем к строке " - done"
    data[i] += " - done";
  }
}

console.log(data)


// Задание 4
const data_r = [5, 10, "Shopping", 20, "Homework"]; // инициализация массива _r добавила, потому что ругалась IDE на два массива date
const reversed_data = []; // Создание пустого массива, в который будут записываться элементы в обратном порядке


for (let i = data_r.length - 1; i >= 0; i--) {
  // Начало цикла for, итерации идут от последнего индекса до первого
  reversed_data.push(data_r[i]); // Добавление текущего элемента из массива data в начало массива reversed_data с помощью метода push
}

console.log(reversed_data);


// Задание 5
function showFamily(family) {
  if (family.length === 0) {
    // проверка, если family длина массива равна 0)
    return 'Семья пуста';
  }

  const message = 'Семья состоит из: ' + family.join(' ');
  /**Если массив не пустой, то создается переменная message,
   где к строке 'Семья состоит из: ' добавляются все элементы массива family 
   с помощью метода join(' '), который объединяет элементы массива в одну строку, разделяя их пробелами.
  */
  return message;
}

console.log(showFamily(['Peter', 'Ann', 'Alex', 'Linda'])); // 'Семья состоит из: Peter Ann Alex Linda'
console.log(showFamily([])); // 'Семья пуста'


// Задание 6
const restaurantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$',
    },
    {
      name: 'Pizza Diavola',
      price: '9$',
    },
    {
      name: 'Beefsteak',
      price: '17$',
    },
    {
      name: 'Napoleon',
      price: '7$',
    },
  ],
  waitors: [
    { name: 'Alice', age: 22 },
    { name: 'John', age: 24 },
  ],
  averageLunchPrice: '20$',
  openNow: true,
}

function isOpen(prop) {
  let answer = ''
  prop ? (answer = 'Открыто') : (answer = 'Закрыто');

  /*ответ был всегд Закрыто, хотя переменная openNow, которую мы передаем в аргумент prop is true,
  потому что в конструкции: prop ? (answer = 'Закрыто') : (answer = 'Открыто') при истинности prop выводился ответ закрыто.
  чтобы исправить эту ошибку в условном выражении нужно поменять местами 'Закрыто' и 'Открыто'*/

  return answer // anwser:))
}

console.log(isOpen(restaurantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {

  /**здесь из sDish.price нужно было сделать (+sDish.price.slice(0, -1)
   * и из average сделать +average.slice(0, -1) по подобию (+fDish.price.slice(0, -1), 
   * тк без такого преобразования СРАВНИВАЕМ ЧИСЛО (+fDish.price.slice(0, -1) равное 
   * стомости блюда из массива menu без знака $ и СТРОКУ sDish.price, которой передается 
   * переменная restaurantData.menu[1], в которой будет лежать строка 9$. Чтобы исправить это, 
   * нужно применить строковый метод slice со значениями 0 и -1(чтобы если цена состоит больше, 
   * чем из одной цифры отрезался только значок ваалюты), чтобы получить строку со значением "9"
   * и унарный оператор "+", чтобы превратить полученную строку с цифрами в число */

  if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
    return 'Цена ниже средней'
  } else {
    return 'Цена выше средней'
  }
}

console.log(
  isAverageLunchPriceTrue(
    restaurantData.menu[0], //14
    restaurantData.menu[1], //9
    restaurantData.averageLunchPrice //20
  )/**23 > 20 => вернется 'Цена выше средней'*/
)

// добавила еще консоль лог, чтобы проверить работает ли условие
console.log(
  isAverageLunchPriceTrue(
    restaurantData.menu[1], // 9
    restaurantData.menu[3], // 7
    restaurantData.averageLunchPrice // 20
  )/**16 < 20 => вернется 'Цена ниже средней'*/
)

function transferWaitors(data) {
  /** Исходный массив изменяется тк мы создаем его поверхностную копию 
   *  с помощью метода Object.assign(), в таком случае мы копируем ссылку на объект 
   *  restaurantData, который является вложенной структурой и поэтому изменения в "копии"
   *  видны в исходном массиве.
   * Чтобы решить эту проблему применим один принцип :) который в Доке почему-то назвали глупым:( https://doka.guide/js/shallow-or-deep-clone/#:~:text=%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B7%D0%B2%D1%83%D1%87%D0%B8%D1%82%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BE%D1%87%D0%BD%D0%BE-,%D0%B3%D0%BB%D1%83%D0%BF%D0%BE,-%E2%80%94%20%D0%BD%D1%83%D0%B6%D0%BD%D0%BE%20%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D1%83%D0%B5%D0%BC%D1%8B%D0%B9
  */
  const copy = JSON.parse(JSON.stringify(data))
  copy.waitors[0] = { name: "Mike", age: 32 }
  return copy
}

console.log('-----------------------------------------------------')
console.log(restaurantData) // с Алисой
console.log('-----------------------------------------------------')
console.log(transferWaitors(restaurantData)) // с Майком
console.log('-----------------------------------------------------')
console.log(restaurantData) // все еще с Алисой


//  Задание 6*

// версия одын
function drawStarFigure(n) {
  let figure = '';
  for (let i = 1; i <= n; i++) {
    let spaces = '';
    let stars = '';
    for (let j = 1; j <= n - i; j++) {
      spaces += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      stars += '*';
    }
    figure += spaces + stars + '\n';
  }
  return figure;
}

console.log(drawStarFigure(6));

// два
function drawStarFigure(n) {
  let figure = '';
  for (let i = 1; i <= n; i++) {
    const spaces = ' '.repeat(n - i);
    const stars = '*'.repeat(2 * i - 1);
    figure += spaces + stars + '\n';
  }
  return figure;
}

console.log(drawStarFigure(6));

// эволюция
function drawStarFigure(n) {
  for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i * 2 - 1))
  }
  }
  
  drawStarFigure(6)
