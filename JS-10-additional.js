//
//
// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// //     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
// let block = document.createElement('div');
// block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque ducimus ea eveniet nemo qui reprehenderit soluta. Ad, illum nisi.';
// block.classList.add('someClass', 'otherClass');
// block.id = 'identificator';
// document.body.appendChild(block);
// block.onclick = function (){
//     console.log(`Назва тегу - ${block.tagName}`);
//     for (const item of block.classList) {
//         console.log(`клас - ${item}`)
//     }
//     console.log(`iдентифікатор - ${block.id}`);
//     console.log(`розміри в форматі висота*ширина - ${block.clientHeight}*${block.clientWidth}`);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// // // через  window.open
// let block = document.createElement('div');
// block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque ducimus ea eveniet nemo qui reprehenderit soluta. Ad, illum nisi.';
// block.classList.add('someClass', 'otherClass');
// block.id = 'identificator';
// document.body.appendChild(block);
// block.onclick = function (){
//     let newWin = window.open("about:info", "hello", "width=200,height=200");
//     newWin.document.writeln(`Назва тегу - ${block.tagName}; `);
//     for (const item of block.classList) {
//         newWin.document.writeln(`клас - ${item}; `)
//     }
//     newWin.document.writeln(`iдентифікатор - ${block.id}; `);
//     newWin.document.writeln(`розміри в форматі висота*ширина - ${block.clientHeight}*${block.clientWidth}`);
// }

//через скритий блок
// let block = document.createElement('div');
// block.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloremque ducimus ea eveniet nemo qui reprehenderit soluta. Ad, illum nisi.';
// block.classList.add('someClass', 'otherClass');
// block.id = 'identificator';
// document.body.appendChild(block);
//
// let popupBlock = document.createElement('div');
// let popupName = document.createElement('div');
// popupName.innerText =`Назва тегу - ${block.tagName}`;
// let popupClassList = document.createElement('ul');
// popupClassList.innerText = 'список класів:';
// for (const item of block.classList) {
//     let popupClassListItem = document.createElement('li');
//     popupClassListItem.innerText = item;
//     popupClassList.append(popupClassListItem);
// }
// let id = document.createElement('div');
// id.innerText = `iдентифікатор - ${block.id}`;
// let size = document.createElement('div');
// size.innerText =`розміри в форматі висота*ширина - ${block.clientHeight}*${block.clientWidth}`;
//
// document.body.append(popupBlock);
// popupBlock.append(popupName, popupClassList,id, size);
//
// popupBlock.hidden=true;
// block.onclick = function (){
//     if (popupBlock.hidden){
//         popupBlock.hidden=false;
//     } else{
//         popupBlock.hidden=true;
//     }
// }

