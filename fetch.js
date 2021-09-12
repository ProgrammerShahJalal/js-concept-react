// 1. JSON
const student = {
    name: 'shah jalal',
    age: 22,
    salary: 80000,
    songs: ['O allah make me your friend', 'hasbunallah', 'rodithubillah']
}

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))

//keys and values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

//for
const numbers = [23, 64, 65, 75, 24];
numbers.forEach(num => console.log(num));
//if we want to return something, we will use map
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in 


// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');