var stock = [];
var shoes = document.querySelector(".shoes");
var brandFocus = "";
//********************************************
function newStock(name,colors,cost,sizes,url) {
  var newItem = {
    brand: name,
    color: colors,
    price: cost,
    size: sizes.split(","),
    img:url
  };
  return newItem;
}
//********************************************
function createStock() {
  var brand;
  var color;
  var price;
  var cost;
  var sizes;
  for(var i = 0; i<shoes.children.length; i++){
    brand = shoes.children[i].querySelector(".brand").innerHTML;
    color = shoes.children[i].querySelector(".color").innerHTML;
    sizes = shoes.children[i].querySelector(".size").innerHTML;
    cost = shoes.children[i].querySelector(".price").innerHTML;
    var url =  shoes.children[i].querySelector(".image").src;
    stock.push(newStock(brand,color,cost,sizes,url));
  }
  return stock;
}
createStock();
//*******************************************
function brandFilter(brand) {
  brandFocus = brand;
  allc = document.querySelector("#allc");
  allc.children[0].checked = true;
  for(var i=0; i<shoes.children.length; i++){
    if(brand==""){
      shoes.children[i].classList.remove("brandOff");
      shoes.children[i].classList.add("brandOn");
      continue;
    }
    if(shoes.children[i].querySelector(".brand").innerHTML !== brand){
      shoes.children[i].classList.remove("brandOn");
      shoes.children[i].classList.add("brandOff");
    }
    else{
      shoes.children[i].classList.remove("brandOff");
      shoes.children[i].classList.add("brandOn");
    }
  }
}
//********************************************
function colorFilter(color) {
  var shoeFocus = shoes.querySelectorAll(".brandOn");
  for(var i=0; i<shoeFocus.length; i++){
    if(color==""){
      shoeFocus[i].classList.remove("brandOff");
      shoeFocus[i].classList.add("brandOn");
      continue;
    }
    if(shoeFocus[i].querySelector(".color").innerHTML !== color){
      shoeFocus[i].classList.remove("brandOn");
      shoeFocus[i].classList.add("brandOff");
    }
  }
}
//***********ColorFiltering****************
var allc = document.querySelector("#allc");
allc.addEventListener("click",function() {
  brandFilter(brandFocus);
  colorFilter("");
  allc.children[0].checked = true;
})
var bla = document.querySelector("#bla");
bla.addEventListener("click",function() {
  brandFilter(brandFocus);
  colorFilter("black");
  bla.children[0].checked = true;
})
var whi = document.querySelector("#whi");
whi.addEventListener("click",function() {
  brandFilter(brandFocus);
  colorFilter("white");
  whi.children[0].checked = true;
})
var red = document.querySelector("#red");
red.addEventListener("click",function() {
  brandFilter(brandFocus);
  colorFilter("red");
  red.children[0].checked = true;
})

//***********BrandFiltering***************
var all = document.querySelector("#all");
all.addEventListener("click",function() {
  all.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("");
});
var jim = document.querySelector("#jim");
jim.addEventListener("click",function() {
  jim.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Jimmy");
});
var fab = document.querySelector("#fab");
fab.addEventListener("click",function() {
  fab.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Fabiani");
});
var run = document.querySelector("#run");
run.addEventListener("click",function() {
  run.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("RunFirst");
});
var tom = document.querySelector("#tom");
tom.addEventListener("click",function() {
  tom.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Tommy");
});
var van = document.querySelector("#van");
van.addEventListener("click",function() {
  van.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Vans");
});
var guc = document.querySelector("#guc");
guc.addEventListener("click",function() {
  guc.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Gucci");
});
var con = document.querySelector("#con");
con.addEventListener("click",function() {
  con.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Converse");
});
var bro = document.querySelector("#bro");
bro.addEventListener("click",function() {
  bro.children[0].checked = true;
  brandFilter(brandFocus);
  brandFilter("Bronx");
});
newItem = document.querySelector("#newStock");
function validateForm() {
  flag = true;
  if(document.querySelector("#brand").value == ""){
    document.querySelector("#errBrand").style.display = "block";
    flag = false;
  }
  console.log(document.querySelector("#color").value);
  if(document.querySelector("#color").value.length == 0){
    document.querySelector("#errColor").style.display = "block";
    flag = false;
  }
  console.log(document.querySelector("#sizes").value);
  if(document.querySelector("#sizes").value.length == 0){
    document.querySelector("#errSize").style.display = "block";
    flag = false;
  }
  if(document.querySelector("#image").value == ""){
    document.querySelector("#errImage").style.display = "block";
    flag = false;
  }
  return flag;
}
// console.log(stock);
var submit = document.querySelector("#submit");
submit.addEventListener("click",function() {
  var copy = document.querySelector(".shoe").cloneNode("deep");
  copy.querySelector(".brand").innerHTML = document.querySelector("#brand").value;
  copy.querySelector(".color").innerHTML = document.querySelector("#color").value;
  copy.querySelector(".price").innerHTML = document.querySelector("#price").value;
  copy.querySelector(".brand").innerHTML = document.querySelector("#brand").value;
  copy.querySelector(".sex").innerHTML = document.querySelector("#sex").value;
  copy.querySelector(".size").innerHTML = document.querySelector("#sizes").value;
  copy.querySelector(".image").src = document.querySelector("#image").value.substring(12);
  if(validateForm()){
    shoes.appendChild(copy);
    style.display = "none";s
  }
  brandFilter(brandFocus);
});
//**************Price Filtering*****************
