let getForm = document.getElementById("form");
let getTable = document.getElementById("table");
const Fruit = [];


function food(foodName, type, price) {
  this.foodId=0;
  this.foodName = foodName;
  this.type = type;
  this.price = price;
  this.uniqueId =function (){
    this.foodId+=foodId;
    foodId++;
    return this.foodId
  }
  Fruit.push(this);
}

