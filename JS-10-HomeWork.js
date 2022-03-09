// - Создать произвольный елемент с id = text.  Используя JavaScript,
//     сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let txt = document.createElement('div');
// txt.id = 'text';
// txt.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dicta dolorum ducimus fuga minima mollitia vitae? Atque facilis illo quidem.';
// let btn = document.createElement('button');
// btn.innerText = 'Сховати текст';
// document.body.append(txt, btn);
// // // через eventListner
// // btn.addEventListener('click', function (){
// //     txt.style.display = 'none';
// // })
//
// // // через onclick
// // btn.onclick = function (){
// //     txt.style.display = 'none';
// // };
//
// btn.onclick = function (){
//     document.getElementById('text').hidden = true;
// }
//
//     // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btnHidden = document.createElement('button');
// btnHidden.innerText = 'Сховати';
// document.body.appendChild(btnHidden);
// btnHidden.addEventListener('click', function (){
//     btnHidden.style.display = 'none';
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let input = document.createElement('input');
// let btnSubmit = document.createElement('button');
// btnSubmit.innerText= 'Submit age';
// document.body.append(input,btnSubmit);
// btnSubmit.addEventListener('click', function (){
//     let age = input.value;
//     if (!age){
//         alert('введіть свій вік');
//     } else if (+age<18){
//         alert('вам недоступний контент сайту');
//     }else {
//         alert('Вітаємо на сайті');
//     }
// })


// // - Создайте меню, которое раскрывается/сворачивается при клике
// let menuTitle = document.createElement('button');
// menuTitle.innerText='Menu';
// let menuItem1 = document.createElement('li');
// menuItem1.innerText='Item1';
// let menuItem2 = document.createElement('li');
// menuItem2.innerText='Item2';
// let menuItem3 = document.createElement('li');
// menuItem3.innerText='Item3';
//
// document.body.append(menuTitle, menuItem1, menuItem2, menuItem3);
// menuTitle.addEventListener('click', function (){
//     if (menuItem1.hidden){
//         menuItem1.hidden=false;
//         menuItem2.hidden=false;
//         menuItem3.hidden=false;
//     } else {
//         menuItem1.hidden=true;
//         menuItem2.hidden=true;
//         menuItem3.hidden=true;
//     }
// })


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {name: 'Максим', body: 'Вчи English'},
//     {name: 'Іван', body: 'Досить сидіти, вже пізно'},
//     {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
//     {name: 'Іра', body: 'Воно, тобі треба?'},
// ];
//
// for (const comment of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3');
//     let p = document.createElement('p');
//     let btn = document.createElement('button');
//     let hr = document.createElement('hr');
//
//     h3.innerText = comment.name;
//     p.innerText = comment.body;
//     btn.innerText = 'закрити';
//
//     btn.onclick = function (){
//         p.style.display='none';
//     }
//
//     document.body.appendChild(div);
//     div.append(h3,p,btn,hr);
// }
