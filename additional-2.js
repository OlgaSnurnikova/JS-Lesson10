
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let status = document.getElementById('status');
let age = document.getElementById('age');
let city = document.getElementById('city');
let filter = document.getElementById('filter');
filter.addEventListener('click', function (){
    let results = [];
    if (status.checked && !age.checked && !city.checked){
        results = usersWithAddress.filter(value => !value.status);
    } else if (status.checked && age.checked && !city.checked) {
        let resultsStatus = usersWithAddress.filter(value => !value.status);
        results = resultsStatus.filter(value => value.age>=29);
    } else if (status.checked && age.checked && city.checked){
        let resultsStatus = usersWithAddress.filter(value => !value.status);
        let resultsAge = resultsStatus.filter(value => value.age>=29);
        results = resultsAge.filter(value => value.address.city==='Kyiv');
    } else if (!status.checked && age.checked && city.checked){
        let resultsAge = usersWithAddress.filter(value => value.age>=29);
        results = resultsAge.filter(value => value.address.city==='Kyiv');
    } else if (status.checked && !age.checked && city.checked){
        let resultsStatus = usersWithAddress.filter(value => !value.status);
        results = resultsStatus.filter(value => value.address.city==='Kyiv');
    } else if (!status.checked && age.checked && !city.checked){
        results = usersWithAddress.filter(value => value.age>=29);
    }else if (!status.checked && !age.checked && city.checked){
        results = usersWithAddress.filter(value => value.address.city==='Kyiv');
    } else {
        alert('виберіть фільтр')
    }
    for (const result of results) {
        let resultDiv = document.createElement('div');
        resultDiv.innerText = `id - ${result.id}, name - ${result.name}, age -${result.age}, status - ${result.status}, address: ${result.address.city}, ${result.address.street},${result.address.number}`;
        document.body.appendChild(resultDiv);
    }
    let hr = document.createElement('hr');
    document.body.appendChild(hr);
})
