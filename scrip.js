const peso=document.getElementById("peso");
const BOTON=document.getElementById("calcular");

BOTON.addEventListener("click",calcularFlujo);
const FLU=document.getElementById("flu");
const MAN=document.getElementById("man");
const ERROR=document.getElementById("error")

let p=peso.value;

console.log(p);


function calcularFlujo(){
    let p=peso.valueAsNumber;
    if (p <= 0){
        console.log("ingrese un peso valido");
        ERROR.style.display="block";
        FLU.style.display="none";
        MAN.style.display="none";
    
    
    }else if (p<=30){
        FLU.innerHTML=holliday(p)+" cc";
        FLU.style.display="block";
        ERROR.style.display="none";

        MAN.innerHTML="m+m/2: "+holliday(p)*1.5;
        MAN.style.display="block";
 
    }else{
        FLU.innerHTML="SC*1000:"+superficie(p)*1000;
        FLU.style.display="block";
        ERROR.style.display="none";

        MAN.innerHTML="SC*1500:"+superficie(p)*1500;
        MAN.style.display="block";
    
    }

}

function holliday(p) {
    let a;
    if(p<=10){
        a=100*p;

    }else if(p<=20 & p>10){
        a=1000+50*(p-10);
    }else{
        a=1500+20*(p-20);
    }
  
    return a;

}
function superficie(p) {
    let superf=( (p * 4) + 7) / (p + 90);
    
    return superf;
}