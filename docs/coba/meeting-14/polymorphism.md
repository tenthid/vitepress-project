---
layout: doc
title: Object-Oriented Programing Part 2 - Polymorphism

prev:
    text: Abstraction
    link: ./abstraction

next:
    text: Exercise
    link: ./exercise
---

# Polymorphism
`Polymorphism` means one name, many forms. In programming, it allows a single piece of code—like a function or method—to work with different types of data, adapting its behavior based on the object it's called with. It's like having a toolbox where the same tool can be used in different ways depending on what you're working on, simplifying code and making it more versatile.  

::: tip Example:  
In a zoo, various animals might make a sound. A "Dog" object would "bark," a "Cat" object would "meow," and a "Lion" object would "roar." Despite their different specific behaviors, they all respond to a generic "makeSound" method, showcasing polymorphism.
:::

::: code-group
```c++ [C++]
// Syntax // [!code highlight]
class Parent {
public:
    virtual void show() {
        std::cout << "Parent class\n";
    }
};
ved class overriding the show() method
class Child : public Parent {
public:
    void show() override {
        std::cout << "Child class\n";
    }
};

int main() {
    Parent obj1;
    Child obj2;

    obj1.show(); // Output: "Parent class"
    obj2.show(); // Output: "Child class"

    return 0;
}

// Example // [!code highlight]
class Animal {
public:
    virtual void makeSound() {
        std::cout << "Some sound..." << std::endl;
    }
};

// Derived class Dog
class Dog : public Animal {
public:
    void makeSound() override {
        std::cout << "Bark!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {
        std::cout << "Meow!" << std::endl;
    }
};

int main() {
    Animal animal1 = new Dog();
    Animal animal2 = new Cat();

    animal1.makeSound(); // Output: "Bark!"
    animal2.makeSound(); // Output: "Meow!"

    return 0;
}
```

```java [Java]
// Syntax // [!code highlight]
class Parent {
    void show() {
        System.out.println("Parent class");
    }
}

class Child extends Parent {
    void show() {
        System.out.println("Child class");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent obj = new Parent();
  	    Parent obj2 = new Child();

        obj.show(); // Output: "Parent class"
        obj2.show(); // Output: "Child class"

    }
}

// Example // [!code highlight]
class Animal {
    void makeSound() {
        System.out.println("Some sound...");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark!");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
      Animal animal1 = new Dog();
      Animal animal2 = new Cat();

      animal1.makeSound(); // Output: "Bark!"
      animal2.makeSound(); // Output: "Meow!"
    }
}
```

```python [Python]
# Syntax // [!code highlight]
class Parent:
    def show(self):
        print("Parent class")

class Child(Parent):
    def show(self):
        print("Child class")


obj = Parent()
obj2 = Child()

obj.show()  # Output: "Parent class"
obj2.show()  # Output: "Child class"

# Example // [!code highlight]
class Animal:
    def make_sound(self):
        print("Some sound...")

class Dog(Animal):
    def make_sound(self):
        print("Bark!")

class Cat(Animal):
    def make_sound(self):
        print("Meow!")

animal1 = Dog()
animal2 = Cat()

animal1.make_sound()  # Output: "Bark!"
animal2.make_sound()  # Output: "Meow!"
```
:::

The code demonstrates where objects of subclasses (Dog and Cat) are referenced by the base class (Animal) and exhibit behavior specific to their __individual types__ when invoking the __makeSound()__ method.

## Exercise

::: tip What to do?
Add a method in each child class with the __same method__ name as the parent.  
For example, if your parent class has showDetail() method, then create a method in each child class with the same name.  
  
- Inside the method of the first class, display the name, price, and brand.
- Inside the method of the second class, display the name, price, and author.  
  
To display the output, make 3 objects (with the Product, Electronic, and Book Class).
Then __display the attributes__ and __call the methods__ in each object.
:::