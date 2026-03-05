/*const numbers = [25 , 30 , 27 , 20]
for(let e of numbers){
    console.log(e)
}
for(let i=0 ; i<numbers.length ; i++){
    console.log(numbers[i])
} */
 //for each loop is used to iterate over the elements of an array and for loop is used to iterate over the index of an array

nums = [25 , 30 , 27 , 20]
nums.forEach((nums) =>{
    console.log(nums)
});


//using map

nums.map((nums)=>
    console.log(nums)
)
const newArray=nums.map((nums) =>nums*2 )
console.log(newArray )


//using filter

const filteredArray = nums.filter((nums) => nums > 25)
console.log(filteredArray)