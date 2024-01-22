class Person {
    /* Gewicht in kg, Größe in m, Geschlecht als Zeichenfolge 'm' oder 'w' */
    #name;
    #gewicht;
    #groesse;
    #geschlecht;

    constructor(namePar, gewichtPar, groessePar, geschlechtPar) {
        this.name = namePar;
        this.gewicht = gewichtPar;
        this.groesse = groessePar;
        this.geschlecht = geschlechtPar;
    }

    set name(namePar) {
        if (typeof namePar !== 'string') {
            throw new Error('Ungültiger Name');
        }
        if (namePar.length < 3) {
            throw new Error('Name zu kurz');
        }
        this.#name = namePar;
    }

    set gewicht(gewichtPar) {
        if (gewichtPar < 10 || gewichtPar > 500) {
            throw new Error('Ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }

    get gewicht() {
        return this.#gewicht;
    }

    set groesse(groessePar) {
        if (groessePar < 0.5 || groessePar > 3.0) {
            throw new Error('Ungültige Größe');
        }
        this.#groesse = groessePar;
    }

    set geschlecht(geschlechtPar) {
        if (geschlechtPar !== 'm' && geschlechtPar !== 'w') {
            throw new Error('Ungültiges Geschlecht');
        }
        this.#geschlecht = geschlechtPar;
    }

    alert() {
        addEventListener('click', () => {
            this.alert('click');
        });
    }

    get bmi() {
        const nmbr = this.#gewicht / (this.#groesse * this.#groesse);
        return Math.round(nmbr * 10) / 10;
    }

    toString() {
        return (
            `Name: ${this.#name} Geschlecht: ${this.#geschlecht} Gewicht: ${this.#gewicht} Größe: ${this.#groesse} BMI: ${this.bmi}`
        );
    }
}

function berechnenUndAusgeben() {
    const name = document.getElementById('name').value;
    const gewicht = parseFloat(document.getElementById('gewicht').value);
    const groesse = parseFloat(document.getElementById('groesse').value);
    const geschlecht = document.getElementById('geschlecht').value;

    try {
        const person = new Person(name, gewicht, groesse, geschlecht);
        const bmi = person.bmi;
        alert(`BMI von ${name}: ${bmi}`);
    } catch (error) {
        alert(`Fehler: ${error.message}`);
    }
}
