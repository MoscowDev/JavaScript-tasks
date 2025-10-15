for (let count = 0; count <= 100; count += 2) {
  process.stdout.write(count + " ");
}

for (let count = 50; count <= 100; count += 3) {
  process.stdout.write(count + " ");
}

for (let count = 100; count >= 1; count--) {
  process.stdout.write(count + " ");
}

for (let count = 1; count <= 20; count++) {
  let square = count * count;
  process.stdout.write(square + " ");
}

for (let count = 1; count <= 50; count++) {
  let multiple = count * 3;
  process.stdout.write(multiple + " ");
}

for (let count = 1; count <= 100; count++) {
  if (count % 5 === 0 && count % 3 === 0) {
    console.log(count + " ");
  }
}

let counter = 1;
for (let count = 1; count <= 100; count++) {
  if (count % 7 === 0) {
    counter++;
  }
}
console.log("the count of the numbers are:" + counter + " ");

let sum = 0;
for (let count = 0; count <= 50; count++) {
  sum = sum + count;
}
process.stdout.write(sum + " ");

for (let i = 65; i <= 90; i++) {
  process.stdout.write(String.fromCharCode(i) + " ");
}

let number = 0;
let total = 0;
for (number = 1; number <= 12; number++) {
  total = number * 4;
  console.log("4 * " + number + " = " + total);
}

let word = "michael";
for (let length = 0; length < word.length; length++) {
  let letter = word.charAt(length);
  process.stdout.write(letter + " ");
  console.log();
}

let english = "michaeeeeel";
let count = 0;
for (let length = 0; length < english.length; length++) {
  let letter = english.charAt(length);
  process.stdout.write(letter + " ");
  if (letter === "e") {
    count++;
  }
}
console.log();
console.log(count);

let upper = "michael";
for (let length = 0; length < upper.length; length++) {
  let letter = upper.charAt(length);
}
console.log(upper.toUpperCase());
console.log();

let lower = "MICHAEL";
for (let length = 0; length < lower.length; length++) {
  let letter = lower.charAt(length);
}
console.log(lower.toLowerCase());
