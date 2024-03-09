"use strict";

// sessionStorage.setItem("name","Aqshin");
// sessionStorage.setItem("surname","Veliyev");

// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("surname"));

// sessionStorage.clear();

// sessionStorage.removeItem("name")

// localStorage.setItem("name","Aqshin");

// let inputKey = document.querySelector(".input-key");
// let inputValue = document.querySelector(".input-value");

// let addBtn = document.querySelector("button");

// addBtn.addEventListener("click",function(){
//     let key = inputKey.value;
//     let value = inputValue.value;

//     localStorage.setItem(key,value);

//     inputKey.value = "";
//     inputValue.value = "";
// })

// localStorage.setItem("datas",datas);

// let jsonData = {
//     name:"salam",
//     surname:"cxas",
//     phone:[
//         2123462, 45162
//     ],
//     group:[
//         {
//             name:"P418",
//             capacity:40,
//             teachers:[
//                 "Cavid",
//                 "Hemid"
//             ]
//         }
//     ]
// }

// console.log(jsonData.group[0].capacity);

// for (const iterator of jsonData.group[0].teachers) {
//     console.log(iterator);
// }

// console.log(jsonData);

// let datas = [
//   {
//     name: "Semed",
//     surname: "Huseynov",
//   },
//   {
//     name:"Meryem",
//     surname:"Eliyeva"
//   }
// ];

// localStorage.setItem("datas", JSON.stringify(datas));

// console.log(JSON.parse(localStorage.getItem("datas")));

let basket = [];



if(JSON.parse(localStorage.getItem("basket")) == null){

    localStorage.setItem("basket",JSON.stringify(basket));

}else{

    basket = JSON.parse(localStorage.getItem("basket"));

}

getBasketCount(basket);

function getBasketCount(arr){
    let basketCount = 0;

    if(arr.length != 0){
        
        for (const item of arr) {
        basketCount += item.count;

        }
    }

    document.querySelector(".navigation .basket-count").innerText = basketCount;
}




getBasketPrice(basket);

console.log(document.querySelector(".navigation .total-price"));

function getBasketPrice(basket){
    let basketPrice = 0;

    if(basket.length != 0){
        
        for (const item of basket) {
        basketPrice += item.count*item.price;

        }
    }

    document.querySelector(".navigation .total-price").innerText = basketPrice;
}


let addBtns = document.querySelectorAll("#products .add-btn");



addBtns.forEach(btn => {
    btn.addEventListener("click",function(e){

        e.preventDefault();
        
        let producuctId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));
        
        let productName = this.parentNode.firstElementChild.innerText;
        let productPrice = btn.nextElementSibling.innerText;
        let productImage = this.parentNode.previousElementSibling.getAttribute("src");

        let existProduct = basket.find(m=>m.id == producuctId);

        if(existProduct != undefined){
            existProduct.count++;
        }else{
            
        basket.push({
            id: producuctId,
            name: productName,
            price: parseInt(productPrice),
            image: productImage,
            count: 1
        }) 
        }      

      
        localStorage.setItem("basket",JSON.stringify(basket));
        getBasketCount(basket);
        getBasketPrice(basket);
        
        
        
    })
});