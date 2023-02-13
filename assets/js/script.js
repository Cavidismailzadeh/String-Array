"use strict"





function reversed(text){
    return text.split("").reverse().join("");
}

console.log(reversed("Hello Deyrem Sene P135"));


















//  let address = "Ehmedli";




//  console.log(address.length );


// console.log(address[0]);


// for (let i = 0; i < address.length; i++) {

//     console.log(address[i])
// }


// console.log(address.charAt(0));


// console.log(address.charCodeAt(1));


// console.log(address.toLocaleUpperCase());


// console.log(address.split(""));


// console.log(address.trim());


// console.log(address.trimStart());


// console.log(address.trimEnd());


// console.log(address.slice(1,3));


// console.log(address.substring(1,3));


// let text = "keyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"

// if (text.length>10) {
//     console.log(text.substring(1,10) + "...");
// }


// console.log(address.substr(1,3));



// let text = "Salam Anar Bey Anar";

//  console.log(text.replace("Anar","Mubariz"));

//  console.log(text.replaceAll("Anar","Mubariz"))


// let text1 ="Hello ";


// let text2 = "World";


// let res = text1.concat(text2);


// console.log(res);



// const strToUpper = str =>{

//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// console.log(strToUpper("hello"));



// let text ="salam";


// let result = text[0].toUpperCase();

// let res= text.replace(text.charAt(0),result)

// console.log(res);


// console.log(text);


// console.log(result);


// let students = ["Cavid", "Jale", "Roya", "Konul", "Cinare", "Anar"]



// console.log(students.length);

// console.log(students[students.length-1]);


// let result = students.join();

// console.log(result);

// console.log(students);


//  students.pop();


//  students.push("Elekber")

//  students.shift();

// students.unshift("Hacker")

// console.log(students);




// function filter(arr){

//     let result= [];

//     for (const item of arr) {

//         if(item.includes("l")){
//            result.push(item )
//         }

//     }

//     return result;
// }


// console.log(filter(students));

// filter(students)



// let students = ["Cavid", "Jale", "Roya", "Konul", "Jale", "Cinare", "Anar"]



// console.log(students.indexOf("Jale"));


// console.log(students.indexOf("Jaleyy"));


// console.log(students.lastIndexOf("Jale"));


// let result = students.find(m => m == "Jale")

// students.sort();


// console.log(students);


// students.reverse();


// console.log(students);


// console.log(result);


// console.log([3, 8, -10, 23, 19, -4, -14, 27].sort((a,b)=>b-a));


// students.fill("Eli")

// console.log(students)


// students.fill("Eli",0,2)

// console.log(students)

// console.log(students.every(m=>m=="Cinare"));



// let arr = [30,20,10,40,5,6,7]

// console.log(arr.every(m=>m>4));



// let arr = [10, 20, 30, 40, 5, 6, 7]


// console.log(arr.findIndex(m => m > 20));

// console.log(arr.includes(10));

// console.log(arr.includes(100));


// console.log(Array.isArray(arr));



// let text ="ABCDEFG";
// const myArr = Array.from(text);


// for (const item of myArr) {

//     console.log(item);
// }



// console.log(myArr);


// console.log(arr.slice(2));

// console.log(arr.slice(2,5));



// const fruits=["Banana", "Orange", "Apple", "Mango"]


// fruits.splice(2,1, "Lemon","Kiwi")


// console.log(fruits);


// console.log(arr.toString());



// let age = "55";

// let age = 55;

// console.log(typeof age.toString());

// console.log(typeof age);


// let age1 = "33";

// let age2 = "55";

// console.log(age1 +age2);

// console.log(Number(age1) + Number(age2));



// function getNums(num1,...arr){
//     console.log(arr);

// }

// getNums(1,2,3,4,5,6)


// let test = (...arr) => {
//     console.log(arr);
// }

// console.log(1, 2, 3);





// let arr1 = [1,2,3,4,5];


// let copyArr= [...arr1]


// console.log(copyArr);


// arr1[0]=10;


// console.log(arr1);


// let user1 = {
//     name:"Shaiq",
//     address: "Ehmedli"
// }

// console.log(user1);


// let userCopy = {...user1};

// console.log(userCopy);