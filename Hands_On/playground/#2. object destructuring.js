// creating object named as product
const product = {
    label :'red notebook',
    price : 30,
    stock : 201,
    saleprice : undefined
}

//de structuring object 
const{label,price,saleprice}=product
console.log(label)
console.log(price)

// renaming variable 
const{label:otherlabel}=product
console.log(otherlabel)

// using this de structured variables 
const transaction = (type,{label,price})=>{
    console.log(type,label,price)
}

transaction('order',product)
