---
layout: doc
title: Data Types and Variables - Variables

next:
    text: Variables
    link: ./variables
prev:
    text: Introduction
    link: ./introduction
---

# Types of Data
## Char
- a single character
- example: such as letters, digits, or special symbols
## String
- a sequence of characters grouped together. It can consist of letters, numbers, symbols, spaces, and even empty spaces
- example: ‘name’, ‘hobby’
## Integer
- whole numbers, both positive and negative, without any decimal points or fractional parts
- example: 3, 1, 299
## Float
- numbers that have decimal points or fractional parts
- example: 3.5, 19.2
## Boolean
- only two possible values, true or false
## Types of Data in Programing Langguage
::: tip C
| Primitve Data Types | Derived Data Types |
|---------------------|--------------------|
| `int` Integer data type that holds whole numbers. | `Arrays` Collection of similar data items. |
| `float` Floating-point data type that holds decimal numbers. | `Pointers` Variables that store memory addresses |
| `char` Character data type that holds single characters. | `Structures` Collection of different data types under one name |
| `double` Double-precision floating-point data type for larger decimal numbers. | |
| `_Bool` Boolean data type that holds true or false values. | |
:::

::: tip C++
| Primitve Data Types | Additional Data Types | Derived Data Types |
|---------------------|-----------------------|--------------------|
| `int` `float` `char` `_Bool` | `bool` Boolean data type that holds true or false values (not underscored like in C). | `Arrays` `Pointers` `Structures` (similar to C) |
|  | `long` Extended size integer. |  |
|  | `long long` Larger integer than long. | |
|  | `unsigned int` nsigned integer (cannot hold negative values). |  |
|  | `wchar_t` Wide character data type for storing wide characters. |  |
:::

::: tip Java
| Primitve Data Types | Derived Data Types |
|---------------------|--------------------|
| `int` Integer data type that holds whole numbers. | `Arrays` Collection of similar data items. |
| `float` Single-precision floating-point data type for decimal numbers. | `Strings` Sequence of characters treated as a data type. |
| `boolean` Boolean data type for true or false values. | `Classes` Blueprint for objects. |
|  | Interfaces, Enumerations, etc. |
:::

::: tip Python
| Primitve Data Types | Derived Data Types    | Additional Data Types |
|---------------------|-----------------------|-----------------------|
| `int` Integer data type that holds whole number. | `List` Collection of similar or different data items. | `None` Represents the absence of a value or a null value. |
| `float` Floating-point data type that holds decimal numbers.  | `Tuples` Immutable collection of ordered elements. |  |
| `str` String data type that holds sequences of characters. | `Sets` Unordered collection of unique elements. | |
| `bool` Boolean data type that holds True or False values. | `Dictionaries` Collection of key-value pairs. |  |
|  | `Custom Classes`  User-defined data types. |  |
:::