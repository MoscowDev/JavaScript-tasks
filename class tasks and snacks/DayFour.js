class DayFour {

    static getQuartersOfMonth(month) {

        let monthNumber = "";

        if (month <= 3) {
            monthNumber = "Quarter 1";
        }
        else if (month <= 6) {
            monthNumber = "Quarter 2";
        }
        else if (month <= 9) {
            monthNumber = "Quarter 3";
        }
        else if (month <= 12) {
            monthNumber = "Quarter 4";
        }

        return monthNumber;
    }
}



function main() {

    const month = 2;   
    const result = DayFour.getQuartersOfMonth(month);

    console.log("Month " + month + " is in: " + result);
}

main();
