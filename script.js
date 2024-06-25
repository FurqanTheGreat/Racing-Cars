function Car(x, y) { 
    this.x = x;
    this.y = y;
};
Car.prototype.draw = function () {
    var carHtml = '<img src="http://nostarch.com/images/car.png">';
   this.carElement = $(carHtml);
    this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
    });
    $("body").append(this.carElement);
   };
   Car.prototype.moveRight = function (distance) {
    this.x += distance;
    this.carElement.css({
        left: this.x,
        top: this.y
    })
   };
   Car.prototype.moveLeft = function (distance) {
    this.x -= distance;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveUp = function (distance) {
    this.y -= distance;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   Car.prototype.moveDown = function (distance) {
    this.y += distance;
    this.carElement.css({
    left: this.x,
    top: this.y
    });
   };
   var tesla = new Car(20, 20);
   var nissan = new Car(20, 200);
   tesla.draw();
   nissan.draw();
   
   var finishLine = 1000
var intervalID2 = setInterval(function() {
    tesla.moveRight(Math.floor(Math.random() * 5));
    if (tesla.x >= finishLine) {
        clearInterval(intervalID);
        clearInterval(intervalID2);
        alert("Tesla wins!");
    }
}, 30);

var intervalID = setInterval(function() {
    nissan.moveRight(Math.floor(Math.random() * 5));
    if (nissan.x >= finishLine) {
        clearInterval(intervalID);
        clearInterval(intervalID2);
        alert("Nissan wins!");
    }    
}, 30);
