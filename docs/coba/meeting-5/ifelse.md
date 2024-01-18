---
layout: doc
title: Selection - If-else

prev:
    text: Operator
    link: ./operator

next:
    text: Ternary
    link: ./ternary
---
# If-else
## If statement
- The if statement allows a program to execute a block of code if a specified condition is true. If the condition evaluates to true, the code inside the if block is executed; otherwise, it is skipped.
## Else-if statement
- The else if statement allows checking for multiple conditions sequentially after the initial if statement. If the if condition is false, it checks the condition specified in the else-if statement. If the else-if condition is true, the code block associated with that else-if is executed.
## Else statement
- The else statement is used in conjunction with if to execute a block of code when the if condition is false. It covers all cases that do not meet the conditions specified in the if or else-if statements.
## Case Example
Suppose you're developing a weather advisory program. Write pseudocode for a function that takes in a weather_condition as input and provides appropriate recommendations based on the weather condition.  
  
The function should consider three types of weather conditions: "sunny," "rainy," and "cloudy." If the condition is "sunny," the program should suggest going for a walk. For "rainy" weather, it should advise taking an umbrella. If it's "cloudy," the program should suggest considering a jacket.  
  
If the provided condition doesn't match any of these, the program should display a message indicating the weather condition is unknown.
::: info __Pseudocode__
```txt
BEGIN
    INPUT weather_condition
    IF weather_condition is "sunny" THEN
        DISPLAY "It's a sunny day! Let's go for a walk."
    ELSE IF weather_condition is "rainy" THEN
        DISPLAY "It's raining outside. Grab an umbrella!"
    ELSE IF weather_condition is "cloudy" THEN
        DISPLAY "It's cloudy today. Maybe take a jacket, just in case."
    ELSE
        DISPLAY "Weather condition unknown."
    END IF
END
```
:::
::: info
In `Python`, maintaining consistent and correct indentation, typically using four spaces, is crucial as it delineates the scope of code blocks, and any deviations may lead to syntax errors or altered program logic.
:::

::: info __Code Example__
::: code-group
```c [C]
char weather_condition[20];
printf("Enter the weather condition: ");
scanf("%s", weather_condition);

if (strcmp(weather_condition, "sunny") == 0) {
    printf("It's a sunny day! Let's go for a walk.\n");
} else if (strcmp(weather_condition, "rainy") == 0) {
    printf("It's raining outside. Grab an umbrella!\n");
} else if (strcmp(weather_condition, "cloudy") == 0) {
    printf("It's cloudy today. Maybe take a jacket, just in case.\n");
} else {
    printf("Weather condition unknown.\n");
}
```
```c++ [C++]
string weather_condition;
cout << "Enter the weather condition: ";
cin >> weather_condition;

if (weather_condition == "sunny") {
    cout << "It's a sunny day! Let's go for a walk." << endl;
} else if (weather_condition == "rainy") {
    cout << "It's raining outside. Grab an umbrella!" << endl;
} else if (weather_condition == "cloudy") {
    cout << "It's cloudy today. Maybe take a jacket, just in case." << endl;
} else {
    cout << "Weather condition unknown." << endl;
}
```
```java [Java]
Scanner scanner = new Scanner(System.in);
System.out.print("Enter the weather condition: ");
String weatherCondition = scanner.nextLine();

if (weatherCondition.equals("sunny")) {
    System.out.println("It's a sunny day! Let's go for a walk.");
} else if (weatherCondition.equals("rainy")) {
    System.out.println("It's raining outside. Grab an umbrella!");
} else if (weatherCondition.equals("cloudy")) {
    System.out.println("It's cloudy today. Maybe take a jacket, just in case.");
} else {
    System.out.println("Weather condition unknown.");
}
```
```python [Python]
weather_condition = input("Enter the weather condition: ")

if weather_condition == "sunny":
    print("It's a sunny day! Let's go for a walk.")
elif weather_condition == "rainy":
    print("It's raining outside. Grab an umbrella!")
elif weather_condition == "cloudy":
    print("It's cloudy today. Maybe take a jacket, just in case.")
else:
    print("Weather condition unknown.")
```
::: 
