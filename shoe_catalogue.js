var stock = [
  {
    brand: "Bronx",
    color: ["black","cream","white"],
    size: [[1,2,5,7],[2,4],[2,3,7]],
    price: 599,
    avail:20
  },
  {
    brand: "Converse",
    color: ["Allblack","black","blue","white","brown","green","pink","purple","red","yellow"],
    size: [[5,7],[1,7],[1,2,7],[1,2],[2,5],[1,2,5,7],[2,4],[2,3,7]],
    price: 1099,
    avail:20
  },
  {
    brand: "Fabiani",
    color: ["brown","maroon","white"],
    size: [[2,5,10],[2,11],[7,9,10]],
    price: 2399,
    avail:8
  },
  {
    brand: "RunFirst",
    color: ["black","blue","green","pink","purple","skyblue"],
    size: [[1,2,5,7],[2,4],[2,3,7],[1,2,5,7],[2,4],[2,3,7]],
    price: 59,
    avail:8
  },
  {
    brand: "Tommy",
    color: ["black","blue","white","navy","orange","red","sax"],
    size: [[1,2,5,7],[2,4],[2,3,7],[1,2,5,7],[2,4],[2,3,7],[1,4,6]],
    price: 299,
    avail: 17
  },
  {
    brand: "Vans",
    color: ["blue","brown","green","greenBlack","navy","red","redOrange","skyblue"],
    size: [[1,2,5,7],[2,4],[2,3,7],[1,2,5,7],[2,4],[2,3,7],[1,4,6],[1,4,6]],
    price: 1049,
    avail: 13
  },
  {
    brand: "Gucci",
    color: ["black","cream","white","brown","red","blue"],
    size: [[1,2,5,7],[2,4],[2,3,7],[1,2,5,7],[2,4],[2,3,7]],
    price: 2499,
    avail: 13
  },
  {
    brand: "Jimmy",
    color: ["black","sax","white","pink"],
    size: [[1,2,5,7],[2,4],[2,3,7]],
    price: 4499,
    avail: 13
  },
];
function newStock(name,colors,sizes) {
  var newItem = {
    brand: name,
    color: colors,
    size: sizes
  };
  return newItem;
}
