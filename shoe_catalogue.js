var shoeBrands = [];
var shoeColors = [];
var filtered = [];
var stock = [
  {
    brand:"Bronx",
    color:"black",
    price:"599",
    size:["5","6","10"],
    img:"bronx/black.jpg"
  },
  {
    brand:"Jimmy",
    color:"pink",
    price:"2499",
    size:["6","7","7","7","8"],
    img:"jimmy/pink.jpg"
  },
  {
    brand:"Gucci",
    color:"blue",
    price:"3499",
    size:["7","8","10"],
    img:"gucci/blue.jpg"
  },
  {
    brand:"Converse",
    color:"black",
    price:"899",
    size:["1","2","3","7","4","10"],
    img:"converse/black.jpg"
  },
  {
    brand:"Gucci",
    color:"red",
    price:"3499",
    size:["6","7","10"],
    img:"gucci/red.jpg"
  },
  {
    brand:"Converse",
    color:"blue",
    price:"899",
    size:["4","10"],
    img:"converse/blue.jpg"
  },
  {
    brand:"Converse",
    color:"brown",
    price:"899",
    size:["1","10"],
    img:"converse/brown.jpg"
  },
  {
    brand:"Converse",
    color:"green",
    price:"899",
    size:["1","2","3","4","10"],
    img:"converse/green.jpg"
  },
  {
    brand:"Jimmy",
    color:"white",
    price:"2499",
    size:["6","7","7","7","8"],
    img:"jimmy/white.jpg"
  },
  {
    brand:"Bronx",
    color:"cream",
    price:"599",
    size:["10"],
    img:"bronx/cream.jpg"
  },
  {
    brand:"Bronx",
    color:"white",
    price:"599",
    size:["6","7","10"],
    img:"bronx/white.jpg"
  },
  {
    brand:"Gucci",
    color:"cream",
    price:"3499",
    size:["6","7"],
    img:"gucci/cream.jpg"
  },
  {
    brand:"Converse",
    color:"pink",
    price:"899",
    size:["1","2","7","10"],
    img:"converse/pink.jpg"
  },
  {
    brand:"Converse",
    color:"purple",
    price:"899",
    size:["3","4","10"],
    img:"converse/purple.jpg"
  },
  {
    brand:"Converse",
    color:"red",
    price:"899",
    size:["1","2","4","10"],
    img:"converse/red.jpg"
  },
  {
    brand:"Jimmy",
    color:"sax",
    price:"2499",
    size:["6","7","7","7","8"],
    img:"jimmy/sax.jpg"
  },
  {
    brand:"Converse",
    color:"white",
    price:"899",
    size:["1","2","3","4","10"],
    img:"converse/white.jpg"
  },
  {
    brand:"Converse",
    color:"yellow",
    price:"899",
    size:["1","2","3","4","7","8","10"],
    img:"converse/yellow.jpg"
  },
  {
    brand:"Converse",
    color:"black",
    price:"1099",
    size:["1","2","3","6","7","4","10"],
    img:"converse/allblack.jpg"
  },
  {
    brand:"Fabiani",
    color:"brown",
    price:"2399",
    size:["6","7","8","10"],
    img:"fabiani/brown.jpg"
  },
  {
    brand:"Fabiani",
    color:"maroon",
    price:"2399",
    size:["6","7","8","10"],
    img:"fabiani/maroon.jpg"
  },
  {
    brand:"Fabiani",
    color:"white",
    price:"2399",
    size:["6","7","8","10"],
    img:"fabiani/white.jpg"
  },
  {
    brand:"Jimmy",
    color:"black",
    price:"2499",
    size:["6","7"],
    img:"jimmy/black.jpg"
  },
  {
    brand:"Gucci",
    color:"white",
    price:"3499",
    size:["6","7"],
    img:"gucci/white.jpg"
  },
  {
    brand:"Gucci",
    color:"black",
    price:"3499",
    size:["6","7","8","10"],
    img:"gucci/black.jpg"
  },
  {
    brand:"Gucci",
    color:"brown",
    price:"3499",
    size:["6","7","8","10"],
    img:"gucci/brown.jpg"
  }];
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
var count = 0;
//*********************Engine for filtering stock*************************
function filterDisplay(selected,source){
  property = selected;
  value = property.innerHTML;
  source = stock;
  if(property.classList[0] == "Brand"){
    property = "brand";
    activeBrands.push(value);
    values = activeBrands;
    count++;
  }
  else {
    activeColors.push(value);
    if (activeBrands.length !== 0) {
      source = filtered;
    }
    property = "color";
    values = activeColors;
    console.log(values);
  }
  var result = [];
  for(var i=0; i<source.length; i++){
    for(var j=0; j<values.length; j++){
      if(source[i][property] == values[j]){
        result.push(source[i]);
      }
    }
  }// end of for
  filtered = result;
  console.log(filtered);
  // if(count>0){
  //   filterDisplay()
  // }
  newResult = compShoe({shoe:filtered});
  document.querySelector(".main").innerHTML=newResult;
  return result;
} // end of filterDisplay
function removeFilter(property,value){
  var result = [];
  for(var i=0; i<filtered.length; i++){
    if(filtered[i][property] !== value){
      result.push(filtered[i]);
    }
  }// end of for
  filtered = result;
  newResult = compShoe({shoe:filtered});
  document.querySelector(".main").innerHTML=newResult;
  return result;
} // end of filterDisplay
//*************************Filtering*******************************
var activeColors = [];
var activeBrands = [];
function filter(event) {
  if(event.srcElement.classList.value == "check") {
    var status = event.srcElement.checked;
    if(status){
        console.log("Select");
        filterDisplay(event.srcElement.nextElementSibling,filtered);
    }
    else {
      console.log("Deselect");
      // removeFilter(filtered);
    }
  }//end of inner if
} // end of filter
//**************************Price Filtering******************************

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
  filter(event,"brand");
},false);
//********************Making color checkboxes work*********************
var colorDiv = document.querySelector(".colors");
colorDiv.addEventListener('click',function () {
  filter(event,"color");
},true);
