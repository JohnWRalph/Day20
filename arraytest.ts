let myArray = [{ name: "John", age: 25 }, { name: "May", age: 32 }, { name: "Mary", age: 37 }, { name: "Mary", age: 37 },{ name: "Mary", age: 32 },{ name: "Mary", age: 35 },{ name: "Bob", age: 21 }];
let searchValue = "Ma";
let containsValue = myArray.filter(obj => obj.name === searchValue).length > 0;
// console.log(containsValue)
// let index = myArray.findIndex(obj => obj.name === searchValue);
// if (index !== -1) {
//   myArray.splice(index, 1);
// }
// console.log(myArray); // [{name: "John", age: 25}, {name: "Bob", age: 21}]

while (containsValue === true) {
    console.log(containsValue); // true
    let index = myArray.findIndex(obj => obj.name === searchValue);
    if (index !== -1) {
        myArray.splice(index, 1);
    }
containsValue = myArray.filter(obj => obj.name === searchValue).length > 0;

    console.log(myArray);
}
console.log(containsValue)