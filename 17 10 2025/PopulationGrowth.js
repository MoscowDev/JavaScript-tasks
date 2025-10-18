

let estimatedPopulation = 81420000;
let growthRate = 1.0/100;



for(let count = 1; count <= 75; count++){
let populationYears = estimatedPopulation*(Math.pow((1 + growthRate),count));

let yearDifference = populationYears - estimatedPopulation;


console.log(" year: " + count + "\t" +" Anticipated world population is: " +  populationYears +"\t\t" + "Numerical increase per year is: " + yearDifference );
}