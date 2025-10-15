public class ClassTask {
    public static void main(String[] args) {

        String word = "semicolon";
        for (int length = 0; length < word.length(); length++) {
            char letter = word.charAt(length);
            System.out.print(letter + " ");
        }

        System.out.println();

        int[] number = {1, 2, 3, 4, 5, 6};
        for (int length = 0; length < number.length; length++) {
            int val = number[length];
            System.out.print(val + " ");
        }

        System.out.println();

        String upper = "michael";
        System.out.println(upper.toUpperCase());

        String words = "mr femi";
        int vowelCount = 0;
        for (int count = 0; count < words.length(); count++) {
            char letter = words.charAt(count);
            if ("aeiou".indexOf(letter) != -1) {
                vowelCount++;
            }
        }
        System.out.println("Vowel count: " + vowelCount);

        int sum = 0;
        for (int count = 1; count <= 100; count++) {
            sum += count;
        }
        int average = sum / 100;
        System.out.println("Average of numbers between 1 and 100 is: " + average);

        int numberDiv = 12;
        System.out.print("Divisors of 12 are: ");
        for (int d = 1; d <= numberDiv; d++) {
            if (numberDiv % d == 0) {
                System.out.print(d + " ");
            }
        }
        System.out.println();

     

        int base = 2;
        for (int count = 1; count <= 5; count++) {
            int result = (int) Math.pow(base, count);
            System.out.println(base + " raised to power " + count + " = " + result);
        }

        int sumOfEven = 0;
        for (int count = 0; count <= 20; count += 2) {
            sumOfEven += count;
        }
        System.out.println("The sum of even numbers is: " + sumOfEven);

        int sumOfOdd = 0;
        for (int count = 1; count <= 20; count += 2) {
            sumOfOdd += count;
        }
        System.out.println("The sum of odd numbers is: " + sumOfOdd);

        int numbers = 1234;
        int reversedNumber = 0;
        int originalNumber = numbers;
        for (; numbers > 0; numbers /= 10) {
            int digit = numbers % 10;
            reversedNumber = reversedNumber * 10 + digit;
        }
        if (originalNumber == reversedNumber) {
            System.out.println(reversedNumber + " is palindrome");
        } else {
            System.out.println(reversedNumber + " is not palindrome");
        }

        String note = "ada";
        String reversedString = "";
        String originalString = note;
        for (int i = note.length() - 1; i >= 0; i--) {
            reversedString += note.charAt(i);
        }
        if (originalString.equals(reversedString)) {
            System.out.println(originalString + " is a palindrome");
        } else {
            System.out.println(originalString + " is not a palindrome");
        }
    }
}
