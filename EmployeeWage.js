
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;

// Calculate working hours using Random function

function getWorkingHours(empCheck) {

  switch(empCheck) {
    case 1:
        return PART_TIME_HOURS;
        break;
    case 2:
        return FULL_TIME_HOURS;
        break;
    default:
        return 0;
  }
}

// calculate the Wage of the Employee

function calcDailyWage(empHrs) {
  return empHrs* WAGE_PER_HOUR;
}


let totalEmpHrs =0;
let totalWorkingdays =0;
let empHrs = 0;
let empDailyWageArr = new Array();

// check Maximum Working Hours and Number of Working Days Conditions

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingdays < NUM_OF_WORKING_DAYS) {
totalWorkingdays++;
let empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
totalEmpHrs += empHrs;
empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Total Days: "+totalWorkingdays);
console.log("Total Hours: "+totalEmpHrs);
console.log("Daily Wage Array: "+empDailyWageArr);
console.log("Employee Wage: "+empWage);

//7A Calculate total Wage using Array forEach traversal or reduce method

let totalEmpWage = 0;

function sum(dailyWage) {
   totalEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("Total Employee wage: "+totalEmpWage);

function totalWages(totalWage , dailyWage) {
    return totalWage + dailyWage;
}
console.log("Employee Wage with Reduce Method: "+empDailyWageArr.reduce(totalWages, 0));

//7B Show the Day along with daily Wage using array helper function

let dailyCntr = 0;

function mapDayWithWage(dailyWage) {
   dailyCntr++;
   return " "+dailyCntr + "=" +dailyWage+" ";
}

let mapDaywithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("Daily Wage Map : "+mapDaywithWageArr);

//7C Show Days when Full time Wage of 160 were earned

function fulltimeWage(dailyWage) {
   return dailyWage.includes("160");
}

let fullDayWageArr = mapDaywithWageArr.filter(fulltimeWage);
console.log("Daily Wage Filter when full time wage earned: "+fullDayWageArr);

//7D Find the first occurence when full time Wage was earned using wage function

console.log("First Time full time wage was earned on Day: "+mapDaywithWageArr.find(fulltimeWage));


//7E Check if Every Element of Full Time Wage is truely holding Full Time Wage

console.log("Check all Element have full time Wage: "+fullDayWageArr.every(fulltimeWage));

//7F check if there is any Part Time Wage

function parttimeWage(dailyWage) {
   return dailyWage.includes("80");
}
console.log("Check if any part time Wage: "+mapDaywithWageArr.some(parttimeWage));

//7G Find the number of days the Employee worked

function totalDaysWorked(numofDays, dailyWage) {
   if(dailyWage > 0) return numofDays+1;
   return numofDays;
}
console.log("Number of Days Employee Worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));