---
layout: doc
title: Object-Oriented Programing Part 1 - Class

prev:
    text: Example
    link: ./example

next:
    text: Object
    link: ./object
---

# Class
A `class` is a __blueprint__ or a __template__ used to __create objects__. It serves as a model that defines the properties __(attributes)__ and behaviors __(methods)__ that objects of that class will have.

::: details Constructor
This is a method within a class that gets called automatically when an object of that class is created. It __initializes__ the object's attributes or performs any setup required for the object to function properly.
:::

::: details Attributes
These represent the __data__ or __characteristics__ that each object of the class will possess. For example, in a Smartphone class, attributes could include brand, color, memory, screen size.
:::

::: details Methods
These are functions defined within the class that describe the __actions__ or __behaviors__ that the objects can perform. For instance, a Smartphone class might have methods like power on, power off, check memory, etc.
:::

## Declare Class
__Class declaration__ involves specifying the blueprint or structure of an object in an object-oriented programming language.

::: info Note
In C, a struct is used to define a data structure that can  hold attributes similar to a class. This structure encapsulates related data items but doesn't have built-in methods associated with it.
:::

::: code-group
```c [C] {1,6}
// Syntax
struct ClassName {

};

// Example
struct SmartPhone {

};
```

```c++ [C++] {1,6}
// Syntax
class ClassName {
 
};

// Example
class SmartPhone {

};
```

```java [Java] {1,6}
// Syntax
public class ClassName {

}

// Example
public class SmartPhone {

}
```

```python [Python] {1,4}
# Syntax
class ClassName:

# Example
class SmartPhone:
```
:::

## Define Attribute
__Defining attributes__ within a class refers to specifying the data or characteristics that each object created from that class will possess.

::: info Note
In Python, we don't explicitly declare access `modifiers like private` as in Java. By convention, attributes are considered as public, but their names may be prefixed with a single underscore to indicate that they are intended for internal use.
:::

::: code-group
```c [C] {1,7}
// Syntax
struct ClassName {
	//attributes
	data_type attribute_name;
};

// Example
struct SmartPhone {
    char brand[50];
    char color[20];
    int memory;  // in GB
    float screen_size;
};
```

```c++ [C++] {1,8}
// Syntax
class ClassName {
	//attributes
  private:
    data_type attribute_name;
};

// Example
class SmartPhone {
  private:
    	std::string brand;
     std::string color;
     int memory;  // in GB
     float screen_size;
};
```

```java [Java] {1,7}
// Syntax
public class ClassName {
	//attributes
	data_type attribute_name;
}

// Example
public class SmartPhone {
    private String brand;
    private String color;
    private int memory;
    private float screenSize;
}
```

```python [Python] {1,6}
# Syntax
class ClassName:
    # Attributes
    attribute_name = None

# Example
class SmartPhone:
    def __init__(self):
        self.brand = ""
        self.color = ""
        self.memory = 0
        self.screen_size = 0.0
```
:::

## Define Methods
__Defining a method__ involves creating a function within a class that describes the actions or behaviors an object can perform.

::: code-group
```c [C] {1,11}
// Syntax
struct ClassName {
	//attributes
};

returnType methodName(struct ClassName *objectName) {
	// what to do
	// Return type specify the type of data that a function or method will return after its execution. Example: int, char, float, and void (does not return any value).
}

// Example
void powerOn(struct Smartphone *phone) {
    printf("Powering on the %s smartphone...\n", phone->brand);
}
```

```c++ [C++] {1,12}
// Syntax
class ClassName {
        //attributes

    public:
        //methods
    return_type methodName() {
        // what to do
    }
};

// Example
class SmartPhone {
    //write attributes

    public:
        void powerOn() {
            std::cout << "Powering on the " << brand << " smartphone...\n";
        }
}
```

```java [Java] {1,11}
// Syntax
public class ClassName {
	//attributes

    //methods
    public return_type methodName() {
        //what to do
    }
};

// Example
public class SmartPhone {
	//write attributes

    public void powerOn() {
        System.out.println("Powering on the " + brand + " smartphone...");
    }
}
```

```python [Python] {1,8}
# Syntax
class ClassName:

    # Methods
    def method_name(self):
        # What to do

# Example
class SmartPhone:
    def power_on(self):
        print("Powering on the " + self.brand + " smartphone...")
```
:::

## Create Constructor
__Creating a constructor__ involves defining a special method within a class that initializes the object's state when an instance of that class is created.

::: code-group
```c [C] {1,9}
// Syntax
struct ClassName createClassName(data_type attribute) {
    struct ClassName object;
    strcpy(object.attribute, attribute); //if it’s a string
    object.attribute = attribute; //if numbers (int/float)
    return object;
}

// Example
struct Smartphone createSmartphone(char* brand, char* color, int memory, float screenSize) {
    struct Smartphone phone;
    strcpy(phone.brand, brand);
    strcpy(phone.color, color);
    phone.memory = memory;
    phone.screenSize = screenSize;
    return phone;

```

```c++ [C++] {1,13}
// Syntax
class ClassName {
    //attributes
    //methods

    //constructor with parameters
    public:
        ClassName(data_type attributeName){
            this->attributeName = attributeName;
        }
};

// Example
public:
    Smartphone(std::string brand, std::string color, int memory, float screenSize) {
        this->brand = brand;
        this->color = color;
        this->memory = memory;
        this->screenSize = screenSize;
    }
```

```java [Java] {1,12}
// Syntax
    public class ClassName {
    //attributes
    //methods

    //constructor with parameters
    public Smartphone(data_type attributeName) {
            this.attributeName = attributeName;
    }
};

// Example
public Smartphone(String brand, String color, int memory, float screenSize) {
    this.brand = brand;
    this.color = color;
    this.memory = memory;
    this.screenSize = screenSize;
}
```

```python [Python] {1,9}
# Syntax
class ClassName:
    # Attributes

    # Constructor with parameters
    def __init__(self, attribute_name):
        self.attribute_name = attribute_name

# Example
class Smartphone:
    def __init__(self, brand, color, memory, screen_size):
        self.brand = brand
        self.color = color
        self.memory = memory
        self.screen_size = screen_size
```
:::

## Exercise

::: tip What to do?
<ol>
    <li> Make a class of Student, with these <b>attributes</b>:
        <ol style="list-style-type: lower-alpha;">
            <li>Name</li>
            <li>Age</li>
            <li>Height (in m)</li>
            <li>Gender (M/F)</li>
            <li>isActive (True/False)</li>
            <li>Student Number</li>
            <li>Year Enter</li>
        </ol>
    </li>
    <li>Make some <b>methods</b> for the Student Class:
        <ol style="list-style-type: lower-alpha;">
            <li>To display name and age</li>
            <li>To calculate how long that person has been at the school<br>
            Formula: <u>currentYear</u> - yearEnter
            </li>
            <li>To display whether the person an active student or not<br>
            Output example:<br>
            if active: name is an active student.<br>
            if not active name currently is not an active student.<br>
            </li>
        </ol>
    </li>
</ol>
:::
