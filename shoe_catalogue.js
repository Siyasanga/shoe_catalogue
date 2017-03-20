var stock = [];
var shoes = document.querySelector(".shoes");
//********************************
function newStock(name,colors,cost,sizes) {
  var newItem = {
    brand: name,
    color: colors,
    price: cost,
    size: sizes.split(",")
  };
  return newItem;
}
//********************************
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
//*********************************
function brandFilter(brand) {
  for(var i=0; i<shoes.children.length; i++){
    if(shoes.children[i].querySelector(".brand").innerHTML == brand || brand.length==0){
      shoes.children[i].style.display = "inline-block";
    }
    else{
      shoes.children[i].style.display = "none";
    }
  }
}
//**********************************
function colorFilter(color) {
  for(var i=0; i<shoes.children.length; i++){
    if(shoes.children[i].querySelector(".color").innerHTML == color || color.length==0){
      shoes.children[i].style.display = "inline-block";
    }
    else{
      shoes.children[i].style.display = "none";
    }
  }
}
var allc = document.querySelector("#allc");
allc.addEventListener("click",function() {
  allc.children[0].checked = true;
  colorFilter("");
})
var bla = document.querySelector("#bla");
bla.addEventListener("click",function() {
  bla.children[0].checked = true;
  colorFilter("black");
})
var all = document.querySelector("#all");
all.addEventListener("click",function() {
  all.children[0].checked = true;
  brandFilter("");
});
var jim = document.querySelector("#jim");
jim.addEventListener("click",function() {
  jim.children[0].checked = true;
  brandFilter("Jimmy");
});
var fab = document.querySelector("#fab");
fab.addEventListener("click",function() {
  fab.children[0].checked = true;
  brandFilter("Fabiani");
});
var run = document.querySelector("#run");
run.addEventListener("click",function() {
  run.children[0].checked = true;
  brandFilter("RunFirst");
});
var tom = document.querySelector("#tom");
tom.addEventListener("click",function() {
  tom.children[0].checked = true;
  brandFilter("Tommy");
});
var van = document.querySelector("#van");
van.addEventListener("click",function() {
  van.children[0].checked = true;
  brandFilter("Vans");
});
var guc = document.querySelector("#guc");
guc.addEventListener("click",function() {
  guc.children[0].checked = true;
  brandFilter("Gucci");
});
var con = document.querySelector("#con");
con.addEventListener("click",function() {
  con.children[0].checked = true;
  brandFilter("Converse");
});
var bro = document.querySelector("#bro");
bro.addEventListener("click",function() {
  bro.children[0].checked = true;
  brandFilter("Bronx");
});
createStock();

// console.log(stock);
