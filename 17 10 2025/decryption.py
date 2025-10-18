number = int(input("Enter a 4 digit number: "))

value1 = number // 1000
value2 = (number % 1000) // 100
value3 = (number % 100) // 10
value4 = number % 10

newValue1 = (value1 + 10 - 7) % 10
newValue2 = (value2 + 10-7) % 10
newValue3 = (value3 + 10-7) % 10
newValue4 = (value4 + 10-7) % 10

swap = newValue1
newValue1 = newValue3
newValue3 = swap

swap2 = newValue2
newValue2 = newValue4
newValue4 = swap2

print(newValue1)
print(newValue2)
print(newValue3)
print(newValue4)
