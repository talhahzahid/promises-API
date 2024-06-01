// const bankbalance = 10000;
// const data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(bankbalance > 200000){
//             resolve("Shadi Mubarak")
//         }else{
//             reject("Bank balance barhaaon bahi...!")
//         }
//     },1000)
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// })

// const marks = +prompt("Enter Your Marks");
// const data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(marks >= 90){
//             resolve("Grade A1")
//         }else if(marks >= 80){
//             resolve("Grade A")
//         }else if(marks >= 70){
//             resolve("Grade B")
//         }else{
//             reject("fail")
//         }
//     },1000)
// })
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })






































const div = document.querySelector("div");
axios('https://fakestoreapi.com/products')
.then((res)=>{
   console.log(res.data);
   res.data.map((item)=>{
    div.innerHTML +=`
    <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="..." width="200">
  <div class="card-body">
    <h5 class="card-title">Category:${item.category}</h5>
    <p class="card-text">price :${item.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
   })
})
.catch((err)=>{
   console.log(err);
})