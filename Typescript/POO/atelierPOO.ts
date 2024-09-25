class Adress {
  mainAdress: string;
  city: string;
  postal: number;
  country: string;

  constructor(mainAdress: string, city: string, postal: number, country: string){
    this.mainAdress = mainAdress;
    this.city = city;
    this.postal = postal;
    this.country = country;
  }
}

class User {
  firstname: string;
  lastname: string;
  age: number;
  mail: string;
  phone: number;
  adress: Adress;


  constructor(firstname: string, lastname: string, age: number, mail: string, phone: number, adress: Adress) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.mail = mail;
    this.phone = phone;
  }
}

const adress1: Adress = new Adress("5 rue des lombards", "bdx", 33000, "France")
const firstUser: User = new User("Mathieu","Chauchau", 34, "chauchau@hotmail.fr", 9090909, adress1 )

console.log("mon id est:", firstUser, "et j'habite ici:", adress1)