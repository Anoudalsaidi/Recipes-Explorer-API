let row = document.querySelector("#row")
let select = document.querySelector("select")
let cartona = ''

async function callApi(meal){

let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)

let data = await result.json()

let meals = data.recipes

cartona = ''

for(let i = 0 ; i < meals.length ; i++){

cartona += `

<div class="col-sm-10 col-md-5 col-lg-4 col-xl-3 col-xxl-3 ">

<div class="card bg-dark text-white">

<img src="${meals[i].image_url}" class="card-img-top">

<div class="card-body">

<p><b>Title:</b> ${meals[i].title}</p>
<p><b>Recipe Id:</b> ${meals[i].recipe_id}</p>
<p><b>Publisher:</b> ${meals[i].publisher}</p>
<p><b>Social Rank:</b> ${meals[i].social_rank}</p>

</div>

</div>

</div>

`

}

row.innerHTML = cartona

}

select.addEventListener("change",function(){

let meal = select.value
callApi(meal)

})

callApi("pizza")