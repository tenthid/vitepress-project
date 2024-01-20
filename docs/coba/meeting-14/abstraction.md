---
layout: doc
title: Object-Oriented Programing Part 2 - Abstraction

prev:
    text: Inheritance
    link: ./inheritance

next:
    text: Polymorphism
    link: ./polymorphism
---

# Abstraction
`Abstraction `is the concept of hiding complex implementation details and showing only the necessary features of an object. It allows us to focus on what an object does rather than how it does it.  
  
For example, think of a TV remote. You press a button to change channels or adjust the volume without needing to know the intricate workings inside the remote. The remote abstracts the complexities of the TV's internal mechanisms.  
  
An `abstract class` in programming serves as a blueprint for other classes. It can contain both regular methods and abstract methods. An abstract method is a method without an implementation—it's only declared but not defined within the abstract class. Abstract classes __cannot be instantiated directly__; they're meant to be extended by other classes.  

::: code-group
```c++ [C++]
// Syntax // [!code highlight]
//abstract class
class AbstractClass {
    public:
        //abstract method
        virtual dataType abstractMethod() = 0;
        virtual dataType regularMethod() {
            //regular method	
        }
};

// Example // [!code highlight]
class Shape {
  public:
    void display() { //concrete method
      std::cout << "Displaying shape..." << std::endl;
    }
  
    virtual double area() = 0; //abstract method
};
// Concrete class Circle inheriting from Shape
class Circle : public Shape {
  private:
    double radius;

  public:
    Circle(double r) : radius(r) {}

    double area() override { //must implement abstract method
      return 3.1415 * radius * radius;
    }
};

class Rectangle : public Shape {
  private:
    double length;
    double width;

  public:
    Rectangle(double l, double w) : length(l), width(w) {}
  
    double area() override { //must implement abstract method
      return length * width;
    }
};

int main() {
    Circle circle(5);
    circle.display();
    std::cout << "Area of circle: " << circle.area() << std::endl;

    Rectangle rectangle(4, 6);
    rectangle.display();
    std::cout << "Area of rectangle: " << rectangle.area() << std::endl;

    return 0;
}
```
 
```java [Java]
// Syntax // [!code highlight]
//abstract class
abstract class AbstractClass {
	//abstract method
    public abstract dataType abstractMethod();

    public void regularMethod() {
        //regular method
    }
}

// Example // [!code highlight]
abstract class Shape {
    public void display() { //concrete method
        System.out.println("Displaying shape...");
    }
    abstract double area(); //abstract method
}


class Circle extends Shape {
    double radius;
    Circle(double r) {
        radius = r;
    }

//abstract method must be implemented
double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    double length;
    double width;
    Rectangle(double l, double w) {
        length = l;
        width = w;
    }

    //abstract method must be implemented
    double area() {
        return length * width;
    }
}

public class Main {
  public static void main(String[] args) {
    Circle circle = new Circle(5);
    circle.display();
    System.out.println("Area of circle: " + circle.area());

    Rectangle rectangle = new Rectangle(4, 6);
    rectangle.display();
    System.out.println("Area of rectangle: " + rectangle.area());
    }
}
```
 
```python [Python]
# Syntax // [!code highlight]
from abc import ABC, abstractmethod

class AbstractClass(ABC):
    @abstractmethod
    def abstract_method(self):
        pass

    def regular_method(self):
        # Regular method
        pass

# Example // [!code highlight]
from abc import ABC, abstractmethod
import math

class Shape(ABC):
    def display(self):
        print("Displaying shape...")

    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return math.pi * self.radius * self.radius

class Rectangle(Shape):
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width


circle = Circle(5)
circle.display()
print("Area of circle:", circle.area())

rectangle = Rectangle(4, 6)
rectangle.display()
print("Area of rectangle:", rectangle.area())
```
:::

::: info In Python Code
the ABC module, short for Abstract Base Classes, is part of the abc (Abstract Base Classes) module. This module provides the infrastructure for defining abstract base classes in Python.
- `@abstractmethod` Decorator: This decorator is used to declare abstract methods in an abstract base class.  
Abstract methods have no implementation in the base class and must be implemented by concrete subclasses.  
:::

Now that we've set up an abstract class with abstract methods, let's implement these abstract methods in concrete classes to find the area of different shapes. We'll create specific shapes such as circle and rectangle, and provide their unique area calculations. This approach showcases how each shape's area can be calculated differently while adhering to a common interface defined by the abstract class.

## Exercise

::: tip What to do?
Change the parent class to __abstract class.__  
Create an _abstract method_ to display shipping information.   
  
- In the first child class’s abstract method (Electronic), display an output of “Shipping via courier for electronic products.”  
  
- While for the second child class’s abstract method (Book), display an output of “Shipping via postal service for books.”  
  
`Implement the concept of abstraction` that you’ve just learned!
:::
