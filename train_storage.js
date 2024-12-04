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
// CASE 7: SETINTERVAL

// console.log("JackMa:s advices");
// const list5 = [
//     "Be a good student", //0-20
//     "Choose a right leader and do more mistakes", //20-30
//     "Start working for yourself", //30-40
//     "Do what you are good at", //40-50
//     "Do investments for young generation", //50-60
//     "And now take a rest", //60
// ];

// function advice5(age5, callback) {
//     if(typeof age5 !== "number") callback("insert a number", null);
//     else if(age5 <= 20) callback(null, list5[0]);
//     else if(age5 > 20 && age5 <= 30) callback(null, list5[1]);
//     else if(age5 > 30 && age5 <= 40) callback(null, list5[2]);
//     else if(age5 > 40 && age5 <= 50) callback(null, list5[3]);
//     else if(age5 > 50 && age5 <= 60) callback(null, list5[4]);
//     // else {
//     //     setInterval(function () {
//     //         callback(null, list5[5]);
//     //     },5000);
//     // }
// };

// console.log("passed from here 0");

// advice5(33, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log(data);
//     }
// });

// console.log("passed from here 1");

// MIT TASK A:

// MITASK’larni train.js fileda yozasiz!

// yozish tartibingiz:

// Masalani izohi
// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:
// Qilgan Yechimingiz…

// agarda npm run train deganimda train.js ishga tushmasa yengilgina “FAIL” bo’lasiz!

// functionsga oid argument & parametr tushunchalari

// define (a & b: parametr hisoblanadi)

// function calculate (a,b) {
// const a = 10;
// const b = 7;
// return a + b;
// }

// call (10, 2 argument hisoblanadi)

// const result = calculate (10, 2);
// console.log("result:", result)

// for (let i = 10; i >= 0; i--) {
//     console.log('executed:', i);
//   };

// for (let i = 0; i <= 10; i++) {
//   console.log('executed:', i)
// };

// console.log('11 10dan kichik emas shuning uchun frning logikasi false qiymatgacha berilgan mnatiqni loop qiladi');

// //definition
// function taskA(a, b) {
// let countLetter = 0;
// for (let c = 0; c < b.length; c++) {
//      if (b[c] === a) {
//         countLetter++;
//     }
// }
// return countLetter;
//   }

//   //call
//  const  result = taskA("e", "Palestine");
//  console.log("result:", result)

//  ???????????????????????????????????????????????????????

// /*

//   FRONTEND DEVELOPMENT: BSSR (EJS) vs SPA (React)

//   API REQUEST
//       Type => Traditional API & Rest API & GraphQL API
//       Structure => Header & Body
//       Method => get & post

//   PATTERN: ARCHITECTURE vs DESIGN PATTERN

// */

//  ???????????????????????????????????????????????????????

/**
  DEFINE                            CALL
 
  callback                          callback

  async/await                  then/catch & async/await
  promise                      then/catch & async/await
  
 */

// ???????????????????????????????????????????????????!!!!!!!!!!!!!!!!!!!!!!!
// This is coming from app.js => d.cpllection
//  if (err) {
//   console.log(err);
//   res.end("Something went wrong1");
// } else {
//   res.end("Inserted successfully");
// }
// ?????????????????????????????????????????????????????????!!!!!!!!!!!!!!!!!!!

// 4444444444444444444444444444444444444444444444444444444444

// MITASK-C

// Shunday class tuzing tuzing nomi Shop,
//  va uni constructoriga 3 hil mahsulot pass bolsin,
//  hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul.
//  Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2);
// shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// //  Solve
// // Define
// class hyper {
//     constructor(apple, cherry, water) {
//         this.products = {
//             apple,
//             cherry,
//             water
//         };
//         // constructor
//         // product object
//         // apple, cherry, water properties
//     }
//     inform(message) {
//         const time = new Date().toLocaleTimeString('kr-KR', { hour: '2-digit', minute: '2-digit' });
//         console.log(`now ${time} ${message}`);
//     }
//     //  Korean local time identitfy
//     remain() {
//         const productDetails = Object.entries(this.products)   // stringga aylantirish

