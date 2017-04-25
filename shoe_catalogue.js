var shoeBrands = [];
var shoeColors = [];
var filtered = [];
var stock = [
  {
    brand:"Bronx",
    color:"black",
    price:599,
    size:["5","6","10"],
    img:"bronx/black.jpg"
  },
  {
    brand:"Jimmy",
    color:"pink",
    price:2499,
    size:["6","7","7","7","8"],
    img:"jimmy/pink.jpg"
  },
  {
    brand:"Gucci",
    color:"blue",
    price:3499,
    size:["7","8","10"],
    img:"gucci/blue.jpg"
  },
  {
    brand:"Converse",
    color:"black",
    price:899,
    size:["1","2","3","7","4","10"],
    img:"converse/black.jpg"
  },
  {
    brand:"Gucci",
    color:"red",
    price:3499,
    size:["6","7","10"],
    img:"gucci/red.jpg"
  },
  {
    brand:"Converse",
    color:"blue",
    price:899,
    size:["4","10"],
    img:"converse/blue.jpg"
  },
  {
    brand:"Converse",
    color:"brown",
    price:899,
    size:["1","10"],
    img:"converse/brown.jpg"
  },
  {
    brand:"Converse",
    color:"green",
    price:899,
    size:["1","2","3","4","10"],
    img:"converse/green.jpg"
  },
  {
    brand:"Jimmy",
    color:"white",
    price:2499,
    size:["6","7","7","7","8"],
    img:"jimmy/white.jpg"
  },
  {
    brand:"Bronx",
    color:"cream",
    price:599,
    size:["10"],
    img:"bronx/cream.jpg"
  },
  {
    brand:"Bronx",
    color:"white",
    price:599,
    size:["6","7","10"],
    img:"bronx/white.jpg"
  },
  {
    brand:"Gucci",
    color:"cream",
    price:3499,
    size:["6","7"],
    img:"gucci/cream.jpg"
  },
  {
    brand:"Converse",
    color:"pink",
    price:899,
    size:["1","2","7","10"],
    img:"converse/pink.jpg"
  },
  {
    brand:"Converse",
    color:"purple",
    price:899,
    size:["3","4","10"],
    img:"converse/purple.jpg"
  },
  {
    brand:"Converse",
    color:"red",
    price:899,
    size:["1","2","4","10"],
    img:"converse/red.jpg"
  },
  {
    brand:"Jimmy",
    color:"sax",
    price:2499,
    size:["6","7","7","7","8"],
    img:"jimmy/sax.jpg"
  },
  {
    brand:"Converse",
    color:"white",
    price:899,
    size:["1","2","3","4","10"],
    img:"converse/white.jpg"
  },
  {
    brand:"Converse",
    color:"yellow",
    price:899,
    size:["1","2","3","4","7","8","10"],
    img:"converse/yellow.jpg"
  },
  {
    brand:"Converse",
    color:"black",
    price:1099,
    size:["1","2","3","6","7","4","10"],
    img:"converse/allblack.jpg"
  },
  {
    brand:"Fabiani",
    color:"brown",
    price:2399,
    size:["6","7","8","10"],
    img:"fabiani/brown.jpg"
  },
  {
    brand:"Fabiani",
    color:"maroon",
    price:2399,
    size:["6","7","8","10"],
    img:"fabiani/maroon.jpg"
  },
  {
    brand:"Fabiani",
    color:"white",
    price:2399,
    size:["6","7","8","10"],
    img:"fabiani/white.jpg"
  },
  {
    brand:"Jimmy",
    color:"black",
    price:2499,
    size:["6","7"],
    img:"jimmy/black.jpg"
  },
  {
    brand:"Gucci",
    color:"white",
    price:3499,
    size:["6","7"],
    img:"gucci/white.jpg"
  },
  {
    brand:"Gucci",
    color:"black",
    price:3499,
    size:["6","7","8","10"],
    img:"gucci/black.jpg"
  },
  {
    brand:"Gucci",
    color:"brown",
    price:3499,
    size:["6","7","8","10"],
    img:"gucci/brown.jpg"
  }];
