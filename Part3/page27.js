let emp =["devi ", "hyd" , "telangana" , "India"]
emp = [...emp , "50000"] //adding new element to array
console.log(emp)
emp = [...emp , "nani"] //adding duplicate element to array
console.log(emp)

let emp1 = new Array("devi ", "hyd" , "telangana" , "India")
console.log(emp1.length)
console.log(emp1[0])
emp1.push("50000") //adding new element to array
console.log(emp1)
emp1.push("nani") //adding duplicate element to array
console.log(emp1)
for (let i = 0 ; i < emp1.length ; i++){
    console.log(emp1[i])

}
for (let e of emp1){
    console.log(e)
}   