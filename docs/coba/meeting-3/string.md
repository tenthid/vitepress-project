---
layout: doc
title: Input, Output, and String - String

prev:
    text: Format Output
    link: ../meeting-3/outputformat

next:
    text: Exercise
    link: ../meeting-3/exercise
---

# String
A `string` is a sequence of characters, typically used to represent text. It could include letters, numbers, symbols, and whitespace. Strings are enclosed in single quotes (' ') or double quotes (" "). They're fundamental data types and are used extensively in almost every programming language.  

::: info Several things that can be done with strings include:
1. Manipulation
2. Concatenation
3. Slicing
:::

## String Manipulation
:::details __1. Finding a character with a particular index__
- `Strings` are indexed, meaning each character has a position. Finding a character involves specifying its position (index) within the string.
- __Pseudocode:__
```txt
FUNCTION findCharacterAtIndex(inputString, index):
    IF index < 0 OR index >= length(inputString):
        RETURN "Index out of bounds"
    END IF
    
    characterAtIndex = inputString[index]
    RETURN characterAtIndex
END FUNCTION
```
- __Example__

::: code-group
```c [C]
char my_string[] = "Hello, World!";
char char_at_index = my_string[7];
printf("%c\n", char_at_index);
```
```c++ [C++]
int num = 42;
string my_string = "Hello, World!";
char char_at_index = my_string[7];
cout << char_at_index << endl;
```
```java [Java]
String myString = "Hello, World!";
char charAtIndex = myString.charAt(7);
System.out.println(charAtIndex);
```
```python [Python]
my_string = "Hello, World!"
char_at_index = my_string[7]
print(char_at_index)
```
:::

::: details __2. Changing all characters to lowercase__
- This operation converts all characters in a string to lowercase.
::: code-group
```c [C]
char myString[] = "Hello, World!";
int length = strlen(myString); 
for (int i = 0; i < length; i++) {
    if (myString[i] >= 'A' && myString[i] <= 'Z') {
        myString[i] = myString[i] + 32; // converting uppercase to lowercase in ASCII
    }
}
printf("%s\n", myString);
```
```c++ [C++]
string myString = "Hello, World!";
for (int i = 0; i < myString.length(); i++) {
    myString[i] = tolower(myString[i]); // using tolower function
}
cout << myString << endl;
```
```java [Java]
String myString = "Hello, World!";
String lowercaseString = myString.toLowerCase();
System.out.println(lowercaseString);
```
```python [Python]
my_string = "Hello, World!"
lowercase_string = my_string.lower()
print(lowercase_string)
```
:::

::: details __3. Changing all characters to uppercase__
- This operation converts all characters in a string to uppercase.
::: code-group
```c [C]
char myString[] = "Hello, World!";
int length = strlen(myString);
for (int i = 0; i < length; i++) {
    if (myString[i] >= 'a' && myString[i] <= 'z') {
        myString[i] = myString[i] - 32; // converting lowercase to uppercase in ASCII
    }
}
printf("%s\n", myString);
```
```c++ [C++]
string myString = "Hello, World!";
for (int i = 0; i < myString.length(); i++) {
    myString[i] = toupper(myString[i]); // using toupper function
}
cout << myString << endl;
```
```java [Java]
String myString = "Hello, World!";
String uppercaseString = myString.toUpperCase();
System.out.println(uppercaseString);
```
```python [Python]
my_string = "Hello, World!"
uppercase_string = my_string.upper()
print(uppercase_string)
```
:::

## Concat String
`Concatenation` is like string addition. It joins multiple strings end-to-end to form a single longer string.
::: code-group
```c [C]
char string1[] = "Hello, ";
char string2[] = "World!";
char concatenatedString[50];

strcpy(concatenatedString, string1);
strcat(concatenatedString, string2);

printf("%s\n", concatenatedString);
```
```c++ [C++]
string string1 = "Hello, ";
string string2 = "World!";
string concatenatedString = string1 + string2;

cout << concatenatedString << endl;
```
```java [Java]
String string1 = "Hello, ";
String string2 = "World!";
String concatenatedString = string1.concat(string2);

System.out.println(concatenatedString);
```
```python [Python]
string1 = "Hello, "
string2 = "World!"
concatenated_string = string1 + string2
print(concatenated_string)
```
:::
- Pseudocode
``` txt
FUNCTION concatenateStrings(string1, string2):
    concatenatedString = string1 + string2
    RETURN concatenatedString
```

## Slice String
`String slicing` extracts a part of a string by specifying the starting and ending indices or positions.
::: code-group
```c [C]
char inputString[] = "Hello, World!";
int startIndex = 3;
int endIndex = 8;
char slicedString[50];

strncpy(slicedString, inputString + startIndex, endIndex - startIndex);
slicedString[endIndex - startIndex] = '\0';
printf("%s\n", slicedString);
```
```c++ [C++]
string inputString = "Hello, World!";
int startIndex = 3;
int endIndex = 8;
string slicedString = inputString.substr(startIndex, endIndex - startIndex);
cout << slicedString << endl;
```
```java [Java]
String inputString = "Hello, World!";
int startIndex = 3;
int endIndex = 8;
String slicedString = inputString.substring(startIndex, endIndex);
System.out.println(slicedString);
```
```python [Python]
input_string = "Hello, World!"
start_index = 3
end_index = 8
sliced_string = input_string[start_index:end_index]
print(sliced_string)
```
:::
- Pseudocode
```txt
FUNCTION sliceString(inputString, startIndex, endIndex):
    slicedString = inputString[startIndex:endIndex]
    RETURN slicedString
```
