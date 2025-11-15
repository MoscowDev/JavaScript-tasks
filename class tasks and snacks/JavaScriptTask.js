
let myEntries = [-2,-3,2,4,5,6,7,0,8,10]

let answer = myEntries.filter((num)=> num >= 1 && num <= 5); 
console.log(answer)

/*

let customers = {
  Ebuka: 500,
  Nick: 22,
  blessing: 70,
  uzo: 66,
  michael: 90,
  nedu: 100
};

let newNumber = [];

for (let key in customers) {
  if (customers[key] >= 80) {
    newNumber.push(key);  
  }
}

console.log(newNumber);

*/


let custom = [
  {name:"Ebuka", score: 500},
  {name:"femi", score: 60},
  {name:"Nissi", score: 200},
  {name:"Emma", score: 70},
  {name:"Dotun", score: 90},
  {name:"Nedu", score: 100},
];

let newNumbers = [];
for (let key of custom){
	for (let keys in custom) {
  		newNumbers.push(newNumbers[keys]);  
  }
}

function getHighest(a,b){
	return a.score - b.score
}


//let temp = custom[key];
//custom[key] = custom[keys];
//custom[keys] = temp; 

let result = custom.filter((num)=> num.score > 80)

result.sort(getHighest)
console.log(result);






let gpsCoordinate = [
  {longitude:"null", latitude: 500},
  {longitude:800, latitude: 60},
  {longitude:"undefined", latitude: 200},
  {longitude: -450, latitude: "undefined"},
  {longitude: 6000, latitude: 90},
  {longitude:10000, latitude: "null"},
  {longitude:"null", latitude: 10},
  {longitude:4080, latitude: 11},
  {longitude: -4000, latitude: "null"},
  {longitude:5000, latitude: "undefined"},

];


function correct(gps){
	return gps.longitude !== "null" 
&& gps.latitude !== "null" && gps.longitude !== "undefined" && gps.latitude !== "undefined";
}

console.log(gpsCoordinate.filter(correct));













