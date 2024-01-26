//2-vazifa//

//5//

// let myArray = [1, 4, 2, 8, 5];

//let ikki = false; 
//for (let i = 0; i < myArray.length; i++) 
//{ if (myArray[i] === 2) {
   // ikki = true; 
  //  break;  }}

//3// let number = parseFloat(prompt("Raqam kiriting"));

  let squaredNumber = number * number;
  
  if( squaredNumber>0){
     if(squaredNumber%2==0){
          console.log( "Juft son")
     }
  }
  else{
     console.log( "Toq son")
  }

  //1// 
  let numbersArray = [3, -5, 8, -2, 7, -1];

  let n = 0;
  
  for (let i = 0; i < numbersArray.length; i++) {
    n += numbersArray[i]; 
  }
  
  console.log("Sonlarning umumiy yig'indisi:", n);
//2//

 //let numbersString = prompt("sonlarni kiriting:");
// if (!numbersString) {
 //  alert("Iltimos son kiriting!"); return;}

 //let numbers = numbersString.split(",");
 //let pNumbers = [];
 //for (let i = 0; i < numbers.length; i++) {
//   pNumbers[i] = parseFloat(numbers[i]); }

 //let bolinuvchi = [];
 //let bolinuvchiIndex = 0;
// for (let i = 0; i < pNumbers.length; i++) {
//   if (pNumbers[i] % 3 === 0) {
 //    bolinuvchi[bolinuvchiIndex] = pNumbers[i];
 //    bolinuvchiIndex++;  } }

 //if (bolinuvchi.length) {
 //  alert("Uchga bolinuvchi sonlar 3: " + bolinuvchi.join(", "));
 //} else {
  // alert("Bo'linuvchi yo'q!");}


  // 1-vazifa//


// 1//

// let number1 = parseFloat(prompt("Birinchi sonni kiriting:"));
// let number2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));
// let number3 = parseFloat(prompt("Uchinchi sonni kiriting:"));

// let medium = (number1 + number2 + number3) / 3;

// console.log("Sonlarning o'rtachasi: " + Math.floor(medium));



// 2//

// let num = prompt("2 xonali son kiriting:");

// let birinchiSon = Math.floor(num / 10);

// if ( birinchiSon % 2 == 0){
//     console.log("Juft son: " + birinchiSon);
// }
// else{
//     console.log("Toq son: " + birinchiSon);
// }


// 3//

// let ball = prompt("Ballni kiriting:")

// let MaxBall = 150;

// let foiz = (ball / MaxBall) * 100;

// alert("Kiritilgan ballning foizi:" + foiz)


// 4//

// for (let i = 5; i <=20; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


// 5//

// let arr = ["Salom","5","true","false"]

// for(let i = 0; i < arr.length; i++){
//     if (arr[i] == "Salom"){
//         alert("Salom so'zi topildi!");
//         break;
//     }
// }



// 6// 

// let mixedArray = [42, true, "Salom"];

// for (let i = 0; i < mixedArray.length; i++) {
//     if (typeof mixedArray[i] === "boolean") {
//         console.log("Array ichida boolean qiymat bor. Indeks:", i);
//         break;
//     }
// }

//7//
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//let sumtoq = 0;
//let sumjuft = 0;

//for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    sumtoq += numbers[i];  
  } else {
    sumjuft += numbers[i];  
  }}

//console.log("Toq sonlar yigindisi: " + sumtoq);
//console.log("Juft sonlar yigindisi: " + sumjuft);




//8//
// let elraqam1 = prompt("1-sonni kiriting")
// let sign = prompt("Belgini kiriting")
//let elraqam2 = prompt("2-sonni kiriting")

 //switch(sign){
    //    case "+":
      //console.log(`${elraqam1} + ${elraqam2} = ${+elraqam1 + +elraqam2}`);
        // break;
         //case "-":
         //console.log(`${elraqam1} - ${elraqam2} = ${elraqam1 - elraqam2}`);
   //  break;
      //    case "*":
        //      console.log(`${elraqam1} * ${elraqam2} = ${elraqam1 * elraqam2}`);
        // break;
          //case "/":
           //   console.log(`${elraqam1} / ${elraqam2} = ${elraqam1 / elraqam2}`);
        //  break;
         // default: console.log("Siz kutgan natija mavjud emas");}

//9// 

// let numberarray = [2, -5, -7, 9, -10];

// for( let i = 0; i < numberarray.length; i ++){
//     if (numberarray[i] < 0 ){
//         numberarray[i] = -numberarray[i];
//     }
// }

// alert(numberarray);