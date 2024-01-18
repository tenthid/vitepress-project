---
layout: doc
title: Selection - Switch Case

prev:
    text: Ternary
    link: ./ternary

next:
    text: Exercise
    link: ./exercise
---
# Switch Case
The `switch statement` is a control flow statement used in programming to perform different actions based on different conditions or values of a single variable or expression.
## Syntax
::: info
`expression`: A variable or expression whose value is checked against the cases.  
`case value1`: The value to match against the expression.  
`break`: Keyword used to exit the switch block after executing the matching case.  
`default`: Optional. Executed if none of the cases match the expression.  
:::
```txt
switch (expression) {
    case value1:
        // code to execute if expression matches value1
        break;
    case value2:
        // code to execute if expression matches value2
        break;
    // ... more cases
    default:
        // code to execute if expression doesn't match any case
}
```
## Switch Case Example
::: info
Python does not have a built-in switch-case statement like some other programming languages (such as C, C++, or Java).
:::
```cmd
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

System.out.println("The day is: " + dayName);
```