

for count in range(0, 101, 2):
    print(count, end=" ")

for count in range(50, 101, 3):
    print(count, end=" ")

for count in range(100, 0, -1):
    print(count, end=" ")

for count in range(1, 21):
    square = count * count
    print(square, end=" ")

for count in range(1, 51):
    multiple = count * 3
    print(multiple, end=" ")

for count in range(1, 101):
    if count % 5 == 0 and count % 3 == 0:
        print(count, " ")

counter = 1
for count in range(1, 101):
    if count % 7 == 0:
        counter += 1
print("the count of the numbers are:", counter, " ")

sum = 0
for count in range(0, 51):
    sum = sum + count
print(sum, " ")

for character in range(ord('A'), ord('Z') + 1):
    print(chr(character), end=" ")

number = 0
total = 0
for number in range(1, 13):
    total = number * 4
    print("4 *", number, "=", total)

word = "michael"
for length in range(len(word)):
    letter = word[length]
    print(letter, end=" ")
    print()

english = "michaeeeeel"
count = 0
for length in range(len(english)):
    letter = english[length]
    print(letter, end=" ")
    if letter == 'e':
        count += 1
print()
print(count)

upper = "michael"
for length in range(len(upper)):
    letter = upper[length]
print(upper.upper())
print()

lower = "MICHAEL"
for length in range(len(lower)):
    letter = lower[length]



numberr = 456789
numbers = [4, 5, 6, 7, 8]

smallestDigit = numbers[0]

counting = 0
while counting < len(numbers):
    if numbers[counting] < smallestDigit:
        smallestDigit = numbers[counting]
        counting += 1
    counting += 1
print("The smallest digit is:", smallestDigit)


numberrr = 456789
numberss = [4, 5, 6, 7, 8, 9]

largestDigit = numberss[0]

countin = 0
while countin < len(numberss):
    if numberss[countin] > largestDigit:
        largestDigit = numberss[countin]
        countin += 1
    countin += 1
print("The largest digit is:", largestDigit)


numTwo = [1, 2, 3, 4, 5]
summation = 0

for coun in range(len(numTwo)):
    summation += numTwo[coun]

print("The sum of numbers is:", summation)

