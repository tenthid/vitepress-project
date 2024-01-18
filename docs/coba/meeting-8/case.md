---
layout: doc
title: Mid Test - Case

prev:
    text: Meeting 7 - Exercise
    link: ../meeting-7/exercise

next:
    text: Meeting 9 - Introduction
    link: ../meeting-9/introduction
---

# Case
You're tasked with developing a financial management tool—a virtual financial assistant—designed to streamline personal finance tracking. This program, crafted in `C`, `C++`, or `Java`, presents users with a menu-driven interface offering options to record incomes, expenses, review financial transactions, and exit the program. The challenge lies in creating an intuitive system that accurately captures user inputs, maintains organized records of incomes and expenses, ensures input validation, and delivers informative financial summaries.
    
::: info 
Develop a financial management program that presents users with the following main menu options:
1. Record Income
2. Record Expense
3. View Income and Expenses
4. Exit
:::  
  
Ensure that the input lies __between 1 and 4 inclusive__. If the input is invalid, __re-display the menu__ until a valid input is made.

## Upon choosing

::: details __Option 1__
Prompt the user to input their income amount and store it in an array named 'incomes'. Return to the main menu afterward.
:::

::: details __Option 2__
Prompt the user to input their expense amount and store it in an array named 'expenses'. Return to the main menu afterward.
:::

::: details __Option 3__
Display all recorded incomes from the 'incomes' array, followed by their total. Then display all recorded expenses from the 'expenses' array, followed by their total. Finally, present the cashflow result (income - expense) as the final output.
- <u>For example:</u>
```txt
Incomes: Rp10000, Rp40000, Rp50000
Total Income: Rp100000
Expenses: Rp5000, Rp15000, Rp10000
Total Expenses: Rp30000
Cashflow: Rp70000
```
Return to the main menu afterward.
:::

::: details __Option 4__
isplay the message "Thank you for using this service" and terminate the program.
:::

Construct a robust solution in `C`, `C++`, or `Java` ensuring accurate input handling, array management for income and expense records, clear output formatting, and a seamless user experience. The assessment will focus on functionality, validation, output clarity, and overall program reliability.  
  
__The things that you need to create:__
1. Algorithm in written description
2. Algorithm in pseudocode
3. Algorithm in flowchart
4. Code

::: info 
For number 1-3, please put it in a word file. For number 4 submit the code file (.c/.cpp/.java). Then submit it to the teacher.
:::

# GOOD LUCK!!!


