function tabliczkaMnozenia() {
    var wynik = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            wynik += (i * j) + "\t";
        }
        console.log(wynik);
        wynik = "";
    }
}
tabliczkaMnozenia();
