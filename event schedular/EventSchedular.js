//const prompt = require('prompt-sync')();

let users = {};
let record = [];
let currentUser = null;

function AddMultipleUsers() {
    let name = prompt("Enter username: ");
    if (!users[name]) users[name] = [];
    currentUser = name;
    record = users[currentUser];
}


function AddEvent() {
    let startTime = prompt("Please enter your preferred Start time: ");
    let event = prompt("Please enter your preferred Event: ");
    let day = prompt("Please enter your preferred day for the event: ");
    let month = prompt("Please enter your preferred Month: ");
    let stopTime = prompt("Please enter your preferred Stop time: ");

    for (let index = 0; index < record.length; index++) {
        let result = record[index];
        if (result.day === day && result.month === month) {
            if (
                (startTime >= result.startTime && startTime < result.stopTime) ||
                (stopTime > result.startTime && stopTime <= result.stopTime) ||
                (startTime <= result.startTime && stopTime >= result.stopTime)
            ) {
                console.log("Scheduling conflict with: " + result.event);
                return;
            }
        }
    }

    if (event && day && month && startTime && stopTime) {
        record.push({event, day, month, startTime, stopTime});
        console.log("Event added successfully!");
    } else {
        console.log("Complete Event sign up.");
    }
}
module.exports = AddEvent