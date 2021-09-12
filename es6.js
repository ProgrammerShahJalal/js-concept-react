const numbers = [233, 54, 23, 98];
const student = {
    name: 'shah jalal',
    age: 22,
    salary: 80000,
    songs: ['O allah make me your friend', 'hasbunallah', 'rodithubillah']
}
//1.templete string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} and favourite song is ${student.songs[1]}`;
console.log(about);

//2.arrow function
const getFivetyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

//3. spread operator
const newNumbers = [...numbers];
console.log(newNumbers);

//create an array from an older array and an element
const currentNumbers = [...numbers, 33, 65];
console.log(currentNumbers);