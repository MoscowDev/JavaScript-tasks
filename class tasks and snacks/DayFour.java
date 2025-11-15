public class DayFour{

public static String getQuartersOfMonth(int month ){


 String monthNumber = "";

if(month <= 3){
  monthNumber = "Quater 1";
}
else if(month <= 6 ){
	 monthNumber = "Quater 2";
}
else if(month <= 9 ){
	 monthNumber = "Quater 3";
}

else if(month <= 12 ){
	 monthNumber = "Quater 4";
}

return monthNumber;


}
}

//array = [1,2,3,4,5,6,8,4,2,4]
//let result = array.filter((num)=> num%2 == 0)






/*
result = [2,4,6]

let resultMap = array.map((num)=> num *2)

resultMap = [2,4,6,8,10,12]

*/