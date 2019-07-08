//Karl Tomecek
//SWDV 655
//Week 1
//Grocery Class
var Grocery = /** @class */ (function () {
    //Constructor method
    function Grocery(gname, gquantity, gprice) {
        this.gname = gname;
        this.gquantity = gquantity;
        this.gprice = gprice;
        this.name = gname;
        this.quantity = gquantity;
        this.price = gprice;
    }
    return Grocery;
}());
//main body of script
var groceries = new Array(); //Create the array
groceries.push(new Grocery("Milk", 3, 4.29)); //Add Milk to array
groceries.push(new Grocery("Bread", 22, 5.77)); //Add Bread to array
groceries.push(new Grocery("Eggs", 31, 7.35)); //Add Eggs to array
//Display on page
document.body.innerHTML = "--------GROCERY LIST---------- <br />";
for (var i = 0; i < groceries.length; i++) {
    document.body.innerHTML += "NAME: " + groceries[i].name + "&nbsp;&nbsp;&nbsp;&nbsp;";
    document.body.innerHTML += "QUANTITY: " + groceries[i].quantity.toString() + "&nbsp;&nbsp;&nbsp;&nbsp;";
    document.body.innerHTML += "PRICE: " + groceries[i].price.toString() + "<br />";
}
