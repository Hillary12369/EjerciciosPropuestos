var op = parseInt(prompt("OP: "));
var x=0;
function factorial(a){
    let i, s=1;
    for(i=1;i<a+1;i++){
        s*=i;
    }
    return s;
}
function datos1(){
    x = Number(prompt("N: "))
}
switch(op){
    case 1: datos1();
        document.write("El factorial es: ", factorial(x));
        break;
    default:
        document.write("Opcion no encontrada")
}