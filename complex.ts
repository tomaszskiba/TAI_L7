class Complex {

    private imaginary: number;
    private real: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }


    getComplex() {
        return this.real + "+" + this.imaginary + "i";
    }
    
        module() {
            return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
        }
    
        sum(number: Complex) {
            let real = this.real + number.real;
            let imaginary = this.imaginary + number.imaginary;
            return real + "+" + imaginary + "i";
        }
    
        sub(number: Complex) {
            let real = this.real - number.real;
            let imaginary = this.imaginary - number.imaginary;
            if (imaginary < 0) {
                return real + "" + imaginary + "i";
            }
            return real + "+" + imaginary + "i";
        }
    }
    
    let first = new Complex(8,17);
    let second = new Complex(4, 11);
    
    console.log("Pierwsza liczba zespolona: " + first.getComplex());
    console.log("Modul pierwszej liczby zespolone: " + first.module());
    
    console.log("Druga liczba zespolona: " + second.getComplex());
    console.log("Modul drugiej liczby zespolonej: " + second.module());
    
    console.log("Wynik dodawania: " + first.sum(second));
    console.log("Wynik odejmowania: " + first.sub(second));

