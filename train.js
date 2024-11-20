// tasks
console.log("train task is working.");

// Event loop & callback funftions

// console.log("JackMa:s advices");
// const list = [
//     "Be a good student", //0-20
//     "Choose a right leader and do more mistakes", //20-30
//     "Start working for yourself", //30-40
//     "Do what you are good at", //40-50
//     "Do investments for young generation", //50-60
//     "And now take a rest", //60
// ];

//  CASE 1: CALLBACK FUNCTION

// function advice(age, callback) {
//     if(typeof age !== "number") callback("insert a number", null);
//     else if(age <= 20) callback(null, list[0]);
//     else if(age > 20 && age <= 30) callback(null, list[1]);
//     else if(age > 30 && age <= 40) callback(null, list[2]);
//     else if(age > 40 && age <= 50) callback(null, list[3]);
//     else if(age > 50 && age <= 60) callback(null, list[4]);
//     else {
//         callback(null, list[5]);
//     }
// };

// advice(27, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     console.log('Answer:', data);
// });


// console.log("JackMa:s advices");
// const list1 = [
//     "Be a good student", //0-20
//     "Choose a right leader and do more mistakes", //20-30
//     "Start working for yourself", //30-40
//     "Do what you are good at", //40-50
//     "Do investments for young generation", //50-60
//     "And now take a rest", //60
// ];

// CASE 2: CHECK
// function advice1(age1, callback) {
//     if(typeof age1 !== "number") callback("insert a number", null);
//     else if(age1 <= 20) callback(null, list1[0]);
//     else if(age1 > 20 && age1 <= 30) callback(null, list1[1]);
//     else if(age1 > 30 && age1 <= 40) callback(null, list1[2]);
//     else if(age1 > 40 && age1<= 50) callback(null, list1[3]);
//     else if(age1 > 50 && age1 <= 60) callback(null, list1[4]);
//     else {
//         setTimeout(function(){
//             callback(null, list1[5]);
//         }, 4000); 
//     }
// };

// console.log('passed from here 0');

// advice1(77, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log('Answer:', data);
//     }
// });

// console.log('passed from here 1');


// Till all functions which we learned were synchronous functions!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Asynchronous??????????????????????????????????????????????????????????????????? 

// console.log("JackMa's advices");
// const list2 = [
//     "Be a good student", //0-20
//     "Choose a right leader and do more mistakes", //20-30
//     "Start working for yourself", //30-40
//     "Do what you are good at", //40-50
//     "Do investments for young generation", //50-60
//     "And now take a rest", //60
// ];

// CASE 3: ASYNC FUNCTION

// // defenition
// async function advice2(age2) {
//     if(typeof age2 !== "number") throw new Error("insert a number");
//     else if(age2 <= 20) return list2[0];
//     else if(age2 > 20 && age2 <= 30) return list2[1];
//     else if(age2 > 30 && age2 <= 40) return list2[2];
//     else if(age2 > 40 && age2 <= 50) return list2[3];
//     else if(age2 > 50 && age2 <= 60) return list2[4];
//     else {
//         return list2[5];
//         // core modules don't work in asynchronous funtions
//         // setTimeout(function(){
//         //     return list2[5];
//         // }, 4000); 
//     }
// };


// // CALL VIA then, catch
// console.log('passed from here 0');

// advice2(33)
// .then((data) => {
//     console.log("Answer:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });

// console.log('passed from here 1');

// synchrnous function call part

// console.log('passed from here 0');
// // advice2(77, (err, data) => {
// //     if(err) console.log('ERROR:', err);
// //     else {
// //         console.log('Answer:', data);
// //     }
// // });

// console.log('passed from here 1');

// ?????????????????????????????????????????????????????????????????????????????????????????????????????

// CASE 4: CALL VIA ASYNC FUNCTION & AWAIT
// asynchronous function's call part !!!!!!!!!!!!! using async && await  !!!!!!!!!!!!!!!!!!

// async function run() {
//     let answer = await advice2(20);
//     console.log(answer);
//     answer = await advice2(33);
//     console.log(answer);
//     answer = await advice2(44);
//     console.log(answer);
// }
// run("async function's call part is working");

// ????????????????????????????????????????????????????????????????????????????????????????????????????????

// console.log("JackMa's advices");
// const list3 = [
//     "Be a good student", //0-20
//     "Choose a right leader and do more mistakes", //20-30
//     "Start working for yourself", //30-40
//     "Do what you are good at", //40-50
//     "Do investments for young generation", //50-60
//     "And now take a rest", //60
// ];

// CASE 5: PROMISE FUNCTION SETTIMEOUT

// // promise, setinterval, settimeout
// // defenition
// async function advice3(age3) {
//     if(typeof age3 !== "number") throw new Error("insert a number");
//     else if(age3 <= 20) return list3[0];
//     else if(age3 > 20 && age3 <= 30) return list3[1];
//     else if(age3 > 30 && age3 <= 40) return list3[2];
//     else if(age3 > 40 && age3 <= 50) return list3[3];
//     else if(age3 > 50 && age3 <= 60) return list3[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list3[5]);
//             },15000); 
//         }); 
//     }
// };

// // call 
// async function run1() {
//     let answer1 = await advice3(33);
//     console.log(answer1);
//     answer1 = await advice3(61);
//     console.log(answer1);
//     answer1 = await advice3(44);
//     console.log(answer1);
// }
// run1("async function's call part is working");

//??????????????????????????????????????????????????????????????????????????????????????????????????

// console.log("JackMa's advices");
// const list4 = [
//     "Be a good student", //0-20
//     "Choose a right leader and do more mistakes", //20-30
//     "Start working for yourself", //30-40
//     "Do what you are good at", //40-50
//     "Do investments for young generation", //50-60
//     "And now take a rest", //60
// ];

//CASE 6: SETINTERVAL 

// // promise, setinterval
// // defenition
// async function advice4(age4) {
//     if(typeof age4 !== "number") throw new Error("insert a number");
//     else if(age4 <= 20) return list3[0];
//     else if(age4 > 20 && age4 <= 30) return list4[1];
//     else if(age4 > 30 && age4 <= 40) return list4[2];
//     else if(age4 > 40 && age4 <= 50) return list4[3];
//     else if(age4 > 50 && age4 <= 60) return list4[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list4[5]);
//             },5000); 
//         }); 
//     }
// };

// // call 
// async function run2() {
//     let answer2 = await advice4(61);
//     console.log(answer2);
// }
// run2("async function's call part is working");

// ????????????????????????????????????????????????????????????????????????????
// RETURN CALLBACK

console.log("JackMa:s advices");
const list5 = [
    "Be a good student", //0-20
    "Choose a right leader and do more mistakes", //20-30
    "Start working for yourself", //30-40
    "Do what you are good at", //40-50
    "Do investments for young generation", //50-60
    "And now take a rest", //60
];

function advice5(age5, callback) {
    if(typeof age5 !== "number") callback("insert a number", null);
    else if(age5 <= 20) callback(null, list5[0]);
    else if(age5 > 20 && age5 <= 30) callback(null, list5[1]);
    else if(age5 > 30 && age5 <= 40) callback(null, list5[2]);
    else if(age5 > 40 && age5 <= 50) callback(null, list5[3]);
    else if(age5 > 50 && age5 <= 60) callback(null, list5[4]);
    // else {
    //     setInterval(function () {
    //         callback(null, list5[5]);
    //     },5000);
    // }
};

console.log("passed from here 0");

advice5(33, (err, data) => {
    if(err) console.log('ERROR:', err);
    else {
        console.log(data);
    }
});

console.log("passed from here 1");
