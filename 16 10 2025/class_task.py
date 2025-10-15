word = "semicolon"
        for length in range(len(word)):
            letter = word[length]
            print(letter, end=" ")

        print()

        number = [1, 2, 3, 4, 5, 6]
        for length in range(len(number)):
            val = number[length]
            print(val, end=" ")

        print()

        upper = "michael"
        print(upper.upper())

        words = "mr femi"
        vowelCount = 0
        for count in range(len(words)):
            letter = words[count]
            if letter in "aeiou":
                vowelCount += 1
        print("Vowel count:", vowelCount)

        sum = 0
        for count in range(1, 101):
            sum += count
        average = sum / 100
        print("Average of numbers between 1 and 100 is:", int(average))

        numberDiv = 12
        print("Divisors of 12 are:", end=" ")
        for d in range(1, numberDiv + 1):
            if numberDiv % d == 0:
                print(d, end=" ")
        print()

        base = 2
        for count in range(1, 6):
            result = pow(base, count)
            print(base, "raised to power", count, "=", result)

        sumOfEven = 0
        for count in range(0, 21, 2):
            sumOfEven += count
        print("The sum of even numbers is:", sumOfEven)

        sumOfOdd = 0
        for count in range(1, 21, 2):
            sumOfOdd += count
        print("The sum of odd numbers is:", sumOfOdd)

        numbers = 1234
        reversedNumber = 0
        originalNumber = numbers
        while numbers > 0:
            digit = numbers % 10
            reversedNumber = reversedNumber * 10 + digit
            numbers //= 10
        if originalNumber == reversedNumber:
            print(reversedNumber, "is palindrome")
        else:
            print(reversedNumber, "is not palindrome")

        note = "ada"
        reversedString = ""
        originalString = note
        for i in range(len(note) - 1, -1, -1):
            reversedString += note[i]
        if originalString == reversedString:
            print(originalString, "is a palindrome")
        else:
            print(originalString, "is not a palindrome")