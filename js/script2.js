var num;
var resp = "S";
var Arreglo = [];

do {
    num = Number(prompt("Digite un número:"));
    console.log(num);
    añadir();
    resp = prompt("¿Deseas añadir otro número?");
} while (resp=="Si" || resp=="SI");
function añadir() {
    Arreglo.push(num);
    console.log(Arreglo);
}
function operaciones(){
    var sumaposi = 0, sumanega = 0, cantposi = 0, cantinega = 0;
    for (var i= 0; i< Arreglo.length; i++) {
        if(Arreglo[i]>0){
            sumaposi = sumaposi + Arreglo[i];
            cantposi++;
        }
    }
    for (var i= 0; i< Arreglo.length; i++) {
        if(Arreglo[i]<0){
            sumanega = sumanega + Arreglo[i];
            cantinega++;
        }
     }
    var sumapar = 0, cantpar= 0, sumaimpar = 0, cantimpar = 0;
    for (var i = 0; i< Arreglo.length; i++) {
        if(Arreglo[i]%2==0){
            sumapar = sumapar + Arreglo[i];
            cantpar++;
        }
     }
    for (var i= 0; i< Arreglo.length; i++) {
        if(Arreglo[i]%2!=0){
            sumaimpar = sumaimpar + Arreglo[i];
            cantimpar++;
        }
     }
     var media = null, med = 0, cantimed = 0;
     for (var i= 0; i< Arreglo.length; i++) {
        med = med + Arreglo[i];
        cantimed++;
     }
     media = parseFloat(med / cantimed);
    alert("La suma de todos los numeros positivos es: "+ sumaposi);
    alert("La suma de todos los numeros negativos es: "+ sumanega);
    alert("La suma de todos los numeros pares es: "+ sumapar);
    alert("La suma de todos los numeros impares es: "+ sumaimpar);
    alert("Total de numeros ingresados: " +cantposi+" números positivos y "+cantinega +" números negativos");
    alert("Total de numeros ingresados: " +cantpar+" números pares y "+cantimpar +" números impares");
    alert("La media de todos los numeros ingresados es: "+ media); 
}