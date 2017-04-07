var shoeBrands = [];
var shoeColors = [];
var stock = [
  {
    brand:"Bronx",
    color:"black",
    price:"599",
    size:["5","6","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/bronx/black.jpg"
  },
  {
    brand:"Jimmy",
    color:"pink",
    price:"2499",
    size:["6","7","7","7","8"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/jimmy/pink.jpg"
  },
  {
    brand:"Gucci",
    color:"blue",
    price:"3499",
    size:["7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/gucci/blue.jpg"
  },
  {
    brand:"Converse",
    color:"black",
    price:"899",
    size:["1","2","3","7","4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/black.jpg"
  },
  {
    brand:"Gucci",
    color:"red",
    price:"3499",
    size:["6","7","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/gucci/red.jpg"
  },
  {
    brand:"Converse",
    color:"blue",
    price:"899",
    size:["4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/blue.jpg"
  },
  {
    brand:"Converse",
    color:"brown",
    price:"899",
    size:["1","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/brown.jpg"
  },
  {
    brand:"Converse",
    color:"green",
    price:"899",
    size:["1","2","3","4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/green.jpg"
  },
  {
    brand:"Jimmy",
    color:"white",
    price:"2499",
    size:["6","7","7","7","8"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/jimmy/white.jpg"
  },
  {
    brand:"Bronx",
    color:"cream",
    price:"599",
    size:["10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/bronx/cream.jpg"
  },
  {
    brand:"Bronx",
    color:"white",
    price:"599",
    size:["6","7","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/bronx/white.jpg"
  },
  {
    brand:"Gucci",
    color:"cream",
    price:"3499",
    size:["6","7"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/gucci/cream.jpg"
  },
  {
    brand:"Converse",
    color:"pink",
    price:"899",
    size:["1","2","7","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/pink.jpg"
  },
  {
    brand:"Converse",
    color:"purple",
    price:"899",
    size:["3","4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/purple.jpg"
  },
  {
    brand:"Converse",
    color:"red",
    price:"899",
    size:["1","2","4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/red.jpg"
  },
  {
    brand:"Jimmy",
    color:"sax",
    price:"2499",
    size:["6","7","7","7","8"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/jimmy/sax.jpg"
  },
  {
    brand:"Converse",
    color:"white",
    price:"899",
    size:["1","2","3","4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/white.jpg"
  },
  {
    brand:"Converse",
    color:"yellow",
    price:"899",
    size:["1","2","3","4","7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/yellow.jpg"
  },
  {
    brand:"Converse",
    color:"black",
    price:"1099",
    size:["1","2","3","6","7","4","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/converse/allblack.jpg"
  },
  {
    brand:"Fabiani",
    color:"brown",
    price:"2399",
    size:["6","7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/fabiani/brown.jpg"
  },
  {
    brand:"Fabiani",
    color:"maroon",
    price:"2399",
    size:["6","7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/fabiani/maroon.jpg"
  },
  {
    brand:"Fabiani",
    color:"white",
    price:"2399",
    size:["6","7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/fabiani/white.jpg"
  },
  {
    brand:"Jimmy",
    color:"black",
    price:"2499",
    size:["6","7"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/jimmy/black.jpg"
  },
  {
    brand:"Gucci",
    color:"white",
    price:"3499",
    size:["6","7"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/gucci/white.jpg"
  },
  {
    brand:"Gucci",
    color:"black",
    price:"3499",
    size:["6","7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/gucci/black.jpg"
  },
  {
    brand:"Gucci",
    color:"brown",
    price:"3499",
    size:["6","7","8","10"],
    img:"file:///home/bootcamp/projects/shoe_catalogue/gucci/brown.jpg"
  }];
//******************Getting all available colors***********************
var colorList = [];
function getColors() {
  for(var i=0; i<stock.length; i++){
    if(colorList.indexOf(stock[i].color)==-1){
      color = {color:""};
      color.color = stock[i].color;
      shoeColors.push(color);
      colorList.push(color.color);
    }
  } // end of loop
  return shoeColors;
} // end of getColors
//*****************Getting all available Brands************************
var brandlist = [];
function getBrands() {
  for(var i=0; i<stock.length; i++){
    if(brandlist.indexOf(stock[i].brand)==-1){
      brand = {brand:""};
      brand.brand = stock[i].brand;
      shoeBrands.push(brand);
      brandlist.push(brand.brand);
    } // end of loop
  } // end of loop
  return shoeBrands;
} // end of shoeBrands
getColors();
getBrands();
//*********************Compiling shoe template*************************
var shoeScript = document.querySelector("#shoe-template").innerHTML;
var compShoe = Handlebars.compile(shoeScript);
var result = compShoe({shoe:stock});
document.querySelector(".main").innerHTML+=result;
//*******************Compiling shoe brands menu*************************
var menuscript = document.querySelector("#brandOptions").innerHTML;
var compMenu = Handlebars.compile(menuscript);
var menuItem = compMenu({shoeBrand:shoeBrands});
document.querySelector(".brands").innerHTML+=menuItem;
//*******************Compiling shoe colors menu*************************
var colorscript = document.querySelector("#colorOptions").innerHTML;
var compColor = Handlebars.compile(colorscript);
var colorResult = compColor({shoeColor:shoeColors});
document.querySelector(".colorOptions").innerHTML += colorResult;
