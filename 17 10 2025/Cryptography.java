
import java.util.Scanner;

public class Cryptography{
public static void main(String[] args){

Scanner scanner = new Scanner(System.in);

System.out.print("Enter a 4 digit number: ");
int number = scanner.nextInt();


int value1 = number /1000;
int value2 = (number%1000)/100;
int value3 = (number%100)/10;
int value4 = number % 10;


int newValue1 = (value1 + 7) % 10;
int newValue2 = (value2 + 7) % 10;
int newValue3 = (value3 + 7) % 10;
int newValue4 = (value4 + 7 )% 10;



int swap = newValue1;
swap = newValue3;
newValue3 = swap;

int swap2 = newValue2;
swap2 = newValue4;
newValue4 = swap2;

System.out.print(newValue1);
System.out.print(newValue2);
System.out.print(newValue3);
System.out.print(newValue4);

}
}