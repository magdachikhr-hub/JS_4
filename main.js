// 1
let challenge = "Many Days Of Javascript";

// 2
console.log(challenge);
// 3
let stringLength = challenge.length;
console.log(stringLength);
// 4
let upperCase = challenge.toUpperCase();
console.log(upperCase);

// 5
let lowerCase = challenge.toLowerCase();
console.log(lowerCase);

// 6
let slice = challenge.slice(0, 4);
console.log(slice);

// 7
let sliceTwo = challenge.slice(5, 23);
// console.log(challenge.indexOf("t"));
console.log(sliceTwo);
console.log(challenge.slice(challenge.indexOf("D")));
// 8
let includesScript = challenge.includes("Script");
console.log(includesScript);

//smth else
console.log(challenge.charCodeAt(0));
console.log(challenge.charAt(0));

console.log("\u0F1C \u0F1C"); // find on unicode symbl.cc

console.log("\u205C \u2465 \u2466 \u205C \u265B");

// indexOf - გადავცეთ ჩარაქტერი, სიმბოლო და დაგვიბრუნებს ინდექსს
// charAt - გადავცემთ ინდექსს, დაგვიბრუნებს მასე არსებულ ჩარაქტერს, სიმბოლოს

const country = "georgia";
const telNumber = 588558855;

let home = "tbilisi";
console.log(typeof home);

home = 2000;
console.log(typeof home);

home = true;
console.log(typeof home);

const academy = "itvet ";
console.log(academy);

//repeat
console.log(academy.repeat(300));

const talk = " love you ";
console.log(talk.repeat(10));
