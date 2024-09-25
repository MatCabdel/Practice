var Adress = /** @class */ (function () {
    function Adress(mainAdress, city, postal, country) {
        this.mainAdress = mainAdress;
        this.city = city;
        this.postal = postal;
        this.country = country;
    }
    return Adress;
}());
var User = /** @class */ (function () {
    function User(firstname, lastname, age, mail, phone, adress) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.mail = mail;
        this.phone = phone;
    }
    return User;
}());
var adress1 = new Adress("5 rue des lombards", "bdx", 33000, "France");
var firstUser = new User("Mathieu", "Chauchau", 34, "chauchau@hotmail.fr", 9090909, adress1);
console.log("mon id est:", firstUser, "et j'habite ici:", adress1);
