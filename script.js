var colorData = ["red", "green", "blue"]

var elements = [];

function createBox(color) {
  var that = this;
  this.number = 0;
 
  this.ele = document.createElement("div");
  this.ele.style.backgroundColor = color;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.display = "flex";
  this.ele.style.alignItems = "center";
  this.ele.style.justifyContent = "center";
  this.ele.style.color = "white";
  this.ele.style.fontSize = "18px";
  this.ele.style.borderRadius = "10px";
  
  this.eleNumber = document.createElement("div");
  this.eleNumber.innerHTML = this.number;
  
  this.ele.addEventListener("click", function() {
    that.increase();
  })
  
  this.ele.appendChild(this.eleNumber);
  document.body.appendChild(this.ele);
}

createBox.prototype.increase = function() {
  this.number = this.number + 1;
  this.eleNumber.innerHTML = this.number;
}

for (entry in colorData) {
 elements.push(new createBox(colorData[entry]));
}