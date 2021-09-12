const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
// console.log(brands, prices);
products.forEach(product => console.log(product.color, product.name));

products.forEach(product => {
    //this is for multiline/ example of forEach
})

//filter
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);
const specificNames = products.filter(product => product.name.includes('n'));
// console.log(specificNames);

//find
const special = products.find(product => product.name.includes('n'));
console.log(special);