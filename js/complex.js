var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.getComplex = function () {
        return this.real + "+" + this.imaginary + "i";
    };
    Complex.prototype.module = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.sum = function (number) {
        var real = this.real + number.real;
        var imaginary = this.imaginary + number.imaginary;
        return real + "+" + imaginary + "i";
    };
    Complex.prototype.sub = function (number) {
        var real = this.real - number.real;
        var imaginary = this.imaginary - number.imaginary;
        if (imaginary < 0) {
            return real + "" + imaginary + "i";
        }
        return real + "+" + imaginary + "i";
    };
    return Complex;
}());
var first = new Complex(8, 17);
var second = new Complex(4, 11);
console.log("Pierwsza liczba zespolona: " + first.getComplex());
console.log("Modul pierwszej liczby zespolone: " + first.module());
console.log("Druga liczba zespolona: " + second.getComplex());
console.log("Modul drugiej liczby zespolonej: " + second.module());
console.log("Wynik dodawania: " + first.sum(second));
console.log("Wynik odejmowania: " + first.sub(second));
