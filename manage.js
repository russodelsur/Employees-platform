// Compulsory Task 01

// These variables will be linked to the sections where employees profiles in the future.
let salaried = "Salaried";
let hourly = "Hourly";
let hybrid = "Hybrid";

// Getting months of the year
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// Day will be link to timesheet in the future, not to current month.
const d = new Date();
let monthName = month[d.getMonth()];

// Class "Employees" created below:
class Employees{

  // Same target and currency for all employees.
  target = 3000;
  currency = " $";

  // Constructor with all properties.
  constructor(name, NIN, employeeType, monthlySales){
  this.name = name;
  this.NIN = NIN;
  this.employeeType = employeeType;
  this.monthlySales = monthlySales;
  }
  
// Getter method to display attributes below:
  get info() {
      return console.log(`\n${monthName} payout, details below:`), console.log(`
      Employee name: ${this.name}. 
      Employee's NIN: ${this.NIN}. 
      Employee's type: ${this.employeeType}.
      Payout this month: ${this.payout()}.`);
  }

  // Empty payout method to be substituted by subclass methods.
  payout(){
  }
}

// Subclass Salaried of class Employees created below.
class Salaried extends Employees {
  constructor(name, NIN, employeeType, monthlySales, monthlySalary){
  // super key word used to bring attributes from Course
  super(name, NIN, employeeType, monthlySales);
  this.monthlySalary = monthlySalary;
  }

  // Method for payout.
  payout(){
    let salary;
    if (this.monthlySales > this.target) {
      salary = (this.monthlySalary*0.1)+this.monthlySalary;
    } else {
      salary = this.monthlySalary;
    }
    return salary + this.currency;
  }
}

// Creating 2 instances of the new subclass below.
let peter = new Salaried("Peter Max", "N029309230", salaried, 4000, 1800);
let mario = new Salaried("Mario Gonzales", "N90436963", salaried, 1500, 1500);

// pasing getter through both intances of the employees.
peter.info;
mario.info;

// Subclass Hourly of class Employees created below.
class Hourly extends Employees {
  constructor(name, NIN, employeeType, monthlySales, hoursLogged, payPerHour){
  // super key word used to bring attributes from Course
  super(name, NIN, employeeType, monthlySales);
  this.hoursLogged = hoursLogged;
  this.payPerHour = payPerHour;
  }

  // Method for payout for hourly employee.
  payout(){
    let salary;
    let pay;
    if (this.monthlySales > this.target) {
      pay = this.payPerHour*1.5;
    } else {
      pay = this.payPerHour;
    }
    salary = pay*this.hoursLogged;
    return salary + this.currency;
  }
}

// Creating 2 instances of the new subclass below.
let antonio = new Hourly("Antonio Perez", "N4326783", hourly, 5500, 152, 20);
let fran = new Hourly("Francisco Lopez", "N9875498", hourly, 1500, 120, 15);

// pasing getter through both intances of the employees.
antonio.info;
fran.info;

// Subclass Hybrid of subclass Hourly created below.
class Hybrid extends Hourly {
  hoursPerMonth = 100;
  constructor(name, NIN, employeeType, monthlySales, hoursLogged, payPerHour, monthlySalary){
  // super key word used to bring attributes from Course
  super(name, NIN, employeeType, monthlySales, hoursLogged, payPerHour);
  this.monthlySalary = monthlySalary;
  }
  payout(){
    let finalPPH;
    let salary = this.monthlySalary;
    if (this.monthlySales > this.target) {
      finalPPH = this.payPerHour*0.2;
    } else {
      finalPPH = this.payPerHour;
    }
    if (this.hoursPerMonth < this.hoursLogged) {
      salary = ((this.hoursLogged-this.hoursPerMonth)*finalPPH)+this.monthlySalary;
    }
    return salary + this.currency;
  }
}

// Creating 2 instances of the new sub/subclass below.
let sarah = new Hybrid("Sarah Johnson", "N9785437", hybrid, 6000, 90, 30, 1000);
let ramos = new Hybrid("Ramos May", "N9834738", hybrid, 1000, 200, 30, 800);

// pasing getter through both intances of the employees.
sarah.info;
ramos.info;

/* Resources and notes for future
Resources:
  Same as previous exercises.
  https://www.w3schools.com/jsref/jsref_getmonth.asp

Notes:
  In the future, we will have accounts that will have information on them (name, NIN...)
  NIN will be private to see for employee and authorized users.
  Employees will log their monthly hours and monthly sales.
  Employeer will log targets, salaries (monthly and per hour) and hours per month.
*/