// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// let divOne = document.createElement('div');
// divOne.innerText = 'Form 1';
// let divTwo = document.createElement('div');
// divTwo.innerText = 'Form 2';
// let btn = document.createElement('button');
// btn.innerText = 'Submit Forms';
// document.body.append(divOne, divTwo, btn);
//
// let formOne = document.createElement('form');
// formOne.setAttribute('name', 'form 1')
// divOne.append(formOne);
// let formTwo = document.createElement('form');
// formTwo.setAttribute('name', 'form 2');
// divTwo.append(formTwo);
// let inputOne = document.createElement('input');
// inputOne.setAttribute('name','input 1');
// let inputTwo = document.createElement('input');
// inputTwo.setAttribute('name','input 2');
// let inputThree = document.createElement('input');
// inputThree.setAttribute('name','input 3');
// let inputFour = document.createElement('input');
// inputFour.setAttribute('name','input 4');
//
// divOne.append(inputOne, inputTwo);
// divTwo.append(inputThree, inputFour);
//
// btn.addEventListener('click', function (){
//     console.log(inputOne.value);
//     console.log(inputTwo.value);
//     console.log(inputThree.value);
//     console.log(inputFour.value);
// })

// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
//
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'Створити таблицю';
// document.body.append(inputOne, inputTwo, inputThree, btn);
// btn.addEventListener('click', function (){
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let txt = inputThree.value;
//     function tableGenerator (tr, td,txt){
//         let divTable = document.createElement('div');
//         let table = document.createElement('table');
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//         for (let i = 0; i < tr; i++) {
//             let tr=document.createElement('tr');
//             tr.style.border = '1px solid red';
//             for (let j = 0; j < td; j++) {
//                 let td=document.createElement('td');
//                 tr.style.border = '1px solid green';
//                 td.innerText = `${txt}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//
//     } tableGenerator(tr, td,txt);
// })


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let censored = ['лайно', 'дідько', 'shit', 'fuck'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'check';
// document.body.append(input, btn);
// btn.addEventListener('click', function (){
//     let value = input.value;
//     for (let word of censored) {
//         if (value === word){
//             alert('ай-я-яй!(');
//             input.value = '';
//             return;
//         }
//     }
//     if (value){
//         alert('Молодець, ти чемний!');
//         input.value = '';
//     }
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// let censored = ['лайно', 'дідько', 'shit', 'fuck'];
// let input = document.createElement('input');
// let btn = document.createElement('button');
// btn.innerText = 'check';
// document.body.append(input, btn);
// btn.addEventListener('click', function (){
//     let value = input.value;
//     for (let word of censored) {
//         if (value.includes(word)){
//             alert('ай-я-яй!(');
//             input.value = '';
//             return;
//         }
//     }
//     if (value){
//         alert('Молодець, ти чемний!');
//         input.value = '';
//     }
// })