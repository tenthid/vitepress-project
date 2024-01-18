---
layout: doc
title: Function - Local vs Global Variables in Function

prev:
    text: Defining Function
    link: ./definingfunction

next:
    text: Exercise
    link: ./exercise
---

# Local vs Global Variables in Function

## Local Variables
- Local variables are declared within a specific block of code, such as within a function or a compound statement.
- Their scope is limited to the block in which they are declared. They exist only within the block in which they are defined and cannot be accessed outside of that block.
- They are created when the block is entered and destroyed when the block is exited.

## GLobal Variables
- Global variables are declared outside of any function or block, usually at the beginning of the program.
- They can be accessed by any function or block within the entire program. They have a global scope.
- They exist throughout the lifetime of the program

## Example
```cmd
int globalVar = 10;

void myFunction() {
    // Local variable
    int localVar = 5;
    printf("Local variable inside function: %d\n", localVar);
}

int main() {
    printf("Global variable in main: %d\n", globalVar);
    myFunction();
    return 0;
}
```
- Try to print the globalVar inside the function
- Try to print the localVar inside the main() function, after the myFunction()