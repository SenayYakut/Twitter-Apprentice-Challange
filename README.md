# Twitter-Apprentice-Challange
## 1. Purchasing Supplies:
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

## 2. Office party

There is an office party to celebrate the last quarter’s performance with cake for everyone! Many different circular cakes are ordered.
Given the radii of the circular cakes and the number of guests, determine the largest piece that can be cut from the cakes such that every guest gets a piece with the same area. It is not possible that a single piece has some part of one cake and some part of another cake. To be fair, every guest is served only one piece of cake.


NOTE: Use 3.14159265359 as the value of pi and return the answer runded to 4 places after the decimal. The answer is accepted if the absolute error is within 10^4 
For example there are6 cakes with radii=[1,1,1,2,2,3] and there need to be numberOfGUESTS=6 equal size pieces. Area of cake with radious r is calculated as (pi * radius*radius)


For radii 1,2,and 3 the areas are 3.14159265359, 12.5663706156 and 28.2743338851 units^2


It would be possible to serve everyone a piece that matches the area of the circle with radius 1, but that would not be the biggest piece possible that cn be served to everyone
Best way to cut the cakes is to cut the largest cake into 4 pieces(area=28.743338851/4=7.068583471275 and a similar size piece from each of the cakes with radius 2.


So, the answer is 7.0686


Determine the largest piece that can b cut given the above conditions.


Function description:
The function must return the maximum possible area piece of cake rounded to 4 decimals and cast as a string.
Largest piece has the following parameters radii[radius[0]....radius[n-1]
numberOfGuests an integer
Constraints
1<=size of radii<=10^5
1<=radii<=10^4(where 0<=i<=size of radii)
1<=numberOfGuests<=10^5


Function largestPice(radii, numberOfGuests){
//your code here
}
