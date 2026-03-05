const stock = {
    name : "wipro",
    lastprice : 500 ,
    currprice:800,
    growth: function () {
        console.log(this.currprice - this.lastprice)
    } ,
     growthpercent: function () {
        console.log(((this.currprice - this.lastprice)/this.lastprice)*100)
    }
    
}

console.log(stock.growth())
console.log(stock.growthpercent())