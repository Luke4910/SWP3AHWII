class Person {
    /* Gewicht in kg, Größe in cm */
    name;
    #gewicht;
    groesse;
    constructor(name, gewichtPar, groesse) {
        this.name = name;
        this.gewicht = gewichtPar;
        this.groesse = groesse;
    }
    get bmi() {
        const bmi = this.gewicht / ((this.groesse / 100) ** 2);
        return Math.round(bmi * 10) / 10;
    }
    set gewicht(gewichtPar) {
        // gewicht in kg
        if (gewichtPar < 1 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht() {
        return this.#gewicht;
    }
}

// Tests
const person1 = new Person('Hans', 80, 180);
console.log(person1.gewicht); 
console.log(person1.bmi);

const person2 = new Person('Lisa', 60, 160);
console.log(person2.gewicht); 
console.log(person2.bmi); 


 const person3 = new Person('Max', 600, 190);
  console.log(person3)
 console.log(person3.gewicht);
    console.log(person3.bmi);
    