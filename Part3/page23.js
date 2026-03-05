const emp ={
    name : "Karthik",
    city : "hyd",
    state : "telangana" , 
    country : "India"
}
// for(let key in emp){
//     console.log(key)
// }
// for(let key in emp){
//     console.log(key , emp[key])
// }
console.log(Object.keys(emp))
console.log(Object.values(emp)) //displays o/p in arrays
console.log(Object.entries(emp))