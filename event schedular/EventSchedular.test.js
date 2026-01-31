const { describe } = require("yargs");
const {addEvent} = require("./EventSchedular");


//describe("Test for add function", ()=>{
test("Test to AddEvent", ()=>{

    expect(AddEvent(1,wedding,tuesday,february,6)).toBe(1,wedding,tuesday,february,6);
});

// test("Test to add three numbers, 10,5 and 2 ", ()=>{

//     expect(subtract(10,5,2)).toBe(3);
// });

// test("Test to divide two numbers,10,5 ", ()=>{
//     expect(getDivision(10,2)).toBe(5);
// });

// test("test that numbers can multiply", ()=>{

// expect(getMultiple(3,3,3,3)).toBe(81);
// });
// //});