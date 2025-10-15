  let word = "semicolon";
  for (let length = 0; length < word.length; length++) {
  let letter = word.charAt(length);
  process.stdout.write(letter + " ");
  }

  console.log();

  let number = [1, 2, 3, 4, 5, 6];
  for (let length = 0; length < number.length; length++) {
  let val = number[length];
  process.stdout.write(val + " ");
   }

  console.log();

  let upper = "michael";
  console.log(upper.toUpperCase());

  let words = "mr femi";
  let vowelCount = 0;
  for (let count = 0; count < words.length; count++) {
  let letter = words.charAt(count);
  if ("aeiou".includes(letter)) {
  vowelCount++;
   }
   }
  console.log("Vowel count: " + vowelCount);

        let sum = 0;
for (let count = 1; count <= 100; count++) {
            sum += count;
  }
 let average = sum / 100;
 console.log("Average of numbers between 1 and 100 is: " + average);

  let numberDiv = 12;
  process.stdout.write("Divisors of 12 are: ");
  for (let d = 1; d <= numberDiv; d++) {
  if (numberDiv % d === 0) {
  process.stdout.write(d + " ");
    }
   }
        console.log();

        let base = 2;
        for (let count = 1; count <= 5; count++) {
            let result = Math.pow(base, count);
            console.log(base + " raised to power " + count + " = " + result);
        }

   let sumOfEven = 0;
        for (let count = 0; count <= 20; count += 2) {
            sumOfEven += count;
        }
        console.log("The sum of even numbers is: " + sumOfEven);

     
let sumOfOdd = 0;
  for (let count = 1; count <= 20; count += 2) {
            sumOfOdd += count;
        }
        console.log("The sum of odd numbers is: " + sumOfOdd);

        let numbers = 1234;
        let reversedNumber = 0;
        let originalNumber = numbers;
        for (; numbers > 0; numbers = Math.floor(numbers / 10)) {
            let digit = numbers % 10;
            reversedNumber = reversedNumber * 10 + digit;
        }
        if (originalNumber === reversedNumber) {
            console.log(reversedNumber + " is palindrome");
        } else {
            console.log(reversedNumber + " is not palindrome");
        }

        let note = "ada";
        let reversedString = "";
        let originalString = note;
        for (let i = note.length - 1; i >= 0; i--) {
            reversedString += note.charAt(i);
        }
        if (originalString === reversedString) {
            console.log(originalString + " is a palindrome");
        } else {
            console.log(originalString + " is not a palindrome");
}
}
}
