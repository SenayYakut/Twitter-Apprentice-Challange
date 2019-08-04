# Twitter-Apprentice-Challange
1. Purchasing Supplies:
A manufacturer purchases delicate components that must be shipped in expensive custom containers. The supplier agrees to provide a free container of the components in return for the return of a number of shipping containers. Determine the maximum number of containers the manufacturer can purchase, assuming each container is immediately emptied returned for credit.

For example, start a budget n=4 units of currency to buy containers at cost=1 unit each. The number of empty containers to return for a free  full container is m=2. First, buy 4 containers for the entire budget. Turn in those 4 containers for 2 more. Turn in those 2 containers for one more. At this point, there are not enough funds or containers to receive another. In total , 4+2+1=7 containers received.

Function Description
Complete the function maximumContainers in the editor below. For each test case the function must print an integer, the maximum number of containers the manufacturer can obtain, each on a new line. No return value is expected.


maximumContainers has the following parameter(s):
Scenarios: a string array where each string contains three space-separated integers, n, cost, and m, the starting budget, the price of a full container, and the number of containers that can be turned in for a full container, respectively.

Constraints
1<t <=10^3
2<=n<=10^5
1<=cost<=n
2<=m<=n

There are 3 test cases :
1- spend 10 units currency on 5 containers at 2 units each. Turn in 5 containers for another one.
2- Spend 12 units on 3 containers at 4 units.There aren’t enough containers to turn in
3- Spend 6 units on 3 containers at 2 units. Turn in 2 of the containers for a 4th container leaving 1 old and 1 new container. Turn those 2 in for 1 more container.

