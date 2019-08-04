var container=0;
function maximumContainers(n,cost,m) {
    container=n/cost;
    if(container>=m){
    container+=container/m;
    }
   return Math.ceil(container); 
}

console.log(maximumContainers(10,2,5)); 
console.log(maximumContainers(12,4,4)); 
console.log(maximumContainers(6,2,2)); 