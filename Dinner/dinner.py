# FACTORIAL OF A NUMBER

print("Enter a number: ")
number = int(input())

factorial = 1
count = 1
while count <= number:
    factorial = factorial * number
    number -= 1

print("The factorial of the number is:", factorial)



# ARMSTRONG NUMBER

print("Enter 3 number: ")
number1 = int(input())

armstrong1 = 0
armstrong2 = 0
armstrong3 = 0

armstrong1 = number1 % 10
armstrong2 = (number1 % 100) // 10
armstrong3 = (number1 % 1000) // 100

sum = (armstrong1 * armstrong1 * armstrong1) + (armstrong2 * armstrong2 * armstrong2) + (armstrong3 * armstrong3 * armstrong3)
if number1 == sum:
    print(number1, "Is armstrong")
else:
    print(number1, "is not armstrong")



# PERFECT NUMBER

print("Enter number: ")
number2 = int(input())

summation = 0

count = 1
while count < number2:
    if number2 % count == 0:
        summation += count
    count += 1

if number2 == summation:
    print(number2, "is a Perfect Number")
else:
    print(number2, "is not a Perfect Number")



# ARMSTRONG BETWEEN 1 & 100

warm = 100
count = 1
while count < warm:
    if warm % count == 0:
        warm += count
        print(warm)
    count += 1



# STRONG NUMBER

print("Enter 3 number: ")
number3 = int(input())

strong1 = 0
strong2 = 0
strong3 = 0

strong1 = number3 % 10
strong2 = (number3 % 100) // 10
strong3 = (number3 % 1000) // 100

factor1 = 1
count = 1
while count <= strong1:
    factor1 = factor1 * strong1
    strong1 -= 1

factor2 = 1
count = 1
while count <= strong2:
    factor2 = factor2 * strong2
    strong2 -= 1

factor3 = 1
count = 1
while count <= strong3:
    factor3 = factor3 * strong3
    strong3 -= 1

summer = factor1 + factor2 + factor3
if number3 == summer:
    print(number3, "Is a strong number")
else:
    print(number3, "is not a strong number")



# LEAP YEAR

print("Enter year: ")
year = int(input())

if year % 4 == 0 and year % 100 != 0:
    print(year, "Is a leap year")
elif year % 4 == 0 and year % 100 == 0 and year % 400 == 0:
    print(year, "Is a leap year")
else:
    print(year, "Is not a leap year")



# PERFECT NUMBER BETWEEN 1 AND 1000

number4 = 1
while number4 <= 1000:
    addition = 0
    count = 1
    while count < number4:
        if number4 % count == 0:
            addition += count
        count += 1
    if addition == number4:
        print("perfect numbers are:", number4)
    number4 += 1
