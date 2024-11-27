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
// function taskA(a, b) {
//     let countLetter = 0;
//     for (let c = 0; c < b.length; c++) {
//          if (b[c] === a) {
//             countLetter++;
//         }
//     }
//     return countLetter;
//       }

//       //call
//      const  result = taskA("e", "Palestine");
//      console.log("result:", result)

// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// function countNumbers(number) {
//     let count = 0;
//     for (let n = 0; n < number.length; n++) {
//         for ( let u = 0; u <= 9; u++) {
//             if (u == number[n]) count++;
//         }
//     }
//     return count;
// }

// const result = countNumbers("So7u7th44Kor13ea");
// console.log("result:", result);

// // define
// async function countNumbers(number) {
//   if (typeof number != "string") throw new Error("Something went wrong!");

//   let count = 0;
//   for (let n = 0; n < number.length; n++) {
//     for (let u = 0; u <= 9; u++) {
//       if (u == number[n]) count++;
//     }
//   }
//   return count;
// }

// // call
// async function digits() {
//   try {
//     let result = await countNumbers("P7ale35stin13e");
//     console.log("result:", result);

//     result = await countNumbers("fdjfjnd4544c5cvcds5rc5");

//     console.log("result:", result);
//   } catch (err) {
//     console.log("ERROR:", err.message);
//   }
// }
// digits();




// MITASK-C 

// Shunday class tuzing tuzing nomi Shop,
//  va uni constructoriga 3 hil mahsulot pass bolsin, 
//  hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
//  Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); 
// shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! 
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!



//  Solve
// Define
class hyper {
    constructor(apple, cherry, water) {
        this.products = {
            apple,
            cherry,
            water
        };
        // constructor
        // product object
        // apple, cherry, water properties
    }
    inform(message) {
        const time = new Date().toLocaleTimeString('kr-KR', { hour: '2-digit', minute: '2-digit' });
        console.log(`now ${time} ${message}`);
    }
    //  Korean local time identitfy
    remain() {
        const productDetails = Object.entries(this.products)   // stringga aylantirish

        // Iteration methods

            .map(([key, value]) => `${value} ${key}`)
            .join(', ');

        const message = `${productDetails} exist!`;
        this.inform(message);
        return message;
        // qancha maxsulot borligini aniqlab return qilish
    }
    sell(product, quantity) {   // maxsulotni sotish
        if (this.products[product] === undefined) {  // maxsulot bor yoki yo'qligini tekshirish
            this.inform(`there is no item: ${product}`);
            return;   // agar maxsulot yo'q bo'lsa hbar berish
        }
        if (this.products[product] < quantity) {  // maxsulot yetarli ekanligini tekshiriah
            this.inform(`there is no enough item: ${product}`);
            return;
            // yetarli maxsulot bo'lmasa xabar berish
        }
        this.products[product] -= quantity; // sotilgan mkiqdorni ayirib tashlash
        this.inform(`${quantity} ${product} sold.`);  // va sotilgan miqdor haqida habar beradi
    }
    accept(product, quantity) { 
        if (this.products[product] === undefined) {
            this.products[product] = 0; // agar yangi maxsulot qo'shilsa odan boshlab hisoblaydi
        }
        this.products[product] += quantity;
        this.inform(`${quantity} ${product} accepted.`);
        // maxsulot qo'shish
    }
}

// call

const result = new hyper(4, 5, 2);
console.log(result.remain());
result.sell('apple', 7);
result.accept('cherry', 5); 
console.log(result.remain());
