const elForm = document.querySelector(".form")
const elInp = document.querySelector(".inp")
const elNumber = document.querySelector(".number")
const elCategory = document.querySelector(".category")
const elList = document.querySelector(".list")
const elSubtitle = document.querySelector(".exp__subtitle")
console.log(elSubtitle);
const elTitle = document.querySelector(".exp__title")

let data =[];

function getExpence (){
    elForm.addEventListener("submit", (e)=>{
            e.preventDefault()
            data.push({
                inp:elInp.value,
                number: elNumber.value,
                category: elCategory.value
            })
            renderExpence(data)
        elSubtitle.textContent= data.length
        totalCost(data)
           
    })
}
getExpence()

function renderExpence (data){
    elList.innerHTML = ""
    console.log(data);
    
   data.forEach((product, index)=>{
    elList.innerHTML +=`
    <li class="${product.category}">
    <div>
     <h3 class="title">${product.inp}</h3>
    <span class="spn">${product.category}</span>
    <p class="text">${product.number} so'm </p>
    </div>
   
    <button class="delete" data-index = "${index}"></button>
    </li>
    `

   })

}
elList.addEventListener("click", (e)=>{
    const index = e.target.dataset.index

    if(e.target.classList.contains("delete")){
    data.splice(index,1)
    renderExpence(data) 
    }
    
})

function totalCost(data){
    const total = data.reduce((summa, mahsulot) =>summa+mahsulot.narxi, 0)
    elTitle.textContent =total 
    
}

