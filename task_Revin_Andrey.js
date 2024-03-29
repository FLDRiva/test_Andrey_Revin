//TODO Написать функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными числами.
//TODO Написать функцию accum: accum("abcd") -> "A-Bb-Ccc-Dddd", accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy", accum("cwAt") -> "C-Ww-Aaa-Tttt"
//TODO Написать функцию, которая выдаёт сумму выручку на основании входного формата данных

const arrList = [15, 10, 13, 18, 12, -44, -50, 'q', 'w', 'k', 'hello'];
function numbersFilter(myList) {
    return myList.filter((el) => +(el) > 0)
};
console.log(`Result: ${numbersFilter(arrList)}`);

/////////////////////////////////////////////////////////////////////////

const strFilter = (sf) => sf.charAt(0).toUpperCase() + sf.slice(1)
const accum = (str) => str
  .split('')
  .map((el, i) => strFilter(Array(i + 2).join(el).toLowerCase()))
  .join('-')
console.log(`Result1('abcd'):  ${accum('abcd')}`);
console.log(`Result2('RqaEzty'):  ${accum('RqaEzty')}`);
console.log(`Result3('cwAt'):  ${accum('cwAt')}`);

/////////////////////////////////////////////////////////////////////////

const products = [
  { name: 'Футболка', price: 20, quantity: 2 },
  { name: 'Джинсы', price: 50, quantity: 1 },
  { name: 'Носки', price: 5, quantity: 10 },
  { name: 'Штаны', price: 30, quantity: 1 }
];

function profit(products) {
  let earnings = 0;
  products.forEach(el => {
    let sum = el.price * el.quantity;
    earnings += sum;
    return earnings;
  });
  return earnings;
}
console.log(`Result:  ${profit(products)}`);

/*При просмотре шаблона, могу выделить несколько компонентов: header, content, footer, button, input, modal window, checkbox
  По времени разработки:
  header - 30 min,
  content - 180 min,
  footer - 30 min.
  Так же я вижу, что компонент button, input я могу переиспользовать в других компонентах, время написания - 10 min.
  modal window - 20 min
  chexkbox - используется в нескольких компентах, время на написание и логику - 10 min
*/

