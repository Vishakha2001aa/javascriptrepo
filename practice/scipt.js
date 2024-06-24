const myArr = [1,2,3,4,5,6,7];
console.log(myArr);
const marvel_heros =["thor","Ironman","spiderman"];
const dc_heros =["superman", "flash", "batman"];



console.log(myArr.push(9,4));
console.log(myArr);



console.log(myArr.pop());
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(2));


console.log(myArr.unshift(9));
console.log(myArr);


console.log(myArr.shift());
console.log(myArr);
 
const arry1 =myArr.slice(1,3)
console.log(`my array1 value is: ${arry1}`);
console.log(myArr);


const arry2 =myArr.splice(2,5)
console.log(`(my array2 is : ${arry2})`);
console.log(myArr);



marvel_heros.push(dc_heros)
console.log(marvel_heros);


const Heroes = marvel_heros.concat(dc_heros);
console.log(`representing : ${Heroes}`);
    

//or
co
 
 
 