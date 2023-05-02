//Map  ----> key(anahtar) value (değer)

/*
do while
while
for
forEach
for in
for of 
*/


// let array = [1,2,3]

const map1 = new Map();

//SET
// map1.set(1,"Enes")
// map1.set(true,5)
// map1.set([1,2,3],{firstName : "Enes", lastName :"Bayram"})
// map1.set(true,"5")
let value;
// map1.set(34,"İstanbul")
// map1.set(35,"İzmir")
// map1.set(06,"Ankara")
// map1.set(01,"Adana")


//GET
// console.log(map1.get(6))
// console.log(map1.get(34))
// console.log(map1.get(35))


//SİZE
// value = map1.size;

//DELETE
// value = map1.delete(34)
// console.log(map1.size)
// console.log(value);


//HAS
// console.log(map1.has(55))


//For OF map üzerinde dönebiliriz.

// for(let [key,value] of map1){ // Destructing
//     console.log(key,value)
// }

// let array = [34, 'İstanbul'];
// let [a,b] = array;
// console.log(a,b)


// const keys = Array.from(map1.keys())
// keys.forEach((key)=>{
//     console.log(key, map1.get(key))
// })


// for(let key of map1.keys()){
//     console.log(key)
// }


// for(let value of map1.values()){
//     console.log(value)
// }


// let array = [1,2,3,4,5,6];


//MAPTEN ARRAY'E ÇEVİRMEK

// const array2 = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [06,"Ankara"],
//     [01,"Adana"]
// ]
// const array = Array.from(map1);

// array.forEach((value)=>{
//     console.log(value[0] , value[1])
// })


//ARRAY 'İ MAP E CEVİRMEK

// const array2 = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [06,"Ankara"],
//     [01,"Adana"]
// ]

// const myMap = new Map(array2);

// const myArray = Array.from(myMap);
// console.log(myArray)

let key = {username:"Enes"};

map1.set(34,"İstanbul")
map1.set(35,"İzmir")
map1.set(06,"Ankara")
map1.set(01,"Adana")
map1.set(key, "Obje")


console.log(map1.get(key))
