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
  

//definition
function taskA(a, b) {
    let countLetter = 0;
    for (let c = 0; c < b.length; c++) {
         if (b[c] === a) {
            countLetter++;
        }
    }
    return countLetter;
      }
    
      //call
     const  result = taskA("e", "Palestine");
     console.log("result:", result)
    