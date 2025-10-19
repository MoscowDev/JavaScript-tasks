import java.util.Scanner;


//FACTORIAL OF A NUMBER

public class Dinner{
public static void main(String[] args){

Scanner scanner = new Scanner(System.in);

System.out.print("Enter a number: ");
int number = scanner.nextInt();

int factorial = 1;
for (int count = 1; count <= number; number--){

factorial = factorial * number;

}
System.out.println( "The factorial of the number is: " + factorial);


//ARMSTONG NUMBER

System.out.print("Enter 3 number: ");
int number1 = scanner.nextInt();



int armstrong1 = 0;
int armstrong2 = 0;
int armstrong3 = 0;


armstrong1 = number1 % 10;
armstrong2 = (number1%100)/10;
armstrong3 = (number1 %1000)/100;

int sum = (armstrong1 * armstrong1 * armstrong1)+ (armstrong2 * armstrong2 * armstrong2) + (armstrong3 * armstrong3 * armstrong3);
if (number1 == sum){
System.out.println( number1 + " Is armstrong");
}
else{
System.out.println( number1 + " is not armstrong");
}




// PERFECT NUMBER

System.out.print("Enter number: ");
int number2 = scanner.nextInt();


int summation =0;



for (int count = 1; count < number2; count++){
if (number2 % count == 0) {
     summation += count;

}
}

if (number2 == summation) {
System.out.println(number2 + " is a Perfect Number");
} else {
System.out.println(number2 + " is not a Perfect Number");
}



//ARMSTRONG BETWEEN 1 & 100

int warm = 100;
for (int count = 1; count < warm; count++){
if (warm % count == 0) {
     warm += count;

System.out.println(warm);

}

}



//STRONG NUMBER

System.out.print("Enter 3 number: ");
int number3 = scanner.nextInt();



int strong1 = 0;
int strong2 = 0;
int strong3 = 0;



strong1 = number3 % 10;
strong2 = (number3 %100)/10;
strong3 = (number3 %1000)/100;

int factor1 = 1;
for (int count = 1; count <= strong1; strong1--){

factor1 = factor1 * strong1;

}

int factor2 = 1;
for (int count = 1; count <= strong2; strong2--){

factor2 = factor2 * strong2;

}

int factor3 = 1;
for (int count = 1; count <=strong3; strong3--){

factor3 = factor3 * strong3;

}

int summer = factor1 + factor2 + factor3;
if (number3 == summer){
System.out.println( number3 + " Is a strong number");
}
else{
System.out.println( number1 + " is not a strong number");
}




//LEAP YEAR
System.out.print("Enter year: ");
int year = scanner.nextInt();

        
if(year % 4 == 0 && year % 100 != 0){
System.out.print( year + " Is a leap year ");

}

else if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){

System.out.print( year + " Is a leap year ");
}
else{
System.out.println( year + " Is not a leap year ");
}

//PERFECT NUMBER BETWEEN 1 AND 100

for (int number4 = 1; number4 <= 1000; number4++) {
      int addition = 0;
for (int count = 1; count < number4; count++){

if (number4 % count == 0) {
     addition += count;

}
}
if(addition == number4){
System.out.println("perfect numbers are: " + number4);
}
}
}
}