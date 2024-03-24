let marks = prompt("enter student marks(0-100):")

switch (true) {
  case "marks > 79 && marks <= 100":
    "A"; 
    break;
  case "marks >= 60 && marks <= 79":
    "B";
    break;
  case "marks > 49 && marks <= 59":
    "C";
    break;
  case "marks >= 40 && marks <= 49":
    "D";
    break;
  case "marks < 40":
    "E";
}
