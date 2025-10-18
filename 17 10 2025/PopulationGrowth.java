
import java.util.Scanner;

public class PopulationGrowth{
public static void main(String[] args){

Scanner scanner = new Scanner(System.in);



double estimatedPopulation = 81420000;
double growthRate = 1.0/100;



for(int count = 1; count <= 75; count++){
double populationYears = estimatedPopulation*(Math.pow((1 + growthRate),count));


double yearDifference = populationYears - estimatedPopulation;



System.out.println(" year: " + count + "\t" +" Anticipated world population is: " +  populationYears +"\t\t" + "Numerical increase per year is: " + yearDifference );


}

}
}