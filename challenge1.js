
function gradeGenerator(marks){
  //
  switch (true) {
  case marks > 79 && marks <= 100:
   return "A"; 

  case marks >= 60 && marks <= 79:
   return "B";
  
  case marks > 49 && marks <= 59:
   return "C";
  
  case marks >= 40 && marks <= 49:
   return "D";
    
  case marks < 40:
   return "E";
}}


gradeGenerator()
console.log(gradeGenerator(76))