//*********************Creating new Stock****************************
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
//************************
function createStock() {
  var brand;
  var color;
  var price;
  var cost;
  var sizes;
  for(var i = 0; i<shoes.children.length; i++){
    brand = document.querySelector("#brand").value;
    color = document.querySelector("#color").value;
    sizes = document.querySelector("#sizes").value;
    cost = document.querySelector("#image").value;
    var url =  document.querySelector("#image").value;
    stock.push(newStock(brand,color,cost,sizes,url));
  }
  return stock;
}
//*************Validate Form**************************//
newItem = document.querySelector("#newStock");
function validateForm() {
  flag = true;
  if(document.querySelector("#brand").value == ""){
    document.querySelector("#errBrand").style.display = "block";
    flag = false;
  }
  if(document.querySelector("#color").value == ""){
    document.querySelector("#errColor").style.display = "block";
    console.log(document.querySelector("#color").value);
    flag = false;
  }
  if(document.querySelector("#sizes").value.length == 0){
    document.querySelector("#errSize").style.display = "block";
    console.log(document.querySelector("#sizes").value);
    flag = false;
  }
  if(document.querySelector("#image").value == ""){
    document.querySelector("#errImage").style.display = "block";
    flag = false;
  }
  if(document.querySelector("#sex").value == ""){
    document.querySelector("#errSex").style.display = "block";
    flag = false;
  }
  return flag;
}
//*****************************************************//
//******************Getting all property types***********************
function getOptions(property) {
  var result = [];
  for(var i=0; i<stock.length; i++){
    if(result.indexOf(stock[i][property])==-1){
      result.push(stock[i][property]);
    }
  } // end of loop
  return result;
} // end of getColors
var brandlist = getOptions("brand"); // This is where all types of brands are stored
var colorList = getOptions("color"); // This is where all existing shoe colors are stored
var activeBrands = [];
var activeColors = [];
var filtered;
//*********************Filtering By Brands*************************
function pullBrands(brand) {
  filtered = [];
  if(brand.length !== 0){
    activeBrands.push(brand);
  }
  for(var i=0; i<stock.length; i++){
    for(var j=0; j<activeBrands.length; j++){
      if(stock[i].brand == activeBrands[j]){
        filtered.push(stock[i]);
      }
    }
  }
  if(activeBrands.length==0){
    filtered = stock;
  }
  document.querySelector(".main").innerHTML = compShoe({shoe:filtered});
  pullColors("");
  return filtered;
}
//*************************Filtering By Colors*******************************
function pullColors(color) {
  results = [];
  if(color.length !== 0){
    activeColors.push(color);
  }
  var focus = filtered;
  if(filtered.length ==0){
    focus = stock;
  }
  if(activeColors.length !== 0)
  for(var i=0; i<focus.length; i++){
    for(var j=0; j<activeColors.length; j++){
      if(focus[i].color == activeColors[j]){
        results.push(focus[i]);
      }
    }
  }
  else {
    results = filtered;
  }
  document.querySelector(".main").innerHTML = compShoe({shoe:results});
  return results;
}
//**************************Removing a Filter******************************
function remove(value,source) {
  source.splice(source.indexOf(value),1);
  return source;
}
function priceFilter() {
  results = [];
  if(document.querySelector("#min").value > document.querySelector("#max").value){
    console.log(document.querySelector("#min").value);
    extra = document.querySelector("#max").value;
    document.querySelector("#max").value = document.querySelector("#min").value;
    document.querySelector("#min").value = extra;
  }
  var focus = pullColors("");
  for(var i=0; i<focus.length; i++){
    if(1000 >= min.value && 1000 <= max.value){
      console.log("Hello");
      results.push(focus[i]);
    }
  }
  document.querySelector(".main").innerHTML = compShoe({shoe:results});
  return results;
}
//***************Getting the Min-price***************************
function getMin() {
  var min = stock[0].price;
  for(var i=0; i<stock.length; i++){
    if(stock[i].price < min){
      min = stock[i].price;
    }
  }
  return min;
}
//***************Getting the Max-price***************************
function getMax() {
  var max = stock[0].price;
  for(var i=0; i<stock.length; i++){
    if(stock[i].price > max){
      max = stock[i].price;
    }
  }
  return max;
}
document.querySelector("#min").value = getMin();
document.querySelector("#max").value = getMax();
//*********************Compiling shoe template***************************
var shoeScript = document.querySelector("#shoe-template").innerHTML;
var compShoe = Handlebars.compile(shoeScript);
var result = compShoe({shoe:stock});
document.querySelector(".main").innerHTML+=result;
//*******************Compiling shoe brands menu*************************
var menuscript = document.querySelector("#brandOptions").innerHTML;
var compMenu = Handlebars.compile(menuscript);
var menuItem = compMenu({shoeBrand:brandlist});
document.querySelector(".brands").innerHTML+=menuItem;
//*******************Compiling shoe colors menu*************************
var colorscript = document.querySelector("#colorOptions").innerHTML;
var compColor = Handlebars.compile(colorscript);
var colorResult = compColor({shoeColor:colorList});
document.querySelector(".colors").innerHTML += colorResult;
//********************Making Brand checkboxes work*********************
var brandDiv = document.querySelector(".brands");
brandDiv.addEventListener('click',function () {
  if(event.srcElement.classList.value == "check") {
    var status = event.srcElement.checked;
    if(status){
        pullBrands(event.srcElement.nextElementSibling.innerHTML);
    }
    else {
      console.log("Deselect");
      remove(event.srcElement.nextElementSibling.innerHTML,activeBrands);
      pullBrands("");
    }
  }
},false);
//********************Making color checkboxes work*********************
var colorDiv = document.querySelector(".colors");
colorDiv.addEventListener('click',function () {
  if(event.srcElement.classList.value == "check") {
    var status = event.srcElement.checked;
    if(status){
        pullColors(event.srcElement.nextElementSibling.innerHTML);
    }
    else {
      console.log("Deselect");
      remove(event.srcElement.nextElementSibling.innerHTML,activeColors);
      pullColors("");
    }
  }
},false);
var min = document.querySelector("#min");
var max = document.querySelector("#max");
min.addEventListener("change",function() {
  priceFilter();
},false);
var submit = document.querySelector("#submit");
submit.addEventListener("click",function() {
  var copy;
  if(validateForm()){
    createStock();
  }
});