//         // Iteration methods

//             .map(([key, value]) => `${value} ${key}`)
//             .join(', ');

//         const message = `${productDetails} exist!`;
//         this.inform(message);
//         return message;
//         // qancha maxsulot borligini aniqlab return qilish
//     }
//     sell(product, quantity) {   // maxsulotni sotish
//         if (this.products[product] === undefined) {  // maxsulot bor yoki yo'qligini tekshirish
//             this.inform(`there is no item: ${product}`);
//             return;   // agar maxsulot yo'q bo'lsa hbar berish
//         }
//         if (this.products[product] < quantity) {  // maxsulot yetarli ekanligini tekshiriah
//             this.inform(`there is no enough item: ${product}`);
//             return;
//             // yetarli maxsulot bo'lmasa xabar berish
//         }
//         this.products[product] -= quantity; // sotilgan mkiqdorni ayirib tashlash
//         this.inform(`${quantity} ${product} sold.`);  // va sotilgan miqdor haqida habar beradi
//     }
//     accept(product, quantity) {
//         if (this.products[product] === undefined) {
//             this.products[product] = 0; // agar yangi maxsulot qo'shilsa odan boshlab hisoblaydi
//         }
//         this.products[product] += quantity;
//         this.inform(`${quantity} ${product} accepted.`);
//         // maxsulot qo'shish
//     }
// }

// // call

// const result = new hyper(4, 5, 2);
// console.log(result.remain());
// result.sell('apple', 7);
// result.accept('cherry', 5);
// console.log(result.remain());

//   process manager orders
// npm i pm2 —global
// pm2 ls

// pm2 start server.js --name="JOHN_REJA"

// pm2 stop id
// pm2 delete id

// pm2 logs
// pm2 log id



// ??????????????????????????????????????????????????????????????????????????

//  MIT D-TASK:

// Shunday function tuzing,
// u 2ta string parametr ega bolsin,
// hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// define

// checkContent("mitgroup", "gmtiprou");

// Ikkita string bir harflardan iboratligini tekshirish

// function checkLetter(word, word1, callback) {
//   // pramertrlar
//   const splitword = word.split("").sort().join(""); // split,sort va join bulat method:
//   const splitword1 = word1.split("").sort().join(""); //  : array elementlarga ajratib, tartiblab, qayta stringga joylashtirish\

//   // result return
//   const result = splitword === splitword1; // ikkita parametrni bir xil ekanligini tekshirish
//   callback(result);
// }

// // call

// checkLetter("Palestine", "Plaestine", function (same) {
//   // callback
//   console.log(same); // buyerda true qiymat qaytishi kerak stringdagi so'zlar bir xil harflar bo'lgani uchun
// });

// // checkLetter("South Korea", "North Korea", function(same) {
// //     console.log(same);  // buyerda false qiymat qaytishi kerak stringdagi so'zlar har xil harflar bo'lgani uchun
// // });
 

// // MIT E-TASK: 

// // Shunday function tuzing, 
// // u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// // MASALAN: 
// // getReverse("hello")
// //  return qilsin "olleh"

// // define

// // callback function used "promise(reject,resove)"
// function doReverse (hereString) {
//   return new Promise((resolve, reject) => {
//     if (typeof hereString === 'string' && hereString.length > 0) {
//       const reversedString = hereString.split('').reverse().join('');
//       resolve(reversedString);
//     } else {
//       reject("Smth went wrong.!");
//       //Agar string bo'sh bo'lsa "catch qism log bo'ladi"
//     }
//   });
// }

// // call

// doReverse("Palestine")
//   .then((result) => {
//     console.log(result);
//   })

//   .catch((err) => {
//     console.log(err);
//   }); 
