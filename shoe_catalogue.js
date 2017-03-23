var stock = [];
var shoes = document.querySelector(".shoes");
var brandFocus = "";
//********************************************
function newStock(name,colors,cost,sizes) {
  var newItem = {
    brand: name,
    color: colors,
    price: cost,
    size: sizes.split(",")
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
    stock.push(newStock(brand,color,cost,sizes));
  }
  return stock;
}
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
createStock();

// console.log(stock);
