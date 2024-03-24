function calculateNetSalary(grossSalary) {
  let netSalaryAfterTax = "";
  //calculate net salary after tax based on gross salary

  if (grossSalary <= 288000) {
    netSalaryAfterTax = grossSalary - 28800;
  } 
  else if (grossSalary >= 288001 && grossSalary <= 388000) {
    netSalaryAfterTax = grossSalary - 24999.75;
  } 
  else if (grossSalary >= 388001 && grossSalary <= 6000000) {
    netSalaryAfterTax = grossSalary - 1683599.7;
  }
   else if (grossSalary >= 6000001 && grossSalary <= 9600000) {
    netSalaryAfterTax = grossSalary - 1169999.68;
  }
   else {
    netSalaryAfterTax = grossSalary - 0.35 * grossSalary;
  }

  // Further deductions from net salary after tax
  let finalNetSalary;

  if (netSalaryAfterTax <= 5999){
    finalNetSalary = netSalaryAfterTax - 150;
  }
   else if (netSalaryAfterTax >= 6000 && netSalaryAfterTax <= 7999){
    finalNetSalary = netSalaryAfterTax - 300;
  }
   else if (netSalaryAfterTax >= 8000 && netSalaryAfterTax <= 11999){
    finalNetSalary = netSalaryAfterTax - 400;
  }
   else if (netSalaryAfterTax >= 12000 && netSalaryAfterTax <= 14999){
    finalNetSalary = netSalaryAfterTax - 500;
  }
   else if (netSalaryAfterTax >= 15000 && netSalaryAfterTax <= 19999){
    finalNetSalary = netSalaryAfterTax - 600;
  }
   else if (netSalaryAfterTax >= 20000 && netSalaryAfterTax <= 24999){
    finalNetSalary = netSalaryAfterTax - 750;
  }
   else if (netSalaryAfterTax >= 25000 && netSalaryAfterTax <= 29999){
    finalNetSalary = netSalaryAfterTax - 850;
  }
   else if (netSalaryAfterTax >= 30000 && netSalaryAfterTax <= 34999){
    finalNetSalary = netSalaryAfterTax - 900;
  }
   else if (netSalaryAfterTax >= 35000 && netSalaryAfterTax <= 39999){
    finalNetSalary = netSalaryAfterTax - 950;
  }
   else if (netSalaryAfterTax >= 40000 && netSalaryAfterTax <= 44999){
    finalNetSalary = netSalaryAfterTax - 1000;
  }
   else if (netSalaryAfterTax >= 45000 && netSalaryAfterTax <= 49999){
    finalNetSalary = netSalaryAfterTax - 1100;
  }
   else if (netSalaryAfterTax >= 50000 && netSalaryAfterTax <= 59999){
    finalNetSalary = netSalaryAfterTax - 1200;
  }
   else if (netSalaryAfterTax >= 60000 && netSalaryAfterTax <= 69999){
    finalNetSalary = netSalaryAfterTax - 1300;
  }
   else if (netSalaryAfterTax >= 70000 && netSalaryAfterTax <= 79999){
    finalNetSalary = netSalaryAfterTax - 1400;
  }
   else if (netSalaryAfterTax >= 80000 && netSalaryAfterTax <= 89999){
    finalNetSalary = netSalaryAfterTax - 1500;
  }
   else if (netSalaryAfterTax >= 90000 && netSalaryAfterTax <= 99999){
    finalNetSalary = netSalaryAfterTax - 1600;
  }
   else {
    finalNetSalary = netSalaryAfterTax - 1700;
  }

  return finalNetSalary;
}
 calculateNetSalary()




const grossSalary = 2000000
 const netSalary = calculateNetSalary(grossSalary);
 console.log(netSalary);