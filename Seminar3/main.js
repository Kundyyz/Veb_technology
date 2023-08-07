// const num1 = Number.parseFloat(prompt('Enter first number: '));
// const num2 = Number.parseFloat(prompt('Enter second number: '));
// // parseFloat если дробное

// // alert('Result of sum' + num1 + ' and ' + num2 + ' equal to ' + (num1 + num2))

// alert(`Result of sum ${num1} and ${num2} equal to ${sum(num1, num2).toFixed(2)}`)

// function sum(a, b) {
//     return a + b
// }

// Задача 4
// const goodLive = confirm("Is everything good?");
// if (goodLive) {
//     alert('We are going to u!');
// }
// else {
//     alert('Be strong');
// // }    

// const  product = prompt('Which product').toLowerCase;
// switch (product) {
//     case 'mandarins':
//         alert('100$');
//         break;
//     case 'banana':
//         alert('25$');
//         break;
//     case 'apple':
//         alert('80$');
//         break;
//     case 'pear':
//         alert('95$');
//         break;
//     default:
//         alert('no!');
// }

// Доп задание

// function getMaxEvenElement(arr) {
//     let numMax = arr[0];
//     for (let i = 2; i < arr.length; i += 2) {
//         if (arr[i] > numMax) {
//             numMax = arr[i];
//         }
//     }
//     return numMax
// }
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

// function getArr(num) {
//     let arr = [];
//     for(let i = num - num % 3; i > 0; i-= 3) {
//             arr.push(i);
//         }
//     return arr;
// }
// console.log(getArr(15));
// console.log(getArr(22));

// function f(clockArr, money) {
//     for (let i = 0; i < clockArr.length - 1; i++) {
//         for (let j = i + 1; j < clockArr.length; j++) {
//             if (+(clockArr[i] + clockArr[j]).toFixed(2) === money) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(f([8.74, 3.12, 9.50, 2.35], 2.35));
// console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.30));



