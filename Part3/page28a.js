const products = [
    {id : 1 , name : "product1" , price : 25} ,
        {id : 2 , name : "product2" , price : 50} ,
            {id : 3, name : "product3" , price : 45}
] ;
let cart =[]
//display products

function displayProducts(){
    products.forEach((products) => console.log(products))

}



//add product to cart

function  addTocart(id){
    const product = products.filter((products) => products.id === id)
    cart = [...cart , product]
    console.log(cart)

    


}

//display  products greater than 40 price

function displayCart(){
    cart =products.filter((products) => products.price > 40)
    console.log(cart)




}

displayProducts()
addTocart(1)
displayCart()
addTocart(2)
displayCart()