let items ={
    name :"laptop" ,
    price : 50000 ,
    quantity : 2,
    
}
items = {...items , price : 45000} //updating price
console.log(items)
items = {...items , brand : "dell"} //adding new property
console.log(items)