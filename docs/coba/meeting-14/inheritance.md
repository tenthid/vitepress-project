---
layout: doc
title: Object-Oriented Programing Part 2 - Inheritance

prev:
    text: Encapsulation
    link: ./encapsulation

next:
    text: Abstraction
    link: ./abstraction
---

# Inheritance
`Inheritance` is a mechanism that allows a class (called a child or derived class) to inherit properties and behaviors from another class (called a parent or base class). It promotes code reusability and establishes a hierarchical relationship between classes.  
  
- For example, imagine a vehicle class. From this, you can create more specific classes like "Car," "Bike," or "Truck." Each derived class inherits the common attributes and methods from the general "Vehicle" class while having its own unique functionalities.  
  
- Inheritance, as a built-in feature, is supported in C++ and Java but not in C. However, in C, a form of inheritance can be emulated by using structures and pointers to structures. This approach involves embedding one structure within another to simulate a relationship similar to inheritance.

::: code-group
```c++ [C++]
// Syntax // [!code highlight]
class ParentClass {

};

class ChildClass : public ParentClass {
    // Derived class members
};
 
// Example // [!code highlight]
class SmartPhone {
private:
    std::string brand;
    std::string color;
    int memory;
    float screenSize;

public:
    void powerOn() {

    }
};

class AndroidPhone : public SmartPhone {
private:
    std::string operatingSystem;

public:
    void installApp(std::string appName) {
		
    }
};
```

```java [Java]
// Syntax // [!code highlight]
class ParentClass {

}

class ChildClass extends ParentClass {
    // Derived class members
}
 
// Example // [!code highlight]
public class SmartPhone {
    private String brand;
    private String color;
    private int memory;
    private float screenSize;

    public void powerOn() {

    }
}

public class AndroidPhone extends SmartPhone {
    private String operatingSystem;

    public void installApp(String appName) {
        // Installation logic for Android app
    }
}
```

```python [Python]
# Syntax // [!code highlight]
class ParentClass:
    

class ChildClass(ParentClass):
 
# Example // [!code highlight]
class SmartPhone:
    def __init__(self, brand, color, memory, screen_size):
        self._brand = brand  # Use a single underscore for protected attribute
        self._color = color
        self._memory = memory
        self._screen_size = screen_size

    def power_on(self):
        pass

class AndroidPhone(SmartPhone):
    def __init__(self, brand, color, memory, screen_size, operating_system):
        super().__init__(brand, color, memory, screen_size)
        self._operating_system = operating_system

    def install_app(self, app_name):
        pass
```
:::

Inheritance allows a child class to use what's in the parent class. The __child can take__ the parent's stuff that's labeled as "public" or "protected" and also add its own things. But the __parent can't use__ what the child adds—it keeps its own stuff private and can't see the child's new stuff. This helps keep each class organized and lets new classes build on what already exists without messing up the original class.

## Exercise
::: tip What to do?
Create 2 other classes to be the Child Class for the previous Class with these details:
1. Electronic Class
- Attribute: brand
- Method: displayBrand()
2. Book Class
- Attribute: author
- Method: displayAuthor()

`Implement the concept of inheritance` that you’ve just learned!
:::