function acharNumero(num) {
x=num.toString();

if(x<5){
    return "mercurio";
}
if(x>=5&&x<=10){
return "venus";
}
if(x>=10&&x<=100){
return "terra";
}
else{
    return "marte";
}
}