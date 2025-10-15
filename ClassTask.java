	public class ClassTask{
	public static void main(String[]args){



String word = "semicolon";
for(int length = 0; length < word.length(); length ++){
char letter = word.charAt(length);

System.out.print(letter +" " );

}



int number = 1,2,3,4,5,6;
for(int length = 0; length < number.length(); length ++){
int val = number.(length);

System.out.print(val +" " );

}


String upper = "michael";
for(int length = 0; length < upper.length(); length ++){
char letter = upper.charAt(length);

System.out.print(upper.toUpperCase());
}

System.out.print(upper.toUpperCase());
System.out.println();




String words = "mr femi";

int vowelCount = 0;

for(int count = 0; count < words.length(); count++){
char words = words.charAt(count);
vowelCount += words;
	
}
System.out.print(vowelCount);



int average = 0;
int sum = 0;
for(int count = 0; count < 100; count++){

sum += count;
average = sum/100;
	
}
	System.out.println("average of numbers between 1 and 100 is: " + average);


int divisor = 2;
int number = 12;
for(int count = 0; count < 100; count++){

int get = number / divisor;

	
}
	System.out.println("The divisor of the number 12 is :" + divisor);



int prime = 100;
for(int count = 2; count * count < prime; count++){
	if(prime % count == 0){
	prime++;
}

System.out.println("The prime number 12 is :" + prime);
	
}
	
int power = 2;
for(int count = 0; count <= 20; count++){
	 power +=1;
	power = power*power;
}

System.out.println("The power of number  is :" + power);
	

	
int sumOfEven = 0;
for(int count = 0; count <= 20; count+=2){
	 sumOfEven += count;
	
}

System.out.println("The sum of even  is :" + sumOfEven);


	
int sumOfOdd = 0;
for(int count = 0; count <= 20; count+=3){
	 sumOfOdd += count;
	
}

System.out.println("The sum of even  is :" + sumOfOdd);
	

}

}

