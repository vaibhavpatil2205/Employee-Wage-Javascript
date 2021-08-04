const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=100;

let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArr=new Array();

function getWorkingHrs(empCheck){
	switch(empCheck) {
		case IS_PART_TIME:
			return PART_TIME_HOURS;
			break;
		case IS_FULL_TIME:
			return FULL_TIME_HOURS;
			break;	
		default:
			return 0;
			break;
	}
}

function calculateWage(totalEmpHrs){
	return totalEmpHrs * WAGE_PER_HOUR;
}

while(totalWorkingDays < NUM_OF_WORKING_DAYS && totalEmpHrs < MAX_HRS_IN_MONTH){
	totalWorkingDays++;	 
	let empCheck=Math.floor(Math.random()*10)%3;
	let empHr=getWorkingHrs(empCheck);
	totalEmpHrs += empHr;
	empDailyWageArr.push(calculateWage(empHr));
}

let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days : "+totalWorkingDays)
console.log("Total Hrs :"+totalEmpHrs )
console.log("Employee wage : " + totalEmpWage);
console.log("Daily Wages : "+empDailyWageArr)