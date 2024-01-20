---
layout: doc
title: Object-Oriented Programing Part 1 - Object

prev:
    text: Class
    link: ./class

next:
    text: Final Exercise
    link: ./exercise
---

# Object
An `object` is a __concrete instance__ of a class. Once a class is defined, you can create or instantiate objects from that class. These objects then possess the attributes and behaviors defined within the class.  
  
::: tip Several things we can do with an object:
1. __Creating an Object__  
In object-oriented programming, creating an object involves instantiating it from a class. This object then possesses the attributes and behaviors defined within that class.
2. __Calling an Attribute__  
Attributes represent the data or state of an object.
3. __Calling a Method__  
Methods define the behaviors or actions that an object can perform. 
:::

## Creating an Object
Now, we are going to create an object using the constructor that we’ve made in the class (blueprint) before.

::: code-group
```c [C] {1,9}
// Syntax
int main() {
    struct ClassName objectName1 = {arguments based on the parameters};
    struct ClassName objectName1 = {arguments based on the parameters};

    return 0;
}

// Example
int main() {
    struct Smartphone phone1 = {"Apple", "Black", 128, 6.1};
    struct Smartphone phone2 = {"Samsung", "Blue", 64, 6.4};

    return 0;
}
```

```c++ [C++] {1,9}
// Syntax
int main() {
    ClassName objectName1(arguments based on the parameters);
    ClassName objectName2(arguments based on the parameters);

    return 0;
}

// Example
int main() {
    Smartphone phone1("Apple", "Black", 128, 6.1);
    Smartphone phone2("Samsung", "Blue", 64, 6.4);

    return 0;
}
```

```java [Java] {1,7}
// Syntax
public static void main(String[] args) {
    ClassName objectName1 = new ClassName(arguments based on the parameters);
    ClassName objectName2 = new ClassName(arguments based on the parameters);
}

// Example
public static void main(String[] args) {
    Smartphone phone1 = new Smartphone("Apple", "Black", 128, 6.1f);
    Smartphone phone2 = new Smartphone("Samsung", "Blue", 64, 6.4f);
}
```

```python [Python] {1,5}
# Syntax
object_name1 = ClassName(arguments_based_on_parameters)
object_name2 = ClassName(arguments_based_on_parameters)

# Example
phone1 = Smartphone("Apple", "Black", 128, 6.1)
phone2 = Smartphone("Samsung", "Blue", 64, 6.4)
```
:::

## Calling an Attribut
It refers to accessing the data stored within an object's properties or member variables. To retrieve or modify this data, you call or access the object's attributes.
To call an attribute, we can use the syntax “`objectName.attributeName`”

::: code-group
```c [C] {1,10}
// Syntax
int main() {
    struct ClassName objectName = {arguments based on the parameters};

    printf("AttributeName: %s\n", objectName.attributeName);

    return 0;
}

// Example
int main() {
    struct Smartphone phone = {"XiaoMi", "Black", 128, 6.1};

	printf("Brand: %s\n", phone.brand);
    // Output: XiaoMi

    return 0;
}
```

```c++ [C++] {1,10}
// Syntax
int main() {
    ClassName objectName(arguments based on the parameters);

        std::cout << "AttributeName: " << objectName.attribute << std::endl;

    return 0;
}

// Example
int main() {
    Smartphone phone1("Apple", "Black", 128, 6.1);
    Smartphone phone2("Samsung", "Blue", 64, 6.4);
    std::cout << "Brand: " << phone1.color << std::endl;
    // Output: Black
    return 0;
}
```

```java [Java] {1,8}
// Syntax
public static void main(String[] args) {
    ClassName objectName = new ClassName(arguments based on the parameters);

    System.out.println("AttributeName: " + objectName.attributeName);
}

// Example
public static void main(String[] args) {
    Smartphone phone1 = new Smartphone("Apple", "Black", 128, 6.1f);
    Smartphone phone2 = new Smartphone("Samsung", "Blue", 64, 6.4f);

    System.out.println("Brand: " + phone2.memory);

    // Output: 64
}
```

```python [Python] {1,5}
# Syntax
object_name = ClassName(arguments_based_on_parameters)
print("AttributeName:", object_name.attribute_name)

# Example
phone1 = Smartphone("Apple", "Black", 128, 6.1)
phone2 = Smartphone("Samsung", "Blue", 64, 6.4)

print("Memory:", phone2.memory)
```
:::

## Calling a Method
It refers to __executing a function__ that is defined within a class or an object. Calling a method allows you to execute a specific functionality associated with that object. It can be called using the syntax “`objectName.methodName()`”.

::: code-group
```c [C] {1,10}
// Syntax
int main() {
    struct ClassName objectName = {arguments based on the parameters};

    methodName(&objectName);

    return 0;
}

// Example
int main() {
    struct Smartphone phone = {"XiaoMi", "Black", 128, 6.1};

    powerOn(&phone);
    // Output: "Powering on the XiaoMi smartphone..."

    return 0;
}
```

```c++ [C++] {1,10}
// Syntax
int main() {
    ClassName objectName(arguments based on the parameters);

    objectName.methodName();

    return 0;
}

// Example
int main() {
    Smartphone phone("Apple", "Black", 128, 6.1);

    phone.powerOn();
    // Output: "Powering on the Apple smartphone..."
    return 0;
}
```

```java [Java] {1,8}
// Syntax
public static void main(String[] args) {
    ClassName objectName = new ClassName(arguments based on the parameters);

    objectName.methodName();
}

// Example
public static void main(String[] args) {
    Smartphone phone = new Smartphone("Samsung", "Blue", 64, 6.4f);

    phone.powerOn();
    // Output: "Powering on the Samsung smartphone..."
}
```

```python [Python] {1,5}
# Syntax
object_name = ClassName(arguments_based_on_parameters)
object_name.method_name()

# Example
phone = Smartphone("Samsung", "Blue", 64, 6.4)
phone.power_on()
```
:::

## Exercise

::: tip What to do?
1. Try to create 5 different Student Object. Don’t forget to fill the data and make sure to use various data.
2. Try to call all the methods in the Class for each students.
:::

