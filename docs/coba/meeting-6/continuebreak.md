---
layout: doc
title: Repetition - Continue and Break

prev:
    text: Forever Loop
    link: ./foreverloop

next:
    text: Exercise
    link: ./exercise
---
# Continue and Break
## Continue
`Continue` is used to <u>skips the remaining code</u> in a loop's body for the current iteration. When continue is encountered within a loop, it jumps to the next iteration, bypassing any code that follows it within the loop for the current iteration. For example, in a loop that iterates over a list of numbers, if continue is triggered when the current number is negative, it skips any code below it for that particular iteration. It’s useful <u>when specific iterations need to be skipped</u> based on certain conditions while allowing the loop to continue executing.

::: info Code Example
```cmd
for (int i = 1; i <= 10; ++i) {
    if (i % 3 == 0) {
        continue;
    }
    printf("%d ", i);
}
```
::::

## Break
`Break` is used to <u>immediately exit a loop</u>. When encountered within a loop, break terminates the loop's execution and continues with the code following the loop. For example, in a for loop that counts from 1 to 10, if break is encountered when the counter reaches 5, the loop stops and the program moves to the line of code immediately after the loop. It's handy for prematurely <u>ending a loop</u> based on certain conditions, avoiding unnecessary iterations.

::: info Code Example
```cmd
for (int i = 1; i <= 10; ++i) {
    printf("%d ", i);
    if (i == 5) {
        break;
    }
}
```
::::
