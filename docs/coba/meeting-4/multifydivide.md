---
layout: doc
title: Arithmetic Operators - Multiplictation and Subtraction

prev:
    text: Addition and Subtraction
    link: ./addandsub

next:
    text: Modulo
    link: ./modulo
---
# Multiplictation and Subtraction
## Multiplication
- Multiplication is the process of repeated addition, finding the total of groups of a number.
::: code-group
```c [C]
int a = 5, b = 3, result;
result = a * b;
```
```c++ [C++]
int a = 5, b = 3, result;
result = a * b;
```
```java [Java]
int a = 5, b = 3, result;
result = a * b;
```
```python [Python]
a, b = 5, 3
result = a * b
```
:::

## Division
- Division splits a quantity into equal parts or finds how many times one number is contained within another.
::: code-group
```c [C]
int a = 5, b = 3, result;
result = a / b;
```
```c++ [C++]
int a = 5, b = 3, result;
result = a / b;
```
```java [Java]
int a = 5, b = 3, result;
result = a / b;
```
```python [Python]
a, b = 5, 3
result = a / b
```
:::

## Example
Sarah, the bakery owner, wants to calculate the total cost, revenue, and profit for a batch of cakes. She bakes `60 cakes`, with a production cost of `$6 per cake`. However, due to varying demand, she decides to sell these cakes in different packs, each containing `6 cakes`, priced at `$45 per pack`.

::: code-group
```txt [Pseudocode]
BEGIN
 	INITIALIZE totalCakes = 60
    INITIALIZE productionCostPerCake = 6
    INITIALIZE cakesPerPack =  6
    INITIALIZE packPrice = 45
    MULTIPLY totalProductionCost = totalCakes * productionCostPerCake
    DIVIDE totalPacks = totalCakes / cakesPerPack
    MULTIPLY totalRevenue = totalPacks * packPrice
    COMPUTE totalProfit = totalRevenue - totalProductionCost
    DISPLAY "Total production cost for ", totalCakes, " cakes: $", totalProductionCost
    DISPLAY "Total revenue from selling ", totalCakes, " cakes in packs: $", totalRevenue
    DISPLAY "Total profit: $", totalProfit
END
```
```c [C]
int totalCakes = 60;
int productionCostPerCake = 6;
int cakesPerPack = 6;
int packPrice = 45;

int totalProductionCost = totalCakes * productionCostPerCake;
int totalPacks = totalCakes / cakesPerPack;
int totalRevenue = totalPacks * packPrice;
int totalProfit = totalRevenue - totalProductionCost;

printf("Total production cost for %d cakes: $%d\n", totalCakes, totalProductionCost);
printf("Total revenue from selling %d cakes in packs: $%d\n", totalCakes, totalRevenue);
printf("Total profit: $%d\n", totalProfit);
```
```c++ [C++]
int totalCakes = 60;
int productionCostPerCake = 6;
int cakesPerPack = 6;
int packPrice = 45;

int totalProductionCost = totalCakes * productionCostPerCake;
int totalPacks = totalCakes / cakesPerPack;
int totalRevenue = totalPacks * packPrice;
int totalProfit = totalRevenue - totalProductionCost;

cout << "Total production cost for " << totalCakes << " cakes: $" << totalProductionCost << endl;
cout << "Total revenue from selling " << totalCakes << " cakes in packs: $" << totalRevenue << endl;
cout << "Total profit: $" << totalProfit << endl;
```
```java [Java]
int totalCakes = 60;
int productionCostPerCake = 6;
int cakesPerPack = 6;
int packPrice = 45;

int totalProductionCost = totalCakes * productionCostPerCake;
int totalPacks = totalCakes / cakesPerPack;
int totalRevenue = totalPacks * packPrice;
int totalProfit = totalRevenue - totalProductionCost;

System.out.println("Total production cost for " + totalCakes + " cakes: $" + totalProductionCost);
System.out.println("Total revenue from selling " + totalCakes + " cakes in packs: $" + totalRevenue);
System.out.println("Total profit: $" + totalProfit);
```
```python [Python]
total_cakes = 60
production_cost_per_cake = 6
cakes_per_pack = 6
pack_price = 45

total_production_cost = total_cakes * production_cost_per_cake
total_packs = total_cakes // cakes_per_pack
total_revenue = total_packs * pack_price
total_profit = total_revenue - total_production_cost

print("Total production cost for {} cakes: ${}".format(total_cakes, total_production_cost))
print("Total revenue from selling {} cakes in packs: ${}".format(total_cakes, total_revenue))
print("Total profit: ${}".format(total_profit))
```
:::