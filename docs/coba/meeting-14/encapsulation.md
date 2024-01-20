---
layout: doc
title: Object-Oriented Programing Part 2 - Encapsulation

prev:
    text: Introduction
    link: ./introduction

next:
    text: Inheritance
    link: ./inheritance
---

# Encapsulation
`Encapsulation` involves bundling the data (attributes) and methods (functions or behaviors) that operate on the data within a single unit, i.e., a class. It __restricts access to certain components__, hiding the internal state of an object from the outside, and exposing only the necessary functionalities through well-defined interfaces.

::: info In C++ and Java, the encapsulation aspect is showcased through the use of access `modifiers`.
1. Private -> restrict access to class members only within the same class where they are declared. They are not accessible from outside the class.
2. Public -> allow unrestricted access to the class members from anywhere in the program.
3. Protected -> provide access to the class members within the same class and subclasses (classes that inherit from the parent class).
:::

::: code-group
```c++ [C++]
class Smartphone {
    private:
        std::string brand;
            std::string color;
            int memory;
        float screen_size;

    public:
        void powerOn() {

        }
};
```
 
```java [Java]
public class SmartPhone {
    private String brand;
    private String color;
    private int memory;
    private float screenSize;

    public void powerOn() {

    }
}
```
 
```python [Python]
class SmartPhone:
    def __init__(self, brand, color, memory, screen_size):
        self._brand = brand  # Use a single underscore to indicate a "protected" attribute
        self._color = color
        self._memory = memory
        self._screen_size = screen_size

    def power_on(self):
        pass
```
:::

__Attributes__ are made __private__ in a class to keep them hidden and secure inside, preventing direct access or modification from outside the class. On the other hand, __methods__ are often made __public__ to provide controlled ways to interact with and modify these private attributes.
 
::: info In __Python__
Encapsulation is achieved through __naming conventions__ and properties. Although Python doesn't have explicit access modifiers like Java (public, private), it uses a convention to indicate the level of visibility.
- Attributes (_brand, _color, _memory, _screen_size) are prefixed with a __single underscore__, indicating that they are intended for internal use (protected).
:::

## Exercise

::: tip What to do?
Create a Class of Product, with attributes:
- name,
- productId (int),
- price (double),
- inStock (boolean)  
  
and a method to display the product detail.  
`Implement the concept of encapsulation` that you’ve just learned!  
  
Create an Object of Product and then call the method.
