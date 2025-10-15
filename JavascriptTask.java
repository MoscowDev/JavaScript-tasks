

	public class JavascriptTask{
	public static void main(String[]args){





for(int count = 0; count <= 100; count +=2){
 System.out.print(count +" ");
}



for(int count = 50; count <= 100; count +=3){
 System.out.print(count +" ");

}
for(int count = 100; count >= 1; count --){
 System.out.print(count +" ");

}



for(int count = 1; count <= 20; count ++){

int square = count * count;
 System.out.print(square +" ");

}



for(int count = 1; count <= 50; count ++){

int multiple = count * 3;
 System.out.print(multiple +" ");

}

for(int count = 1; count <= 100; count ++){

if (count % 5 == 0 && count % 3 == 0){

System.out.println( count+" ");
}
 

}

int counter = 1;
for(int count = 1; count <= 100; count ++){

if (count % 7 == 0){
 counter++;

}
}
System.out.println("the count of the numbers are:"+ counter+" ");


int sum = 0;
for(int count = 0; count <= 50; count ++){

	sum = sum + count;

}

	 System.out.print(sum +" ");



for(char character = 'A'; character <= 'Z'; character ++){


 System.out.print(character +" ");

}

int number = 0;
int total = 0;
for( number = 1; number <= 12; number++){

total = number*4;  
 System.out.println( "4 * " + number + " = " + total);
}

String word = "michael";
for(int length = 0; length < word.length(); length ++){
char letter = word.charAt(length);

System.out.print(letter +" " );
System.out.println();
}



String english = "michaeeeeel";
int count = 0;
for(int length = 0; length < english.length(); length ++){
char letter = english.charAt(length);

System.out.print(letter +" " );
if (letter == 'e'){
count ++;
}
}
System.out.println();
System.out.println(count);



String upper = "michael";
for(int length = 0; length < upper.length(); length ++){
char letter = upper.charAt(length);

}

System.out.print(upper.toUpperCase());
System.out.println();



String lower = "MICHAEL";
for(int length = 0; length < lower.length(); length ++){
char letter = lower.charAt(length);

}


}
}
